var http = require('http');

var express = require('express');

var app = express();

(function() {

  var webpack = require('webpack');
  var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
  var compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
})();


app.get("/", function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

if (require.main === module) {
  var server = http.createServer(app);
  server.listen(process.env.PORT || 8080, function() {
    console.log("Listening on %j", server.address());
  });
}