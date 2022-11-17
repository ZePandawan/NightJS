<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>NightJS</title>
	<link rel="icon" type="image/png" sizes="16x16" href="http://bot.nightjs.ovh/val.PNG">
	<link href="night.css" rel="stylesheet" type="text/css">
</head>
<body>

	<h1>NightJS</h1>

	<div class="button">
		<table>
			<tr>
				<td>
					<form action="commands.php">
						<input type="submit" id="day" value="/Day" />
					</form>
				</td>
				<td>
					<form action="commands.php">
						<input type="submit" id="hour" value="/Hour" />
					</form>
				</td>
			</tr>
			<tr>
				<td>
					<form action="commands.php">
						<input type="submit" id="listmembers" value="/List-Members" />
					</form>
				</td>
				<td>
					<form action="commands.php">
						<input type="submit" id="nbmembers" value="/Nbr-Members" />
					</form>
				</td>
			</tr>
			<tr>
				<td>
					<form action="commands.php">
						<input type="submit" id="createrole" value="/Create-Role" />
					</form>
				</td>
				<td>
					<form action="commands.php">
						<input type="submit" id="readdb" value="/Read-DB" />
					</form>
				</td>
			</tr>
			<tr>
				<td>
					<form action="commands.php">
						<input type="submit" id="salute" value="/Salute" />
					</form>
				</td>
				<td>
					<form action="info_commands.php" target="_blank">
						<input type="submit" id="info" value="Info-Commands" />
					</form>
				</td>
			</tr>
		</table>
	</div>


</body>
</html>