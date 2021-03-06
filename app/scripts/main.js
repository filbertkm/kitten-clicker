/* global jQuery */
'use strict';

(function( $, Audio ) {

	var	view,
		cats = [
		{
			name: 'Miso',
			file: 'kitten.jpg',
			clicks: 0
		},
		{
			name: 'Mango',
			file: 'kitten2.jpg',
			clicks: 0
		},
		{
			name: 'Skittles',
			file: 'kitten3.jpg',
			clicks: 0
		},
		{
			name: 'Ginger',
			file: 'kitten4.jpg',
			clicks: 0
		},
		{
			name: 'Pickles',
			file: 'kitten5.jpg',
			clicks: 0
		}
	];

	var controller = {
		catClick: function(cat, clicksElement) {
			return function() {
				var audio = new Audio('media/meow.ogg'),
					getText = function( clickCount ) {
						return clickCount + ' click(s)';
					};

				audio.play();

				cat.clicks++;
				clicksElement.innerHTML = getText( cat.clicks );

				view.mainImage.setAttribute( 'src', 'media/' + cat.file );
			};
		}
	};

	view = {
		imageList: document.getElementById( 'image-list' ),
		imageMain: document.getElementById( 'image-main' ),
		mainImage: document.createElement( 'img' ),

		setMainImage: function( fileName ) {
			this.mainImage.setAttribute( 'src', 'media/' + fileName );
		},

		makeCatLabel: function(cat) {
			var label = document.createElement( 'h3' );
			label.innerHTML = cat.name;

			return label;
		},

		makeClickCounter: function(cat) {
			var clicks = document.createElement( 'span' );
			clicks.innerHTML = cat.clicks + ' click(s)';

			return clicks;
		},

		makeThumbnail: function(cat) {
			var li = document.createElement( 'li' ),
				img = document.createElement( 'img' ),
				clicks = this.makeClickCounter( cat );

			img.setAttribute( 'src', 'media/' + cat.file );
			img.setAttribute( 'id', cat.name );

			li.appendChild( img );

			img.parentNode.insertBefore( this.makeCatLabel(cat), img );
			img.parentNode.insertBefore( clicks, img );

			img.addEventListener( 'click', controller.catClick( cat, clicks ), false );

			return li;
		},

		init: function() {
			this.imageMain.appendChild( this.mainImage );

			for ( var i in cats ) {
				this.imageList.appendChild( view.makeThumbnail( cats[i] ) );
			}
		}
	};

	var init = function() {
		$( document ).foundation();

		console.log( 'init' );

		view.setMainImage( cats[0].file );
		view.init();
	};

	$( init );

})( jQuery, Audio );
