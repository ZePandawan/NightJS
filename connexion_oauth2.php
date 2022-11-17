<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="connexion_css.css">
	<title>connexion OAUTH2</title>
</head>
<body>

<?php

require __DIR__ . '/Api-Discord/vendor/autoload.php';

session_start();

echo('<h1>Connexion Réussie</h1><br/><br/>');

$provider = new \Wohali\OAuth2\Client\Provider\Discord([
    'clientId' => '1017543400020516906',
    'clientSecret' => 'uYaSlSp62KTGn3OxJ694yD31uqYuxroh',
    'redirectUri' => 'http://bot.nightjs.ovh/connexion_oauth2.php'
]);

if (!isset($_GET['code'])) {

    // Step 1. Get authorization code
    $authUrl = $provider->getAuthorizationUrl();
    $_SESSION['oauth2state'] = $provider->getState();
    header('Location: ' . $authUrl);
    die();
// Check given state against previously stored one to mitigate CSRF attack
} elseif (empty($_GET['state']) || ($_GET['state'] !== $_SESSION['oauth2state'])) {

    unset($_SESSION['oauth2state']);
    exit('Invalid state');

} else {

    // Step 2. Get an access token using the provided authorization code
    $token = $provider->getAccessToken('authorization_code', [
        'code' => $_GET['code']
    ]);

    // Show some token details
    //echo '<h2>Token details:</h2>';
    //echo 'Token: ' . $token->getToken() . "<br/>";
    //echo 'Refresh token: ' . $token->getRefreshToken() . "<br/>";
    //echo 'Expires: ' . $token->getExpires() . " - ";
    //echo ($token->hasExpired() ? 'expired' : 'not expired') . "<br/>";

    // Step 3. (Optional) Look up the user's profile with the provided token
    try {

        $user = $provider->getResourceOwner($token);
        //echo '<h2>Resource owner details:</h2>';
        printf('<h2>Hello %s</h2><br/><br/>', $user->getUsername());
        var_export($user->toArray());
        

    } catch (Exception $e) {

        // Failed to get user details
        exit('Oh dear...');

    }
}
?>
</body>
</html>