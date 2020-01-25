const rimraf = require('rimraf');

rimraf('./newman/*', function () {

    console.log("Clean newman-report");

});

rimraf('./allure-results/*', function () {

    console.log("Clean allure-results");

});