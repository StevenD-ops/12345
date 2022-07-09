module.exports = {
	name: "Welcome",
	alias: ["welcome"],
    use: "<options>",
	desc: "habilitar or disable Welcome Features",
    type: "group",
    example: "%prefix%command habilitar or disable",
    noLimit: true,
    start: async(killua, m, { text }) => {
        if (text === 'habilitar') {
            if (isAntidelete === true) return m.reply('Welcome already active')
            group.addWelcome(m.from, _group)
            m.reply(`Success activated Welcome`)
        } else if (text === 'disable') {
            if (isAntidelete === false) return m.reply('Welcome already deactive')
            group.delWelcome(m.from, _group)
            m.reply(`Success deactivated Welcome`)
        } else {
            let buttons = [
                { buttonId: `Welcome habilitar `, buttonText: { displayText: 'habilitar'}, type: 1 },
                 {buttonId: `Welcome disable `, buttonText: { displayText: 'DISABLE'}, type: 1 }
            ]
            let buttonMessage = {
                text: `*⭔ Welcome Status:* ${group.cekWelcome(m.from, _group) ? 'Activated' : 'Deactivated'}\n\n_¡Elige habilitar o deshabilitar!_`,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        }
	},
    isGroup: true,
    isAdmin: true,
}
