<?
$divisas = $_POST;
$divisa_name = null;
$divisa_array = array();

$divisa_array["dolar"] = 1;

foreach( $divisas as $divisa => $key ){

	if( !empty( $key ) ){

		$divisa_array[$divisa] = (float)$key;
	}
}
$jsonencoded = json_encode($divisa_array,JSON_UNESCAPED_UNICODE);

$fh = fopen( "asset/data/data.json", 'w' );
fwrite($fh, $jsonencoded);
fclose($fh);

echo "Felicidades se guardaron con éxito las divisas que agregaste.";
?>