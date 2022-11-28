<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(!isset($_GET['code'])){
    echo 'no code';
    exit();
}

$discord_code = $_GET['code'];

$payload = [
    'code'=>$discord_code,
    'client_id'=>'1017543400020516906',
    'client_secret'=>'VYh3MJnjfhpRgbcXDNc-tVg4OA4QvCMP',
    'grant_type'=>'authorization_code',
    'redirect_uri'=>'http://bot.nightjs.ovh/process-oauth.php',
    'scope'=>'identify%20guids',
];

print_r($payload);

$payload_string = http_build_query($payload);
$discord_token_url = "https://discordapp.com/api/oauth2/token";

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $discord_token_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

$result = curl_exec($ch);

if(!$result){
    echo curl_error($ch);
}

//Problème : result => error = client is wrong
$result = json_decode($result,true);


$access_token = $result['access_token'];

$discord_users_url = "https://discordapp.com/api/users/@me";
$header = array("Authorization: Bearer $access_token", "Content-Type: application/x-www-form-urlencoded");

$ch = curl_init();
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
curl_setopt($ch, CURLOPT_URL, $discord_users_url);
curl_setopt($ch, CURLOPT_POST, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

$result = curl_exec($ch);

$result = json_decode($result, true);

session_start();

//Ajout à la guilde
 $guild_ID = '938422039545520188';
 //$addUserToGuild = addUserToGuild($result['id'],$access_token,$guild_ID);
 $addUserToGuild2 = addUserToGuild('1017543400020516906',$access_token,$guild_ID);
 

$_SESSION['logged_in'] = true;
$_SESSION['userData'] = [
    'name'=>$result['username'],
    'discord_id'=>$result['id'],
    'avatar'=>$result['avatar'],
    'guilds'=>getUsersGuilds($access_token),
];



header("location: dashboard.php");
exit();


function addUserToGuild($discord_ID,$token,$guild_ID){
    $payload = [
        'access_token'=>$token,
    ];

    $discord_api_url = 'https://discordapp.com/api/guilds/'.$guild_ID.'/members/'.$discord_ID;

    $bot_token = "MTAxNzU0MzQwMDAyMDUxNjkwNg.GyTTA6.ijPQzAkehbglMRzPj-fjK9BUTHwpy6drFNiyi8";
    $header = array("Authorization: Bot $bot_token", "Content-Type: application/json");

    $ch = curl_init();
    //set the url, number of POST vars, POST data
    curl_setopt($ch, CURLOPT_HTTPHEADER,$header);
    curl_setopt($ch,CURLOPT_URL, $discord_api_url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT"); //must be put for this method..
    curl_setopt($ch,CURLOPT_POSTFIELDS, json_encode($payload)); //must be a json body
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = curl_exec($ch);
    
    if(!$result){
        echo curl_error($ch);
    }else{
        return true;
    }
}

function getUsersGuilds($access_token){
    //url scheme /users/@me/guilds
    $discord_api_url = "https://discordapp.com/api";
    $header = array("Authorization: Bearer $access_token","Content-Type: application/x-www-form-urlencoded");
    $ch = curl_init();
    //set the url, number of POST vars, POST data
    curl_setopt($ch, CURLOPT_HTTPHEADER,$header);
    curl_setopt($ch,CURLOPT_URL, $discord_api_url.'/users/@me/guilds');
    curl_setopt($ch,CURLOPT_POST, false);
    //curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    $result = curl_exec($ch);
    $result = json_decode($result,true);
    return $result;
}


?>