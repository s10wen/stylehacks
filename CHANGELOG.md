# 2.3.1

* Upgraded postcss-selector-parser to `v2.0.0`.
* Fixed an issue where stylehacks was not removing `*zoom: 1` from rules
  generated by other PostCSS plugins.

# 2.3.0

* Each warning now contains more information about the hack; what identifier
  it targets, what the hack is, and the browsers that it affects. E.g:
  
  ```js
  {
      browsers: [ 'ie 6', 'ie 5.5' ],
      identifier: 'selector',
      hack: '* html h1'
  }
  ```

# 2.2.0

* Added `value\9` hack.

# 2.1.0

* Added `html ~ /**/ body .selector` hack.
* Added a method to detect if a PostCSS node has any hacks.

# 2.0.0

* Added `body:empty` & `html:first-child` hacks.
* Upgraded to PostCSS 5.

# 1.0.0

* Initial release.
