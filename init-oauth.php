<?php

$discord_url = "https://discord.com/api/oauth2/authorize?client_id=1017543400020516906&redirect_uri=http%3A%2F%2Fbot.nightjs.ovh%2Fprocess-oauth.php&response_type=code&scope=identify%20guilds";
header("Location: $discord_url");
exit();

?>