$( document ).ready( function(){

	$( ".form-control" ).keyup( function(){

		var input = $( this ).attr( "id" );
		var value = $( this ).val();
		var currency = 0;
		
		//$.getJSON( 'asset/data/data.json', {param1: 'euro'}, function( json, textStatus ){
		$.getJSON( 'asset/data/data.json', function( json, textStatus ){

			if( input == "dolar" ){

				$.each( json, function( idx, data ){

					if( idx != "dolar" ){

						$( "#" + idx ).val( value * data );
					}
				});
			}
			else{

				currency = json[input];
				$( "#dolar" ).val( value * currency );

				value = $( "#dolar" ).val();

				$.each( json, function( idx, data ){

					if( idx != "dolar" && idx != input ){

						$( "#" + idx ).val( value * data );
					}
				});
			}
		});
	});
});