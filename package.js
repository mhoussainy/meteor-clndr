Package.describe({
  name: 'ericksond:clndr',
  version: '0.0.1',
  summary: 'Wrapper for clndr.js',
  git: 'https://github.com/ericksond/meteor-clndr',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.addFiles('clndr.js', 'client');
});
