jquery.processing.js
====================

This is a jQuery plugin for using [Processing.js](http://processingjs.org/) more easily.

Usage
-----

```javascript
$("canvas").processing({
  setup: function(p) {
    p.size(400, 300);
    // ...
  },
  draw: function(p) {
    p.background(0);
    // ...
  },
  mouseClicked: function(p) {
    p.println(p.mouseButton);
    // ...
  }
});
```







