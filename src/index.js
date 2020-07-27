import through from 'through2'
import gutil from 'gulp-util'
import Launcher from '@wdio/cli'
const shell = require('shelljs')

shell.rm('-rf', 'screenshots/diff', 'screenshots/actual', 'errorshots', 'reports')
shell.mkdir('-p', 'screenshots', 'errorshots', 'reports/custom-report')

module.exports = (options) => {
    return through.obj(async function (file, encoding, callback) {
        let stream = this
        let wdio = new Launcher(file.path, options)
        try {
            let code = await wdio.run()
            process.stdin.pause()
            if (code !== 0) {
                process.nextTick(() => stream.emit('error', new gutil.PluginError('gulp-webdriver', `wdio exited with code ${code}`, {
                    showStack: true
                })))
            }
            process.nextTick(() => stream.emit('end'))
        } catch (e) {
            process.stdin.pause()
            process.nextTick(() => stream.emit('error', new gutil.PluginError('gulp-webdriver', e, { showStack: true })))
        }
        return stream
    })
}
