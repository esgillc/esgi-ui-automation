const jenkinsapi = require('jenkins-api')
const jenkins = jenkinsapi.init('http://jenkins:1123be54ddba91e67cb3db33430efd8019@ec2-54-227-30-56.compute-1.amazonaws.com:8080')
jenkins.last_build_info('ProdSmokeTest_New', function (err, data) {
    if (err) { return console.log(err) }
    console.log(data)
})
// jenkins.all_jobs(function (err, data) {
//     if (err) { return console.log(err) }
//     console.log(data)
// })
// jenkins.last_completed_build_info('TestCreation', function (err, data) {
//     if (err) { return console.log(err) }
//     console.log(data)
// // })
// jenkins.build('ProdSmokeTest_New', function (err, data) {
//     if (err) { return console.log(err) }
//     console.log(data)
// })
