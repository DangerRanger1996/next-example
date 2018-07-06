const routes = require('next-routes');

module.exports = routes()
.add('about','about/index','/about')
.add('index','index/index','/');
