$(document).ready(function(){ // Ensures the page is fully loaded by the engine before running any code inside of the block
	$('h2').css('text-decoration', 'underline') // Underlines any h2 elements on the page with the selector and css syntax
	$('ul').css('border', 'solid 1px #ccc') // Adds a border to the ul elements that is solid and 1px wide.
});

$(document).ready(function() {
	$('h2').addClass('underline'); // Adding the css class to the html element instead of directly adding the styling
	$('ul').addClass('border');
})

/**
 * To select something in jQuery using the '$' symbol is shot hand for 'jquery'
 * 
 * Using the .css method changes the html document not the css document. It does it by using inline css styling on the html code
 * We are able to get around this by creating the classes in the css file itself and using jquery to add the class where desired
 */

// $('h2').text('Hello World') // Changes the text of the h2 elements to 'Hello World'
// $('#myName') // Selects the 'myName' ID
// .html allows us to change the html of the page
// .css allows us to change the css styling of the page 
// .addClass add a class to the html element
// .removeClass removes a class from the html element
// :odd selects the odd numbered items
// :even selects the even numbered items
// .on is the same as the event listener methods in normal js
// .mouseEnter runs the code when the mouse hovers over the element
// .mouseLeave runs the code when the mouse leaves the element
// .click runs the code when the selected element has had a mouse click


$(document).ready(function() {
    $('tr:odd').addClass('odd'); // Finds the odd number/index and applies what ever code is stated
    $('tr:even').addClass('even') // Finds the even number/index and applies what ever code is stated
})

$(document).ready(function() {
    $("#stream1_btn").on("click", function() { // Event handler .on and click is the same as the event listener method
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").click(function() { // Produces the same result as the other code above. Just cleaner
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").mouseOver(function() { // Runs on mouse over of the element
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
   $("#stream4_btn").mouseLeave(function() { // Runs on mouse leaving the selected element 
	$(".stream1").removeClass('highlight_stream');
	$(".stream2").removeClass('highlight_stream');
	$(".stream3").removeClass('highlight_stream');
	$(".stream3").addClass('highlight_stream');
});
}); 