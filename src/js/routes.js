var configRouter = function(router) {
    router.map({
        '/foo': {
            component: getComponent('js/Foo/Foo.js')
        },
        '/bar': {
            component: getComponent('js/Bar/Bar.js')
        },
        '/osoba': {
            component: getComponent('js/osoba/osoba.js')
        }
    })
};

function getComponent(path) {
    return function(resolve) {
        System.import(path).then(function(m) {
            resolve(m.default);
        });
    }
};

export {
    configRouter
};
