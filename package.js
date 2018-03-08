Package.describe({
  name: 'pyrax:meteor-accounts-deezer',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/pyrax/meteor-accounts-deezer.git'
});

Package.onUse(function(api) {
  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.use('pyrax:meteor-deezer-oauth');
  api.imply('pyrax:meteor-deezer-oauth');

  api.addFiles('deezer.js');
});
