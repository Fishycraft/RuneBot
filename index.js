const Discord = require('discord.js');
const client = new Discord.Client();
require("dotenv").config();
const prefix = "rb!";

client.on("ready", () => {
    console.log("Among Us!")
})

client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send("pong")
    }
})

client.login(process.env.token);