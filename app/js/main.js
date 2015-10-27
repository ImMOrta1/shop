$(document).ready(function() {
	// accordoen
	$('.accordion__link').on('click', function(event) {
		event.preventDefault();

		var $this = $(this),
			item = $this.closest('.accordion__item'),
			hide = item.find('.accordion__item-container'),
			arrow = item.find('.accordion__arrow')
			duration = 600;

		if(!item.hasClass('close')) {

			hide.stop(true, true).slideUp(duration);
			item.addClass('close');
			arrow.removeClass('accordion__arrow_up');
			arrow.addClass('accordion__arrow_down');

		} else {

			hide.stop(true, true).slideDown(duration);
			item.removeClass('close');
			arrow.removeClass('accordion__arrow_down');
			arrow.addClass('accordion__arrow_up');
		}

	});

	// reset
	$('.accordion__reset').on('click', function(event) {
		event.preventDefault();

		var $this = $(this),
			item = $this.closest('.accordion__item-container');
			checkboxes = item.find('input:checkbox');

			checkboxes.prop("checked", false);

	});

	// price-slider
	$(function() {
		
    	$('.price-slider__linebar-hover').slider({
      		range: true,
      		min: 0,
      		max: 50000,
      		values: [ 0, 50000 ],
    		slide: function( event, ui ) {
    			$('.price-val__start').find('.price-val__input')
    			.val($('.price-slider__linebar-hover').slider( "values", 0 ));

    			$('.price-val__over').find('.price-val__input')
    			.val($('.price-slider__linebar-hover').slider( "values", 1 ));	
      		}
    	});	
  	});

	// columnizer
	var columnizer = function() {

		$('.information').columnize({
			width: 530
		});
	};

});