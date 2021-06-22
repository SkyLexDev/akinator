const akinator = require("discord-tr-akinator")

client.on("message", async message => {
    if(message.content.startsWith(`.akinatör`)) {
        akinator(message, client);
    }
});
