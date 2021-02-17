const ComparePdf = require('compare-pdf')
function getfiles () {
    const path = require('path')
    const fs = require('fs')
    const dirpath = path.join(__dirname, '/data/baseline')
    return fs.readdirSync(dirpath)
}

describe('PDF_REPORTS', function () {
    const files = getfiles()
    files.forEach(function (file) {
        it(`${file} should be the same pdf`, async () => {
            let config = require('./config')
            let comparisonResults = await new ComparePdf(config)
                .actualPdfFile(file)
                .baselinePdfFile(file)
                .compare()
            console.log('Compare:::: ', comparisonResults.message)
            expect(comparisonResults.status).toBe('passed', comparisonResults.message)
        })
    })
})
