// Karma configuration
// Generated on Wed Feb 03 2016 08:44:18 GMT+0100 (Central European Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        plugins: ['karma-systemjs'],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'systemjs'],
        //frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            '*.js',
            'src/js/**/*Spec.js'

        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        systemjs: {
            // Path to your SystemJS configuration file 
            configFile: 'js/system.conf.js',

            // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries. 
            serveFiles: [
                'lib/**/*.js'
            ],

            // SystemJS configuration specifically for tests, added after your config file. 
            // Good for adding test libraries and mock modules 
            config: {
                paths: {
                    //'angular-mocks': 'bower_components/angular-mocks/angular-mocks.js'
                    'traceur': 'src/lib/traceur/traceur.js',
                    'systemjs': 'src/lib/systemjs/system.js',
                    'system-polyfills': 'src/lib/systemjs/system-polyfills.js'
                    //'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'                    
                }
            },

            testFileSuffix: 'spec.js'
        }
    })
}
