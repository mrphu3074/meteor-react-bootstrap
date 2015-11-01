Package.describe({
    name: 'izzilab:react-bootstrap',
    version: '0.0.3',
    // Brief, one-line summary of the package.
    summary: 'ReactBootstrap 0.27.3 using official React package',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/mrphu3074/meteor-react-bootstrap.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

var BS_VERSION = '0.27.2',
    EXTERNALIFY_VERSION = '0.1.0',
    REACT_VERSION = '0.14.0',
    REACT_DOM_VERSION = '0.14.0';
Npm.depends({
    'externalify': EXTERNALIFY_VERSION,
    'react' : REACT_VERSION,
    'react-dom' : REACT_DOM_VERSION,
    'react-bootstrap': BS_VERSION
});

Package.onUse(function(api){
    api.use(['react@0.14.1_1', 'cosmos:browserify@0.8.1']);
    api.addFiles([
        'bs.browserify.options.json',
        'bs.browserify.js'
    ]);
    api.export(["ReactBootstrap"]);
});