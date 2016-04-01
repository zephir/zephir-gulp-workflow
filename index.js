'use strict';

// gulp is required so everything can be started
// With the userConfig object, the basic config can be overwritten
module.exports = function (gulp, userConfig) {
    var  plugins = {
        // Node plugins
        extend          : require('extend'),                // Used to merge the base and the given config objects
        argv            : require('yargs').argv,            // Used to get arguments from command line
        requireDir      : require('require-dir'),           // Well be used to import tasks from tasks directory
        del             : require('del'),                   // Delete stuff

        // Gulp plugins
        sourcemaps      : require('gulp-sourcemaps'),       // Sourcemap generation
        sass            : require('gulp-sass'),             // Compiles sass to css
        postcss         : require('gulp-postcss'),          // PostCSS compiler for plugins
        uglify          : require('gulp-uglify'),           // Minify js
        concat          : require('gulp-concat'),           // Concat files

        // PostCSS Plugins
        autoprefixer    : require('autoprefixer'),          // Autoprefix
        cssnano         : require('cssnano'),               // Minify css
        pxtorem         : require('postcss-pxtorem')        // Convert px values to rem based on baseFontSize
    };

    var config = require('./config.json');
    config = plugins.extend(true, config, userConfig);

    // Try to determine enviroment. If nothing's given, use "local".
    config.env = "local";
    if (plugins.argv.dev == true) {
        config.env = "dev";
    } else if (plugins.argv.prep == true || plugins.argv.preproduction == true) {
        config.env = "prep";
    } else if (plugins.argv.prod == true || plugins.argv.production == true) {
        config.env = "prod";
    }

    config.dest = config.dest[config.env];

    // Init all tasks
    var tasks = plugins.requireDir('./tasks');
    for (var task in tasks) {
        
        if(typeof tasks[task] == 'function') {
            tasks[task](gulp, plugins, config);
        }

    }

};