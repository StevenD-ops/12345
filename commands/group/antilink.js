module.exports = {
	name: "antilink",
	alias: ["antilinkgc","antilinkgroup"],
    use: "<options>",
	desc: "habilitar or Deshabilitar Antilink Features",
    type: "group",
    example: "%prefix%command habilitar or Deshabilitar",
    noLimit: true,
    start: async(killua, m, { text }) => {
        if (text === 'habilitar') {
            if (isAntilink === true) return m.reply('Antilink already active')
            group.addAntilink(m.from, _group)
            m.reply(`Success activated Antilink`)
        } else if (text === 'Deshabilitar') {
            if (isAntilink === false) return m.reply('Antilink already deactive')
            group.delAntilink(m.from, _group)
            m.reply(`Success deactivated Antilink`)
        } else {
            let buttons = [
                { buttonId: `antilink habilitar `, buttonText: { displayText: 'habilitar'}, type: 1 },
                 {buttonId: `antilink Deshabilitar `, buttonText: { displayText: 'Deshabilitar'}, type: 1 }
            ]
            let buttonMessage = {
                text: `*⭔ Antilink Status:* ${group.cekAntilink(m.from, _group) ? 'Activated' : 'Deactivated'}\n\n_P¡Elige habilitar o deshabilitar!_`,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        }
	},
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true
}
