$(document).ready(function() {
	$('.accordion__link').on('click', function(event) {
		event.preventDefault();

		var $this = $(this),
			item = $this.closest('.accordion__item'),
			hideItem = item.find('.accordion__item-container'),
			arrow = $this.closest('.accordion__arrow')
			duration = 600;

		hideItem.stop(true, true).slideToggle(duration);

	});

	$('.accordion__reset').on('click', function(event) {
		event.preventDefault();

		var $this = $(this),
			item = $this.closest('.accordion__inner-item');
			
			item.find('.checkbox').removeProp('checked');

	});

});