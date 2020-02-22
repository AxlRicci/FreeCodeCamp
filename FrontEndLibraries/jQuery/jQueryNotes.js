//! jQuery
// before using jQuery you need to add a <script> tag to the top of the page.

//! document ready function
// ensures that javascript does not run before HTML is rendered.
//* js within this function will run as soon as HTML is rendered.
<script>
  $(document).ready(function() {

  });
</script>

//! functions
// start with a $ (dollar sign operator / bling).
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce"); // selects all button elements and adds the class animated bounce to them. (animated bounce is from a CSS animation libary)
  });
</script>

//! Targeting elements 
// use css syntax when targeting elements within the $("ELEMENT/CLASS/ID") selector
<script>
  $(document).ready(function() {
    $(".well").addClass("animated bounce"); // selects elements with class well
  });
</script>

//! methods..
// .addClass("ClassName") -- Adds class to an element
// .removeClass("ClassName") -- Removes class from an element
// .css("property","value") -- Adds css to an element
// .prop("propName", "value") -- change properties of elements (i.e disable)
// .html("<em>piece of text</em>") -- adds HTML tags and text within an element.
// .text("add or alter a piece of text") -- adds or alters selected piece of text.
// .remove() -- removes an element from the document.
// .appendTo("target area") -- moves an element to another place within the document.
// .clone() -- copies an element to another place within the document. (can be used in this way: .clone.appendTo("target area") -- copies an element to the target area)
// .parent() -- selects the parent element of the selected element. (can be used in this way: .parent().css("background","red") -- applies css to parent element)
// .children() -- selects the child elements of the selected element. (can be used in this way: .child().css("color","orange") -- applies css to child elements)

//! using CSS selectors
//* use special css selectors to select certain elements within the selector area.
<script>
  $(document).ready(function() {
      $("CSS SELECTORS CAN BE USED HERE").AddClass("animated bounce")
  });
</script>
