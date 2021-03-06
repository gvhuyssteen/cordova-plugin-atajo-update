var androidHelper = require('./lib/android-helper');
var iosHelper = require("./lib/ios-helper");
var utilities = require("./lib/utilities");

module.exports = function(context) {

    var platforms = context.opts.cordova.platforms;

    console.log("==========> PLATFORMS ARE : ", platforms); 

    if (platforms.indexOf("android") !== -1) {
        androidHelper.replaceMainActivity(context);
    }
    else if (platforms.indexOf("ios") !== -1) {
        iosHelper.replaceViewController(context);
    }


    // Add a build phase which runs a shell script that executes the Crashlytics
    // run command line tool which uploads the debug symbols at build time.
    /*
    if (platforms.indexOf("ios") !== -1) {
        var xcodeProjectPath = utilities.getXcodeProjectPath(context);
        iosHelper.removeShellScriptBuildPhase(context, xcodeProjectPath);
        iosHelper.addShellScriptBuildPhase(context, xcodeProjectPath);
    }
    */
};