$(document).ready(function() {

	var template = function(text) {
		return '<p><input type="checkbox" /><i class="glyphicon glyphicon-star"></i><span>'+ text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
	};
	
	var pCount = $('p').length;

	// set first items to active and checked when document loads
	var setActive = function() {
		$(":checkbox:first").prop("checked", true);
		$('span:first').addClass('cancel');
		$('.glyphicon-star:first').addClass('active');
	}
	setActive();
	

	// append value and new input element to the list when submitting the form
	$('form').submit(function() {
		var text = $('#todo').val();
		if(text !== "") {
			var html = template(text);
			$(html).appendTo('.list');
			$('#todo').val("");
		}
		return false;
	});


	// toggle the active class when clicking on the gyphicon star
	$('body').on('click', '.glyphicon-star', function() {
    $(this).toggleClass('active');
 	});

 	// add linethrough to text when checkbox is checked
 	
 		$('body').on('click', 'input', function() {
 			$(this).next().next().toggleClass('cancel');
 		});
 	

 	// remove the todo item from the list when clicking the glyphicon remove
 	$('body').on('click', '.glyphicon-remove', function() {
 		$(this).parent('p').remove();
 			pCount --;
			if(pCount < 1) {
 				$('.buffer').css("margin-top", 10);
 			}
 	});

});