(function( $ ) {

	$( document ).foundation();

	var imageList = document.getElementById( 'image-list' ),
		imageMain = document.getElementById( 'image-main' ),
		cats = [
			{
				"name": "Miso",
				"file": "kitten.jpg",
				"clicks": 0
			},
			{
				"name": "Mango",
				"file": "kitten2.jpg",
				"clicks": 0
			}
		];

	var mainImage = document.createElement( 'img' );

	mainImage.setAttribute( 'src', 'images/' + cats[0].file );
	imageMain.appendChild( mainImage );

	for ( var i in cats ) {
		var cat = cats[i],
			li = document.createElement( 'li' ),
			img = document.createElement( 'img' ),
			label = document.createElement( 'h3' ),
			clicks = document.createElement( 'span' );

		clicks.innerHTML = cat.clicks + ' click(s)';

		imageList.appendChild( li );

		img.setAttribute( 'src', 'images/' + cat.file );
		img.setAttribute( 'id', cat.name );

		li.appendChild( img );

		label.innerHTML = cat.name;

		img.parentNode.insertBefore(label, img);
		img.parentNode.insertBefore(clicks, img);

		img.addEventListener( 'click', (function(cat, clicksElement) {
			return function() {
				var getText = function( clickCount ) {
					return clickCount + ' click(s)';
				};

				cat.clicks++;
				clicksElement.innerHTML = getText( cat.clicks );
			};
		})(cat, clicks));
	}

})( jQuery );
