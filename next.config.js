// next.config.js
// This is a Next.js config file. It allows us to add custom settings to our Next.js app.
// In this case, we're adding a custom domain to our image imports.
// This is because we're using Contentful as our CMS, and the images are hosted on their CDN.
// We need to add the domain to our config file so that Next.js knows to allow the images to be imported.

module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
};
