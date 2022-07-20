//const createProxyMiddleware = require('http-proxy-middleware');
const url = process.env.CONTAINER_NAME;
//module.exports = function(app) {
//  app.use(
//    '/customers',
//    createProxyMiddleware({
//      target: url,
//      changeOrigin: true,
//    })
//  );
//};

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/customer', { target: url }))

}
//const PROXY_CONFIG = require('PROXY_CONFIG') [
//   {
//    context: ['/customers'],
//    target: url,
//    secure: false,
//    logLevel: 'debug',
//    pathRewrite: {'^/customers' : ''}
//  }
//];
//module.exports = PROXY_CONFIG;