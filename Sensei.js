var Discord = require("discord.js");
var bot = new Discord.Client();
const mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	user: "Sensei",
	password: "77C6##BRwpc!c9D2$C5!",
	database: "sensei"
})
var prefix = "'"
var helptext = "`Im Moment sind nur folgende Bitten erlaubt, Schüler!`\n" +
"`'quote - Ich gebe dir Lebensweisheiten!`\n" +
"`'avatar - Ich gebe dir den Link zu deinem Avatar. Woher ich ihn kenne ? Tja. Ich bin der Sensei!`\n" +
"`'rt - Ich teste meine Reaktionszeit und sage sie dir dann.`\n" +
"`'hk [NAME] - Ich gehe deiner Bitte nach, und gebe dem den du ausgesucht hast, einen Highkick, dass er nur noch blau sieht.`\n" +
"`'h / 'help - Der Sensei erklärt dir einiges.`\n" +
"`'news - Der Sensei kriegt ja einiges mit, also erzählt er seinen Schülern über verschiedene, wenn auch amüsante Sachen.`\n"

connection.connect();

bot.on("ready", function() {
	console.log("Bot läuft als " + bot.user.username);
	console.log("Auf " + bot.servers.length + " Servern");
	console.log("In " + bot.channels.length + " Channel");
	console.log("Mit " + bot.users.length + " User insgesamt");

})

bot.on("serverCreated", function(server) {
	console.log("Probiere den Server " + server.name + " in die Datenbank einzufügen.");
	var info = {
		"servername": "'" + server.name.length + "'",
		"serverid": server.id,
		"ownerid": server.owner.id,
		"prefix": "'"
	}
	connection.query("INSERT INTO servers SET ?", info, function(error) {
		if(error) {
			console.log(error);
			return;
		}
		console.log("Daten wurden erfolgreich hinzugefügt!")
	})
})

bot.on("serverDeleted", function(server) {
	console.log("Probiere Server: " + server.name + " von der Datenbank zu löschen");
	connection.query("DELETE FROM servers WHERE serverid = '" + server.id + "'", function(error) {
		if (error) {
			console.log(error);
			return;
		}
		console.log("Server wurde erfolgreich gelöscht!");
	})
})

