jquery.processing.js
====================

jquery.processing.js is a [jQuery](http://jquery.com/) plugin for using [Processing.js](http://processingjs.org/) more easily.

This plugin is licensed under [the MIT License](http://www.opensource.org/licenses/mit-license.php);


Usage
-----

### Basic

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

### Advanced

You can use a simple scene management system.

```javascript
$("canvas").processing_ex({
  // "start" is the first scene.
  start: {
    setup: function(p) {
      p.size(200, 200);
      // change the next scene
      return "foo";
    }
  },
  foo: {
    setup: function(p) {
      this.i = 0;
    },
    draw: function(p) {
      p.println(this.i++);
    }
  }
});
```

You can also use some configurations.

```javascript
$("canvas").processing_ex({
  entry: {
    initialize: function(p) {
      p.size(200, 200);
      // ...
    }
  }
}, {
  start: "entry", eventMapping: { setup: "initialize" }
});
```

Change Log
----------

### 2012/07/26 (v2.0.0)
* Some configurations become available in $.fn.processing_ex.

### 2012/04/24 (v1.1.0)
* add ex method ($.processing_ex)

### 2012/04/23 (v1.0.0)
* release first version







