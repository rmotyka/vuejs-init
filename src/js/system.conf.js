// set our baseURL reference path
System.config({
    transpiler: 'traceur',
    map: {
         text: 'lib/systemjstext/text.js'
    },
    meta: {
        '*.html': {
            loader: 'text'
        }
    }
});
