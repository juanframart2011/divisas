$( document ).ready( function(){

	//función que saca todo lo del json y lo coloca en los campos
	$.getJSON( 'asset/data/data.json', function( json, textStatus ){

		$.each( json, function( idx, data ){

			$( "#" + idx + "_compra" ).val( data.compra );
			$( "#" + idx + "_venta" ).val( data.venta );
		});
	});

	$( "#form_divisa" ).submit( function( event ){

		event.preventDefault();

		var url = $( this ).attr( "action" );
		var info = $( this ).serialize();

		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'html',
			data: info,
		})
		.done(function( data ){

			$( ".modal-body" ).html( data );
			$( ".modal" ).modal( "show" );
		})
		.fail(function( error ){
			console.log( error );
		});
		
	})
});