//code framework source: https://www.youtube.com/watch?v=2CsSJshmadg
require('dotenv').config()
const {REST , Routes , ApplicationCommandOptionType} = require('discord.js');
const { application } = require('express');

const commands = [
    {
        name : "newscrum",
        description : "Creates a new SCRUM post where users can submit updates."
    }
];

const rest = new REST( { version: "10" } ).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Registering commands.");

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID , process.env.GUILD_ID),
            {body : commands}
        )

        console.log("Commands registered.");
    } catch (error) {
        console.log(`an error occured: ${error}`)
    }
} )()