const Discord = require("discord.js");

const client = new Discord.Client(
    {
        intents: [
            Discord.GatewayIntentBits.Guilds,
            Discord.GatewayIntentBits.GuildMessages,
            Discord.GatewayIntentBits.MessageContent,
            Discord.GatewayIntentBits.GuildMembers,
        ],
    }
);

require('dotenv').config()

client.login(process.env.TOKEN)

client.on("ready", () => {
    console.log(`Connected as ${client.user.tag} : ${client.user.id}`)
})

client.on("interactionCreate", interaction => {
    if(!interaction.isChatInputCommand()) {return};


    //Generate Scrum Post
    if (interaction.commandName == "newscrum") {
        interaction.reply({
            content : "New Scrum Ran"
        })
    }

})