bot.on("message", function(message) {
    if (message.content.startsWith(prefix + "sup")) {
      bot.sendMessage(message, "Sup, **" + message.author.name + "**");
			console.log("'sup' wurde verwendet von: " + message.author.username);
    }

		if (message.content.startsWith(prefix + "Hi")) {
			bot.sendMessage(message, "Hey **" + message.author.name + "**");
			console.log("'hey' wurde verwendet von: " + message.author.username);
		}
		if (message.content.startsWith(prefix + "hi")) {
			bot.sendMessage(message, "Hey **" + message.author.name + "**");
			console.log("'hey' wurde verwendet von: " + message.author.username);
		}

		if (message.content.startsWith(prefix + "Was geht")) {
			bot.reply(message, "Nichts, rechne grad, und bei dir ?");
			console.log("'Was geht' wurde verwendet von: " + message.author.username);
		}
		if (message.content.startsWith(prefix + "was geht")) {
			bot.reply(message, "Nichts, rechne grad, und bei dir ?");
			console.log("'Was geht' wurde verwendet von: " + message.author.username);
		}

		if (message.content.startsWith(prefix + "quote")) {
			console.log("'quote' wurde verwendet von: " + message.author.username);
			let randomquotes = [
	    "Sei dankbar für Notlagen, Rückschläge und Schlechte Menschen. Mit Solchen Hindernissen umzugehen, ist ein wesentlicher Teil des Trainigs in der Kunst von Ruhe.",
	    "Die Absicht vom Training, ist das schlaffe zu straffen, den Körper zu stärken, und den Geist zu schleifen.",
			"Blicke nicht auf diese Welt mit Furcht und Abscheu. Nehme mutig alles entgegen was die Götter dir bieten.",
			"Die Größte Herrausforderung eines Kriegers ist es, den ängstlichen Groll seines Gegners zu einem harmlosen Lächeln zu machen.",
			"Kriegsstärke und der Krieg sind die Mittel für die Grundbesitzer und Kapitalisten mehr Profit zu machen, während die armen leiden.",
			"Leben ist Wachstum. Hören wir auf zu wachsen, technisch und spirituell, sind wir so gut wie tot.",
			"Deine Seele ist der stärkste Schild.",
			"Dein Herz ist voller fruchtbarem Samen, die nur darauf warten zu wachsen.",
			"Fehler sind der Schlüssel zum Erfolg. Jeder Fehler lehrt uns etwas.",
			];

			bot.sendMessage(message, "`--------------------------------------------------------------------------------------------`").then((message) => {
			bot.sendMessage(message, randomquotes[Math.floor(Math.random() * randomquotes.length)]).then((message) => {
			bot.sendMessage(message, "`--------------------------------------------------------------------------------------------`");
				});
			});
			}

		if (message.content === "Stell dich vor Sensei") {
			bot.reply(message, "Ich bin euer Sensei, ihr wisst genau wer ich bin.\n" + "https://media.giphy.com/media/ozXTrqRgqFcly/giphy.gif")
			console.log("'stell dich vor' wurde verwendet von: " + message.author.username);
		}
		if (message.content === "Stell dich vor sensei") {
			bot.reply(message, "Ich bin euer Sensei, ihr wisst genau wer ich bin.\n" + "https://media.giphy.com/media/ozXTrqRgqFcly/giphy.gif")
			console.log("'stell dich vor' wurde verwendet von: " + message.author.username);
		}
		if (message.content === "stell dich vor sensei") {
			bot.reply(message, "Ich bin euer Sensei, ihr wisst genau wer ich bin.\n" + "https://media.giphy.com/media/ozXTrqRgqFcly/giphy.gif")
			console.log("'stell dich vor' wurde verwendet von: " + message.author.username);
		}

		if (message.content === "Sensei stell dich vor") {
			bot.reply(message, "Ich bin euer Sensei, ihr wisst genau wer ich bin.");
			bot.sendMessage(message, "https://media.giphy.com/media/ozXTrqRgqFcly/giphy.gif");
			console.log("'stell dich vor' wurde verwendet von: " + message.author.username);
		}

		if (message.content.startsWith(prefix + "avatar")) {
				bot.reply(message, "Hier ist die URL von deinem Avatar: " + message.author.avatarURL);
				console.log("'avatar' wurde verwendet von: " + message.author.username);
			}

		if (message.content.startsWith(prefix + "rt")) {
					let before1 = new Date().getTime();
					bot.sendMessage(message,"`x`").then((message) => {
					let after1 = new Date().getTime();
					let result1 = after1 - before1;
					let before2 = new Date().getTime();
					bot.sendMessage(message,"`x`").then((message) => {
					let after2 = new Date().getTime();
					let result2 = after2 - before2;
					let before3 = new Date().getTime();
					bot.sendMessage(message,"`x`").then((message) => {
					let after3 = new Date().getTime();
					let result3 = after3 - before3;
					let before4 = new Date().getTime();
					bot.sendMessage(message,"`x`").then((message) => {
					let after4 = new Date().getTime();
					let result4 = after4 - before4;
					let before5 = new Date().getTime();
					bot.sendMessage(message,"`My Reaction-Time:`").then((message) => {
					let after5 = new Date().getTime();
					let result5 = after5 - before5;
					let results = result1 + result2 + result3 + result4 + result5
					bot.sendMessage(message, results / 5 + " ms");
										});
									});
								});
							});
						});
					}

		if (message.content === "'h") {
			bot.sendMessage(message, helptext);
			}
		if (message.content === "'help") {
			bot.sendMessage(message, helptext);
			}

		if (message.content.startsWith(prefix + "hk ")) {
					var replaced = message.content.replace(prefix + "hk ", "");
					if (replaced.startsWith("<")) {
					bot.sendMessage(message, replaced + " bekommt einen Highkick! \n").then((message) => {
					bot.sendMessage(message, "http://66.media.tumblr.com/7ebae335ffbdd6ed16c22f19ea8fe467/tumblr_nb0p01FPoh1twodw6o1_400.gif");
				});
			} else {
			bot.sendMessage(message, "Du solltest den @-Tag verwenden um mich darum zu bitten!")
			}
		}

		if (message.content.startsWith(prefix + "news")) {
				console.log("'news' wurde verwendet von : " + message.author.username);
				let namen = [
				"**Devsome**",
				"**Faded**",
				"**Karen-Chan**",
				"**awesom-o**",
				"**Serraniel**",
				"**Infinite**"
				]
				let namen2 = [
				"**Devsome**",
				"**Faded**",
				"**Karen-Chan**",
				"**awesom-o**",
				"**Serraniel**",
				"**Infinite**"
				]

				var randomnamen = namen[Math.floor(Math.random() * namen.length)]
				var randomnamen2 = namen[Math.floor(Math.random() * namen.length)]

				let randomnews = [
				randomnamen + " möchte ein Diss-Battle gegen " + randomnamen2 + " !\n" + "Droht " + randomnamen2 + " jetzt der totale Untergang ?" ,
				randomnamen + " behauptet eine Affäre mit " + randomnamen2 + " gehabt zu haben!",
				randomnamen + " hatte wohl die Spezialeinheit zu besuch! " + randomnamen2 + " gibt zu " + randomnamen + " 'geswattet' zu haben!"
				]
				bot.sendMessage(message, "`BREAKING NEWS`").then((message) => {
				bot.sendMessage(message, randomnews[Math.floor(Math.random() * randomnews.length)]).then((message) => {
				bot.sendMessage(message, "Weitere Statements seitens " + randomnamen + " sind noch abzuwarten!").then((message) => {
				bot.sendMessage(message, "`#DRAMAALERT`");
							});
						});
					});
				}


//=============================================================================
});

bot.loginWithToken("MjExNjM5NTUxMjg4OTM0NDAx.Cog1Cw.sNJxz4hYAX1HNf_O39kcGAFn7CE");
