let merge = require('deepmerge')
let wdioConf = require('./wdio.conf')

exports.config = merge(wdioConf.config, {
    baseUrl: 'https://www.esgisoftware.com',
    env: 'PROD'
}, { clone: false })
