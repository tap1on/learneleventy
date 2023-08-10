/* .eleventy.js */

const Image = require("@11ty/eleventy-img");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy({"src/robots.txt": "/robots.txt"});


    eleventyConfig.addCollection("page", function(collections) {
        return collections.getFilteredByTag("page").sort(function(a, b) {
        return a.data.order - b.data.order;
        });
    });

  // ADD THIS
  eleventyConfig.addShortcode(
    "headers",
    (title, subtitle) =>
      `<h1>${title}</h1>
        <p>${subtitle}</p>`
  );

  eleventyConfig.addShortcode("currentDate", (date = DateTime.now()) => {
    return date;
  })


  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
