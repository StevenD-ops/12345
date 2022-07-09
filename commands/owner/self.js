const fs = require("fs")

module.exports = {
    name: "self",
    alias: ["smode"],
    use: "<options>",
    desc: "habilitar or Deshabilitar Self Mode",
    type: "owner",
    example: "%prefix%command habilitar or Deshabilitar",
    start: async(killua, m, { text, prefix, command }) => {
        if (text === 'habilitar') {
            if (config.options.self == true) return m.reply('Self already active')
            config.options.self = true
            fs.writeFileSync('./config.json', JSON.stringify(config, null, 2))
            m.reply(`BOT Now In Self Mode`)
        } else if (text === 'Deshabilitar') {
            if (config.options.self === false) return m.reply('Self already deactive')
            config.options.self = false
            fs.writeFileSync('./config.json', JSON.stringify(config, null, 2))
            m.reply(`BOT Now In Public Mode`)
        } else {
            m.reply(`*⭔ Self Mode Status:* ${config.options.self ? 'Activated' : 'Deactivated'}\n\n_¡Elige habilitar o deshabilitar!_`)
        }
    },
    isOwner: true
}
