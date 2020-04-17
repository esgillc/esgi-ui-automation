import gutil from 'gulp-util'

import eslint from './gulp/eslint'
import test from './gulp/test'

const options = {
    src: 'src',
    dist: 'lib',
    tests: 'tests',
    errorHandler: (title) => {
        return (err) => {
            gutil.log(gutil.colors.red(`[${title}]`), err ? err.toString() : err)
        }
    }
}

eslint(options)
test(options)
