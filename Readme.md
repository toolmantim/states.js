states.js
=========

Something we use at [AR](http://agencyrainford.com/) before we lay down backend code, states.js communicates different states in your high-fi HTML/JS mockups in 50 lines of simple jQuery.

Simply add a `<div class="state" title="Logged in">` and you'll get a state selector position fixed in the bottom right corner.

Requires [jQuery](http://jquery.com/) and reads like poetry when used with [HAML](http://haml.hamptoncatlin.com/).

Usage
-----

In HAML:

    .state{:title => "Form error"}
      %p.error Please fill out all the fields
      
and in HTML:

    <div class="state" title="Form error">
      <p class="error">Please fill out all the fields</p>
    </div>

If you have multiple elements belonging to the same state just make sure they have the same title:

    .state{:title => "Logged in"}
      %p Welcome Tim!
  
    %p Some stuff
  
    .state{:title => "Logged in"}
      %a{:href => "/logout"} Logout

License
-------

The MIT License

Copyright (c) 2009 Tim Lucas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.