const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    // Change this to match your backend API path
    createProxyMiddleware({
      target: "http://localhost:4000", // Change this to your backend server's URL
      changeOrigin: true,
    })
  );
};
