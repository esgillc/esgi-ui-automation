let merge = require('deepmerge')
let wdioConf = require('./wdio.conf')

exports.config = merge(wdioConf.config, {
    credentials: {
        username: 'dan504',
        password: 'Wentiirim'
    },
    baseUrl: 'https://www.esgisoftware.com',
    env: 'PROD'
}, { clone: false })
