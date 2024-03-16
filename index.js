
// [PREPARATION]

const fs = require('node:fs');
const path = require('node:path');
// Require the necessary discord.js classes
const { Client, Collection, Intents,EmbedBuilder } = require('discord.js');
// Access your bot info from Secrets (environment variables)
const token = process.env['TOKEN'];
// Server function (uncomment if using the bot-server.js file)
// const keepAlive = require('./bot-server'); 
const Database = require("@replit/database")
const db = new Database()
// Create a new client instance
// Add more intents based on your needs
const Discord = require("discord.js")
const discord = require("discord.js")
const colors = require("colors")
const targetServerId = '1148703354600554506'; // Replace with your server's ID
const targetChannelId = '1148703355108069401';
const client = new Client({ intents: new Discord.IntentsBitField(3276799) })
const express = require('express');
const port = 3000;
const app = express();

// [Hosting!]
app.get('/', (request, response) => {
	return response.send("Hello world! ඞ");
});
app.listen(port, () => {
	console.log("[EXPRESS] ".magenta + "Express is ready.".brightGreen)
});
// Read the events files from events folder
const eventsPath = path.join(__dirname, 'events'); //path to events folder based on operating system
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

//dynamically retrieves all the events and registers them
for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
  // the first and second ... are the rest parameter syntax and spread syntax, respectively
}

// [COMMAND HANDLER]
client.commands = new Collection(); // add a new commands property

// Read the command files from commands folder
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported command module
	client.commands.set(command.data.name, command);
}

// [EXECUTE COMMANDS DYNAMICALLY]

// 'interactionCreate' even listener
client.on('interactionCreate', async interaction => {
	// Not all interactions are commands, only respond if it's a command
  if (!interaction.isCommand()) return;

  // Get command module from client commands collection
	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction); // execute command's function
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true }); // ephemeral flag - only the user who executed the command can see it
	}
});


// ecomony





// ember builder


client.on('interactionCreate', async interaction => {
 

	if (!interaction.isModalSubmit()) return;
	if (interaction.customId === 'myModal') {

try{

	const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
	const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
  	const foot = interaction.fields.getTextInputValue('foot');
      	//const channel = interaction.fields.getTextInputValue('channel');
const exampleEmbed = new EmbedBuilder()
	.setTitle(`${favoriteColor}`)
	.setDescription(`${hobbies}`)
	.setTimestamp()
	.setFooter({ text: `${foot} | Posted by ${interaction.user.username}`});
db.get("hi").then(value => {
  const channel2 = client.channels.cache.get(`${value}`);
  interaction.reply({content: "Sent!", ephemeral: true})
channel2.send({ embeds: [exampleEmbed] })
})
}catch (error){

  console.log(error)
}

 
                          }

})

client.on('interactionCreate', async interaction => {


  if (!interaction.isModalSubmit()) return;
  if (interaction.customId === 'myModaldm') {

try{

  const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
  const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
    const foot = interaction.fields.getTextInputValue('foot');
        //const channel = interaction.fields.getTextInputValue('channel');
const exampleEmbed = new EmbedBuilder()
  .setTitle(`${favoriteColor}`)
  .setDescription(`${hobbies}`)
  .setTimestamp()
  .setFooter({ text: `${foot}`});
  const exampleEmbed22 = new EmbedBuilder()
  .setTitle(`${favoriteColor}`)
  .setDescription(`${hobbies}`)
  .setTimestamp()
  .setFooter({ text: `${foot} | Posted by ${interaction.user.username}`});
db.get("hi").then(value => {
  interaction.reply({content: "Sent!", ephemeral: true})
  client.users.send(value,{ embeds: [exampleEmbed] });
  const channel24 = client.channels.cache.get('1180906509815791686');
  channel24.send({ embeds: [exampleEmbed22] });
})
}catch (error){

  console.log(error)
}


                          }

})

// LR Job App
client.on('interactionCreate', async interaction => {
 

	if (!interaction.isModalSubmit()) return;
	if (interaction.customId === 'JA') {

try{

	const title = interaction.fields.getTextInputValue('y');
	const body = interaction.fields.getTextInputValue('e');
  	const group = interaction.fields.getTextInputValue('w');
      	//const channel = interaction.fields.getTextInputValue('channel');
const exampleEmbed = new EmbedBuilder()
	.setTitle(group)
  .setDescription(body)
	.setFooter({ text: `Sent of behalf of ${title}`});

  const channel2 = client.channels.cache.get(`1173685897284304936`);
  interaction.reply({content: "The announcement has been sent! Thanks for partnering with cafell!", ephemeral: false})
channel2.send({ embeds: [exampleEmbed] })
  channel2.send({content: '<@&1173685930964566087>'})

}catch (error){

  console.log(error)
}

 
                          }




  
})


// [FINAL STEPS]
// Keeps discord bot online (uncomment if using the bot-server.js file)
// keepAlive();

// Login to Discord with your client's token
client.login(token);



