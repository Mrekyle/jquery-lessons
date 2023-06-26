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
// .show shows a hidden element 
// .hide Hides an element 
// .toggle works like an on off button, if it is shown it will hide and visa versa 
// .parent selects the parent of the selected element. IE is a 'p' element is selected it will select the element it lives in
// .child selects the child of the targeted element. 
// .next selects the next element in the dom tree. Not a parent or child element but the next available one. Meaning you don't need to select 
// the next element by using a selector, The () can be left blank
// .prev does the same as the .next function but it selects the previous element available
// .toggleClass toggles a class on or off for a selected element. Same as adding and removing a class.  

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
	$("#stream4_btn").mouseLeave(function() { // Runs on mouse leaving the selected element 
		$(".stream1").show(''); // Show shows a previously hidden element 
		$(".stream2").show('slow'); // Shows the element at a set speed by using the slow medium or fast pre defined speeds
		$(".stream3").show('medium'); // But can be defined by the developer in milliseconds
		$(".stream3").show('fast');
		$(".stream3").show(1000); // Dev defined in milliseconds 
	});
	$("#stream4_btn").mouseLeave(function() { // Runs on mouse leaving the selected element 
		$(".stream1").hide(''); // Hides an element 
		$(".stream2").hide('slow'); // Hides the element at a set speed by using the slow medium or fast pre defined speeds
		$(".stream3").hide('medium'); // But can be defined by the developer in milliseconds
		$(".stream3").hide('fast');
		$(".stream3").hide(1000); // Dev defined in milliseconds 
	});
	$("#stream4_btn").mouseLeave(function() { // Runs on mouse leaving the selected element 
		$(".stream1").toggle(''); // Works like an on off button. If its visible will be hidden and visa versa 
		
		
	});
});

$('.myName').removeClass('hello').addClass('chocolate') // Chaining the methods and events allows for cleaner and simpler code. 
$('p').css('background-color', 'red').slideUp('fast').slideDown(2000) // Also can be done with events.


/**
 * By using the 'this' keyword we allow the selection to be the content clicked on by the user
 */

$('p').click(function() {
	$(this).hide('slow') // Hides the 'p' element that has been clicked by the user. Only the one clicked not all on the page
}) // This is done by tht use of the 'this' keyword, which refers to this item that has been selected/clicked

$('button').mouseenter(function(){$(this).addClass('make-red').removeClass('make-blue')}) 
$('button').mouseenter(function(){$(this).addClass('make-blue').removeClass('make-red')})

// This is used in many instanced referring to the object/item that is being used but also selected by the jquery. Such as the button

$('.module-nav').on('click', function(){
    let allModulesCardsSelector = ".card";
    let thisModuleCardsSelector = "." + this.id + "-card";
    
    $(allModulesCardsSelector).removeClass('card-highlight');
    $(thisModuleCardsSelector).addClass('card-highlight');
    
})

// The above code is a quick and simple block of code that adds and removes a coloured background based on which item is clicked 
// by the user of the website. Run in testing