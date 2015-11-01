$(document).ready(function() {
	// accordoen
	if ($('.accordion__link').length > 0) {
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
	};

	// reset
	if ($('.accordion__reset').length > 0) {
		$('.accordion__reset').on('click', function(event) {
		event.preventDefault();

		var $this = $(this),
			item = $this.closest('.accordion__item-container');
			checkboxes = item.find('input:checkbox');

			checkboxes.prop("checked", false);

		});
	};
	

	// price-slider
	if ($('.price-slider').length > 0) {
		$('.price-slider').slider({
	      	range: true,
	      	min: 0,
	      	max: 25000,
	      	values: [ 0,  25000],
	    	slide: function( event, ui ) {
	    		$('.price-val__start').find('.price-val__input-start')
	    		.val($('.price-slider').slider( "values", 0 ));

	    		$('.price-val__over').find('.price-val__input-over')
	    		.val($('.price-slider').slider( "values", 1 ));	
	      	}
	    });	
	};
    

  	// select
  	if ($('.filter-select__val').length > 0) {
  		$('.filter-select__val').select2({
			minimumResultsForSearch: Infinity
		});
  	};
  	

	// slideshow
	if ($('.products__images-sm').length > 0) {
		$('.products__images-sm').on('click', function(event) {
			event.preventDefault();

			var $this = $(this),
				item = $this.closest('.products__images-item'),
				slideshow = $this.closest('.products__images-container'),
				largeImage = slideshow.find('.products__images-lg'),
				imgPath = item.find('img').attr('src');

			if (!item.hasClass('active')) {

				item.addClass('active').siblings().removeClass('active');

				largeImage.find('img').fadeOut(500, function() {
					$(this).attr('src', imgPath).fadeIn(500);
				});
			}

		});
	};

	// view soft знаю что повторяться ПЛОХО, решил сделать сам
	if ($('.view-select__link_view-lg').length > 0) {
		$('.view-select__link_view-lg').on('click', function(event) {
			event.preventDefault();

			var $this = $(this),
				viewSelect = $this.closest('.view-select__list'),
				viewLink = viewSelect.find('view-select__link_view-md'),
				prodList = $('.products__list');

			if (!viewLink.hasClass('active')) {

				viewLink.addClass('active');
		    	prodList.removeClass(' products__list_grid');
		    	prodList.removeClass(' products__list_line');
		    }

		});
	};
	

	if ($('.view-select__link_view-md').length > 0) {
		$('.view-select__link_view-md').on('click', function(event) {
			event.preventDefault();

			var $this = $(this),
				viewSelect = $this.closest('.view-select__list'),
				viewLink = viewSelect.find('view-select__link_view-md'),
				prodList = $('.products__list');

			if (!viewLink.hasClass('active')) {

				viewLink.addClass('active');
				prodList.removeClass(' products__list_line');
		    	prodList.addClass(' products__list_grid');
		    }

		});
	};

	if ($('.view-select__link_view-sm').length > 0) {
		$('.view-select__link_view-sm').on('click', function(event) {
			event.preventDefault();

			var $this = $(this),
				viewSelect = $this.closest('.view-select__list'),
				viewLink = viewSelect.find('view-select__link_view-sm'),
				prodList = $('.products__list');

			if (!viewLink.hasClass('active')) {

				viewLink.addClass('active');
				prodList.removeClass(' products__list_grid')
		    	prodList.addClass(' products__list_line');
		    }

		});
	};
	

	// columnizer
	if ($('.information').length > 0) {
		$('.information').columnize({
			width: 550
		});
	};
});