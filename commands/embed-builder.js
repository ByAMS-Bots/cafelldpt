const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const Database = require("@replit/database")
const db = new Database()

//target
//time
module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed-builder')
		.setDescription('Post a custom embed!')

		.addChannelOption(option =>
		option.setName('channel')
			.setDescription('The channel to post to')
                      .setRequired(true))
   ,
		
  async execute(interaction,client) {


    // at the top of your file

// inside a command, event listener, etc.
const target = interaction.options.getChannel('channel');

    const bala = target.id

    
db.set("hi", bala)
    
db.get("key").then(value => {});
db.get("key").then(value => {});
const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('Embed Builder');

		// Add components to modal

		// Create the text input components
		const favoriteColorInput = new TextInputBuilder()
			.setCustomId('favoriteColorInput')
		    // The label is the prompt the user sees for this input
			.setLabel("Title?")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

		const hobbiesInput = new TextInputBuilder()
			.setCustomId('hobbiesInput')
			.setLabel("Body?")
		    // Paragraph means multiple lines of text.
			.setStyle(TextInputStyle.Paragraph);
    const foot = new TextInputBuilder()
			.setCustomId('foot')
			.setLabel("Footer?")
		    // Paragraph means multiple lines of text.
			.setStyle(TextInputStyle.Paragraph);
    

		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
		const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);
	  const thirdActionRow = new ActionRowBuilder().addComponents(foot);

		modal.addComponents(firstActionRow, secondActionRow,thirdActionRow);

		// Show the modal to the user
		await interaction.showModal(modal);
	
    



  
	},

  
};


