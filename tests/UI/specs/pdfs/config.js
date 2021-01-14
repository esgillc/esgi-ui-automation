let dir = __dirname
console.log('dir:::', dir)
module.exports = {
    paths: {
        actualPdfRootFolder: `${dir}/data/actual`,
        baselinePdfRootFolder: `${dir}/data/baseline`,
        actualPngRootFolder: `${dir}/data/actualPngs`,
        baselinePngRootFolder: `${dir}/data/baselinePngs`,
        diffPngRootFolder: `${dir}/data/diffPngs`
    },
    settings: {
        imageEngine: 'graphicsMagick',
        density: 100,
        quality: 70,
        tolerance: 0,
        threshold: 0.05,
        cleanPngPaths: false,
        matchPageCount: true
    }
}
