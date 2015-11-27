Package.describe({
  name: 'hiennguyen:bootstrap-daterangepicker',
  version: '2.1.13',
  summary: 'Date range picker component for Bootstrap',
  git: 'https://github.com/dangrossman/bootstrap-daterangepicker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');

  api.use(['jquery', 'moment'], "client", {weak:true})

  api.addFiles('daterangepicker.js', ["client"]);
  api.addFiles('daterangepicker.css', ["client"]);
});
