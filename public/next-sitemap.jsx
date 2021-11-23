module.exports = {
  siteUrl: "https://damansdak.pl",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: "https://damansdak.pl/en",
      hreflang: "en",
    },
    {
      href: "https://damansdak.pl/de",
      hreflang: "de",
    },
    {
      href: "https://damansdak.pl/ru",
      hreflang: "ru",
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/additional-page"),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "test-bot",
        allow: ["/path", "/path-2"],
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/sub-path-1", "/path-2"],
      },
    ],
    additionalSitemaps: [
      "https://damansdak.pl/sitemap-1.xml",
      "https://damansdak.pl/sitemap-2.xml",
      "https://damansdak.pl/sitemap-3.xml",
    ],
  },
};
