linkem.js
=========
A jQuery plugin for easy replication of DOM text.

What?
-----
`linkem.js` lets you easily link DOM elements to an input element, for
real-time replication of text across your page. As a user is typing in
an input field, or selecting from a drop-down menu, that text can be
shown immediately wherever you like.

How?
----
Source jQuery and linkem.js:
```diff
 <!DOCTYPE html>
 <html>
   <head>
+    <script
+      src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">
+    </script>
+    <script src="linkem.js"></script>
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
     <script src="linkem.js"></script>
   </head>
   <body>
+    <input class="linkme" />
+    <div class="linkme"></div>
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
     <script src="linkem.js"></script>
   </head>
   <body>
     <input class="linkme" />
     <div class="linkme"></div>
+    <script>$(".linkme").linkem()</script>
   </body>
 </html>
```

Type away and watch your input instantly replicate!
