Package.describe({
  name: 'deanius:octokat',
  version: '0.4.11',
  summary: 'Meteor wrapper around Github APIs, via OctoKat NPM module',
  git: 'https://github.com/chicagogrooves/deanius-meteor-octokat',
  documentation: 'README.md'
});

Npm.depends({
  octokat: '0.4.11'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('deanius:octokat.js', 'server');
  api.export('Octokat');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('deanius:octokat');
});
