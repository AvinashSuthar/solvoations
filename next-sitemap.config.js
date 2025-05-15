/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://solvaotions.tech',
    generateIndexSitemap: true, // (optional)
    generateRobotsTxt: true, // (optional)
    // ...other options
}
