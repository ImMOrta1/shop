$(document).ready(function() {
	// accordoen
	$('.accordion__link').on('click', function(event) {
		event.preventDefault();

		var $this = $(this),
			item = $this.closest('.accordion__item'),
			hideItem = item.find('.accordion__item-container'),
			arrow = $this.closest('.accordion__arrow')
			duration = 600;

		hideItem.stop(true, true).slideToggle(duration);

	});

	// reset
	$('.accordion__reset').on('click', function(event) {
		event.preventDefault();

		var $this = $(this),
			item = $this.closest('.accordion__item-container');
			
			item.find('input').removeProp('checked');

	});
	// colunnizer


	var columnizer = function() {

		$('.information').columnize({
			width: 530
		});
	};

});