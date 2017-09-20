$( document ).ready( function(){

	var coin = window.location.hash;
	coin = coin.split( "#" );
	coin = coin[1];
	
	$.getJSON( 'asset/data/data.json', function( json, textStatus ){

		$.each( json, function( idx, data ){

			if( idx == coin ){

				$( ".compra" ).find( "span" ).html( data.compra );
				$( ".venta" ).find( "span" ).html( data.venta );
			}
		});
	});
});