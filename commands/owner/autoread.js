const fs = require("fs")

module.exports = {
    name: "autoread",
    alias: ["aread"],
    use: "<options>",
    desc: "habilitar or Deshabilitar AutoRead Mode",
    type: "owner",
    example: "%prefix%command habilitar or Deshabilitar",
    start: async(killua, m, { text, prefix, command }) => {
        if (text === 'habilitar') {
            if (config.options.autoRead == true) return m.reply('AutoRead already active')
            config.options.autoRead = true
            fs.writeFileSync('./config.json', JSON.stringify(config, null, 2))
            m.reply(`AutoRead Success activated`)
        } else if (text === 'Deshabilitar') {
            if (config.options.autoRead === false) return m.reply('AutoRead already deactive')
            config.options.autoRead = false
            fs.writeFileSync('./config.json', JSON.stringify(config, null, 2))
            m.reply(`AutoRead Success deactivated`)
        } else {
            m.reply(`*⭔ AutoRead Status:* ${config.options.autoRead ? 'Activated' : 'Deactivated'}\n\n_¡Elige habilitar o deshabilitar!_`)
        }
    },
    isOwner: true
}
