let merge = require('deepmerge')
let wdioConf = require('./wdio.conf')

exports.config = merge(wdioConf.config, {
    baseUrl: process.env.LEGACYBASEURL || 'https://www.esgisoftware.com',
    env: 'LEGACY'
}, { clone: false })
