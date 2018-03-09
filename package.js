Package.describe({
  name: 'pyrax:meteor-accounts-deezer',
  version: '1.0.1',
  summary: 'Login service for deezer',
  git: 'https://github.com/pyrax/meteor-accounts-deezer.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');

  api.use('ecmascript');
  api.use('underscore', ['server']);
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.use('pyrax:meteor-deezer-oauth@1.0.0');
  api.imply('pyrax:meteor-deezer-oauth');

  api.addFiles('deezer.js');
});
