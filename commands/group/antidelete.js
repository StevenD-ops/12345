module.exports = {
	name: "antidelete",
	alias: ["antidel"],
    use: "<options>",
	desc: "habilitar or Deshabilitar Antidelete Features",
    type: "group",
    example: "%prefix%command habilitar or Deshabilitar",
    noLimit: true,
    start: async(killua, m, { text }) => {
        if (text === 'habilitar') {
            if (isAntidelete === true) return m.reply('Antidelete already active')
            group.addAntidelete(m.from, _group)
            m.reply(`Success activated Antidelete`)
        } else if (text === 'Deshabilitar') {
            if (isAntidelete === false) return m.reply('Antidelete already deactive')
            group.delAntidelete(m.from, _group)
            m.reply(`Success deactivated Antidelete`)
        } else {
            let buttons = [
                { buttonId: `antidelete habilitar `, buttonText: { displayText: 'habilitar'}, type: 1 },
                 {buttonId: `antidelete Deshabilitar `, buttonText: { displayText: 'Deshabilitar'}, type: 1 }
            ]
            let buttonMessage = {
                text: `*⭔ Antidelete Status:* ${group.cekAntidelete(m.from, _group) ? 'Activated' : 'Deactivated'}\n\n_¡Elige habilitar o deshabilitar!_`,
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
