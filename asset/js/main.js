$( document ).ready( function(){

	var coin = window.location.hash;
	coin = coin.split( "#" );
	coin = coin[1];
	
	$.getJSON( 'asset/data/data.json', function( json, textStatus ){

		$.each( json, function( idx, data ){

			//if( idx == coin ){
			console.log( idx );
			$( "." + idx + "" ).find( ".compra" ).find( "span" ).html( data.compra );
			$( "." + idx + "" ).find( ".venta" ).find( "span" ).html( data.venta );
			//}
		});
	});

	$('.carousel').carousel({
		interval: 15000
	});
});