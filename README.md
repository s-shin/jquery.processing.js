jquery.processing.js
====================

jquery.processing.js is a [jQuery](http://jquery.com/) plugin to use [Processing.js](http://processingjs.org/) more easily.

This plugin is licensed under [the MIT License](http://www.opensource.org/licenses/mit-license.php);


Usage
-----

### Basic

```javascript
$(function() {
  // $("canvas").processing("simple", {
  // or
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
});
```

### Simple Scene Management System

You can use a simple scene management system.

```javascript
$(function() {
  var scenes = {
    entry: {
      setup: function(p) {
        p.size(200, 200);
        // change the next scene
        return scenes.foo;
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
  };
  $("canvas").processing("scene", scenes.entry);
});
```

You can also use some configurations.

```javascript
$(function() {
  var scenes = {
    start: { initialize: function(p) { ... } }, ...
  }
  $("canvas").processing("scene", scenes.start, {
    eventMapping: { setup: "initialize" }
  });
});
```

### Useful Framework

An useful framework is exported as `$.processing.framework`.

This super scene class, `$.processing.framework.Scene`, is available to common prototype-based inheritance mechanism (ex. YUI's extend, CoffeeScript).

```coffeescript
framework = $.processing.framework

class Start extends framework.Scene
      draw: (p) ->
      	    p.background 255
      	    p.background 200 if framework.key.isPressed p.UP

$ -> $("canvas").processing "framework", new Start
```

A sample game using this framework is [here](http://s-shin.github.com/snakegame/).


Change Log
----------

### 2012/08/03 (v3.0.0)
* some big changes
    - unify functions to $.fn.processing
    - change the scene management system
    - implement the useful framework ($.processing.framework)

### 2012/07/26 (v2.0.0)
* Some configurations become available in $.fn.processing_ex.

### 2012/04/24 (v1.1.0)
* add ex method ($.processing_ex)

### 2012/04/23 (v1.0.0)
* release first version







