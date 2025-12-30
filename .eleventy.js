const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const { inspect } = require("node:util")

module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true)
  eleventyConfig.setUseGitIgnore(false);
  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPassthroughCopy(
    "src/**/*.{jpg,png,gif,mp3,mp4,pdf,css,ico,woff2}"
  );

  // Alias `layout: post` to `layout: layouts/post.njk`
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addFilter("escapeHashes", (s) => {
    return s.split("#").join("%23");
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  const old = new Date(new Date() - 1000 * 60 * 60 * 24 * 365 * 10)
  eleventyConfig.addFilter("oldPost", (dateObj) => {
    if (dateObj > old) return ""
    //const rel = DateTime.fromJSDate(dateObj, { zone: "utc" })
    //  .toRelative({ base: Date.now() });
    return `
<blockquote class="warning">
<p>Note: this content is very old (${ dateObj.toISOString().substring(0, 10)}).</p>
<p>Please read <a href="/old-content">this disclaimer</a>.</p>
</blockquote>`
  });

  eleventyConfig.addFilter("debug", x => inspect(x))

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter("thisYear", (posts, min) => {
    const year = new Date(new Date() - 1000 * 60 * 60 * 24 * 365);
    const thisYearPosts = posts.filter((p) => p.date > year);
    return thisYearPosts.length > min ? thisYearPosts : posts.slice(-1 * min);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
    );
  }

  const cheerio = require("cheerio");
  const { dirname, resolve } = require("path");
  eleventyConfig.addNunjucksFilter("localImage", (content, page) => {
    const $ = cheerio.load(content);
    for (const img of $("img[src]")) {
      const { src } = img.attribs;
      if (/^https?:/.test(src)) continue;
      img.attribs.src = resolve(dirname(page.filePathStem), img.attribs.src);
    }
    return $("body").html();
  });

  eleventyConfig.addNunjucksAsyncFilter(
    "tumble",
    require("@isaacs/njk-tumble")
  );
  eleventyConfig.addNunjucksFilter("draftPermalink", (slug, page) => {
    const { fileSlug } = page;
    if (!slug) slug = fileSlug;
    return `draft/${slug}`;
  });

  eleventyConfig.addNunjucksFilter("postPermalink", (slug, page) => {
    const { date, fileSlug } = page;
    if (!slug) slug = fileSlug;
    const p = Date.parse(date);
    if (!p) return `/${slug}`;
    const d = new Date(p);
    const pad = (n, s) => ("0".repeat(s) + n.toString(10)).slice(-1 * s);
    const y = pad(d.getUTCFullYear(), 4);
    const m = pad(d.getUTCMonth() + 1, 2);
    return `/${y}/${m}/${slug}`;
  });

  const { kebabCase } = require("lodash");
  eleventyConfig.addNunjucksFilter(
    "tagPermalink",
    (tag) => `/tagged/${kebabCase(tag)}`
  );

  eleventyConfig.addFilter("filterTagList", filterTagList);

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet].sort((a, b) => a.localeCompare(b, "en")));
  });

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "direct-link",
      symbol: "#",
      level: [1, 2, 3, 4],
    }),
    slugify: eleventyConfig.getFilter("slug"),
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        if (err) throw err
        const content_404 = fs.readFileSync("_site/404.html");

        browserSync.addMiddleware("*", (_req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html", "liquid"],

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: "/",
    // -----------------------------------------------------------------

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // Opt-out of pre-processing global data JSON files: (default: `liquid`)
    dataTemplateEngine: false,

    // These are all optional (defaults are shown):
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
