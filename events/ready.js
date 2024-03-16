// When the client is ready, run this code (only once)

const Database = require("@replit/database")
const db = new Database()
const {GatewayIntentBits, ActivityType } = require('discord.js');
const colors = require("colors");
const prefix = `?`
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
const activities = [`for new announcements.`, 'Jim the guitar', 'PRDs daily yapping'];
//  ,  ,  ,  and 

  console.log(`Status Set`)
  const updateDelay = 5; // in seconds
  let currentIndex = 0;

  setInterval(() => {
    const activity = activities[currentIndex];
    client.user.setActivity(activity, { type: ActivityType.Listening });

    // update currentIndex
    // if it's the last one, get back to 0
    currentIndex = currentIndex >= activities.length - 1 
      ? 0
      : currentIndex + 1;
  }, updateDelay * 1000);

  
	},
};


