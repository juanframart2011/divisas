<?
$divisas = $_POST;
$divisa_name = null;
$divisa_array = array();

$divisa_array["dolar"]["compra"] = 1;
$divisa_array["dolar"]["venta"] = 1;

foreach( $divisas as $divisa => $key ){

	if( !empty( $key ) ){

		$divisa_explode = explode( "_", $divisa );
		$divisa_name = $divisa_explode[0];
		$type = $divisa_explode[1];

		$divisa_array[$divisa_name][$type] = ( float )$key;
	}
}
$jsonencoded = json_encode( $divisa_array, JSON_UNESCAPED_UNICODE );

$fh = fopen( "asset/data/data.json", 'w' );
fwrite( $fh, $jsonencoded );
fclose( $fh );

echo "Felicidades se guardaron con éxito las divisas que agregaste.";
?>