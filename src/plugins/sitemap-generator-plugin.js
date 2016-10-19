var moment = require('moment');

function SitemapWebpackPlugin(base, options, fileName) {
    this.base = base;
    this.options = options;
    this.fileName = fileName || 'sitemap.xml';
}

function formatDateTime(date) {
    return moment(date).utc().format('YYYY-MM-DDTHH:mm:ss+00:00');
}

SitemapWebpackPlugin.prototype.apply = function(compiler) {
    var self = this;

    // Create sitemap from paths
    var out = '<?xml version="1.0" encoding="UTF-8"?>\n';
    out +=
        '<urlset\n' +
        '\txmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
        '\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
        '\txsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n' +
        '\t\thttp://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
    var now = new Date();
    var lastModString = formatDateTime(now);
    for(var i = 0; i < self.options.length; i++) {
        var path = self.options[i].path;
        var priority = self.options[i].priority ? self.options[i].priority: 0.6;
        var changefreq = self.options[i].changefreq ? self.options[i].changefreq: 'weekly';

        out += '\t<url>\n';
        out += '\t\t<loc>' + self.base + path + '</loc>\n';
        out += '\t\t<changefreq>' + changefreq + '</changefreq>\n';
        out += '\t\t<priority>' + priority.toFixed(2) + '</priority>\n';
        out += '\t\t<lastmod>' + lastModString + '</lastmod>\n';
        out += '\t</url>\n';
    }
    out += '</urlset>';

    compiler.plugin('emit', function(compilation, callback) {
        compilation.fileDependencies.push(self.fileName);
        compilation.assets[self.fileName] = {
            source: function () {
                return out;
            },
            size: function () {
                return Buffer.byteLength(out, 'utf8');
            }
        };
        callback();
    });
};

module.exports = SitemapWebpackPlugin;
