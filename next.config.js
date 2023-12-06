module.exports = {
  basePath: "/cloudinary",
  reactStrictMode: true,
  publicRuntimeConfig: {
    app: {
      name: process.env.NAME,
      description: process.env.DESCRIPTION,
    },
  },
};
