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

See LICENSE
