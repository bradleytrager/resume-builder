sysPath = require 'path'

exports.config =
  # See http://brunch.io/#documentation for documentation.
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
        'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/

      order:
        before: [
          'vendor/scripts/console-polyfill.js'
          'vendor/scripts/jquery-1.9.1.js'
          'vendor/scripts/handlebars-1.0.0.js'
          'vendor/scripts/ember.js'
          'vendor/scripts/tooltip.js'

          ]

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^(app|vendor)/
      order:
        before: ['vendor/styles/bootstrap.less']

    templates:
      precompile: true
      root: 'templates'
      joinTo: 'javascripts/app.js' : /^app/

      modules:
        addSourceURLs: true

  # allow _ prefixed templates so partials work
  conventions:
    ignored: (path) ->
      startsWith = (string, substring) ->
        string.indexOf(substring, 0) is 0
      sep = sysPath.sep
      if path.indexOf("app#{sep}templates#{sep}") is 0
        false
      else
        startsWith sysPath.basename(path), '_'