/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  // TODO Change siteUrl
  siteUrl: "https://example.com",
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      // { userAgent: "*", disallow: "/admin" },
      // ...
    ],
  },
};
