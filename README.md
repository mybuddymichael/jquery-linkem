linkem.js
=========
A jQuery plugin for easy replication of DOM text.

What?
-----
`linkem` lets you easily link DOM elements to an input element, for
real-time replication of text across your page. As a user is typing text
into an input field, or selecting from a drop-down menu, that text can
be shown immediately wherever you like.

Show me!
-------
Go to [the demo site][demo] for a live example of the plugin in action.

How?
----

Install it:
```shell
$ cd path/to/my/js
$ wget https://raw.github.com/mybuddymichael/jquery-linkem/master/jquery.linkem.js
```
Or you can go [directly to the code][raw] and copy and paste it into a file
called `jquery.linkem.js` wherever your JavaScript files live.

Then source jQuery and `linkem`:
```diff
 <!DOCTYPE html>
 <html>
   <head>
+    <script
+      src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">
+    </script>
+    <script src="path/to/js/jquery.linkem.js"></script>
   </head>
   <body>
   </body>
 </html>
```

Create an input element and as many empty divs as you want, all with the
same `class` attribute:
```diff
 <!DOCTYPE html>
 <html>
   <head>
     <script
       src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">
     </script>
     <script src="jquery.linkem.js"></script>
   </head>
   <body>
+    <input class="linkables" />
+    <div class="linkables"></div>
   </body>
 </html>
```

Use jQuery to call `.linkem()` on the class:
```diff
 <!DOCTYPE html>
 <html>
   <head>
     <script
       src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">
     </script>
     <script src="jquery.linkem.js"></script>
   </head>
   <body>
     <input class="linkables" />
     <div class="linkables"></div>
+    <script>$(".linkables").linkem()</script>
   </body>
 </html>
```

Type away and watch your input instantly replicate!


[demo]: http://mybuddymichael.github.com/jquery-linkem/
[raw]: https://raw.github.com/mybuddymichael/jquery-linkem/master/jquery.linkem.js
