//! Front End Libraries Certification
//! Bootstrap

// Bootstrap is a responsive CSS framework
// All elements are responsive regardless of screensize (desktop or mobile)

//! Adding Bootstrap to your app/webpage
// To use bootstrap:
// 1. Add the following <link> element to the header of the HTML.
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
// 2. Nest all Body HTML in a <div> with a class of container fluid.

//! Responsive images
// Use class of img-responsive to make images responsive.
<img class="img-responsive"/>

//! Centering text
// use class of text-center to center text
<h1 class="text-center">Hello, world I'm Centered</h1>

//! Buttons
// bootstrap can style buttons always need the class: btn
//* standard button styling 
//? class: btn btn-default
<button class="btn btn-default">like</button>

//* many styles available to highlight actions for users -- primary will be the most used..
//? class: btn btn-primary -- Blue
<button class="btn btn-primary">primary</button>

//? class: btn btn-info -- Light blue
<button class="btn btn-info">info</button>

//? class: btn btn-danger -- Red
<button class="btn btn-danger"></button>

//* have button take up 100% of available width
//? class: btn btn-block
<button class="btn btn-block"></button>

//! Grid layout system
// Runs on a 12 column grid system
// Create row and then define the width of the item.
// use class to determine size of columns and number the element will span.
// syntax is col-[screen size]-[columns to span]
// screen sizes span from xs to xl (small mobile (<576px) to large desktop (>1200px))
<div class="row">
    <div class="col-md-3">
        <button class="btn btn-block">This button will span 3 columns</button>
    </div>
</div>

//* can also be used for forms to ensure text and radio buttons are spaced evenly.
// use row and column controls for radio/checkboxes
<div class="row">
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
      </div>
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Loving</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Lazy</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Crazy</label>
      </div>
    </div>
</div></div></div></div></div>

// use form-control to control input, textarea, and select
<input class="form-control" type="text" placeholder="cat photo URL" required>
    <button class="btn btn-primary" type="submit"><i class="fa fa-paper-plane"></i> Submit</button>
</input>



//! Span to target inline elements
// use span elements to put several elements on the same and even style them differently.
<p>This is a way to make certain things<span class="text-danger"> different</span> on the same line</p>

//! use i element to insert icons
// use cdns like font awesome to insert icons using the i element 
<button>Like<i class="fas fa-thumbs-up"></i></button>


