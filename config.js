const app_id = "6ee9088a-62e7-453d-b666-85ac998fc498" //skywayのアプリケーションID //skyway application ID
const secret_key = "HePnGlZo93QfRfwOyp6RbjntrEYnWtAelRGomCP4IqY=" //skywayのシークレットキー // skyway secret key
let proximity = true;  //近接VCのtrue:有効/false:無効(デフォルトはtrue) //Proximity VC true:enable/false:disable (default: true)
let password = false; //接続時のパスワードの有無(デフォルトはfalse) //Password in connection (default: false)
let distance = 10; // 声の届く最大距離(デフォルトは6) //Max distance of sound (default: 6)
const port = 19132; // websocketをlistenするポート //Port to listen
const web_port = 8080; // 近接vcのwebサイトと接続するポート // Port to connect website
let lang = "ja"; //言語(ja:日本語, en:英語) //Language (ja:Japanese, en:English)
module.exports = { distance, app_id, secret_key, proximity, port, web_port, lang, password };