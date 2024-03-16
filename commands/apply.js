const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const Database = require("@replit/database")
const db = new Database()

//target
//time
module.exports = {
	data: new SlashCommandBuilder()
		.setName('post')
		.setDescription('Post an alliance announcement for cafell!')

   ,
		
  async execute(interaction,client) {


    // at the top of your file

// inside a command, event listener, etc.


    
const modal = new ModalBuilder()
			.setCustomId('JA')
			.setTitle('Alliance Announcement Menu');

		// Add components to modal

		// Create the text input components
		const w = new TextInputBuilder()
			.setCustomId('w')
		    // The label is the prompt the user sees for this input
			.setLabel("Title")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

		const y = new TextInputBuilder()
			.setCustomId('e')
			.setLabel("Body")
		    // Paragraph means multiple lines of text.
			.setStyle(TextInputStyle.Paragraph);
    const cl = new TextInputBuilder()
			.setCustomId('y')
			.setLabel("Group Name")
		    // Paragraph means multiple lines of text.
			.setStyle(TextInputStyle.Paragraph);
    

		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new ActionRowBuilder().addComponents(w);
		const secondActionRow = new ActionRowBuilder().addComponents(y);
	  const thirdActionRow = new ActionRowBuilder().addComponents(cl);

		modal.addComponents(firstActionRow, secondActionRow,thirdActionRow);

		// Show the modal to the user
		await interaction.showModal(modal);
	
    



  
	},

  
};


