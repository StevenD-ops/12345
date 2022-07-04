const fs = require("fs");

module.exports = {
    name: "setwelcome",
    alias: ["welcomeset"],
    use: "<consulta>",
    desc: "Set Welcome to database",
    type: "group",
	example: "\n\nExample: %prefix%command add <consulta>\nExample: %prefix%command remove <consulta>",
    start: async (killua, m, { text, ar, args, prefix, command }) => {
		if (args.length < 2) return m.reply(`Example: ${prefix + command} add <consulta>\nExample: ${prefix + command} remove <consulta>`)

        let welcomeSet = group.welcomeSet(m.from, _group)
		let reason = args.slice(1).join(' ')

		if (ar[0] === 'add') {
				welcomeSet.add = reason
				fs.writeFileSync("./database/group.json", JSON.stringify(_group, null, 4))
				m.reply(`Welcome Add Di Ganti Menjadi :\n\n${welcomeSet.add}`)
			} else if (ar[0] === 'remove') {
				welcomeSet.remove = reason
				fs.writeFileSync("./database/group.json", JSON.stringify(_group, null, 4))
				m.reply(`Welcome Remove Di Ganti Menjadi :\n\n${welcomeSet.remove}`)
		} else {
			m.reply('Pilih add / remove')
		}
    },
    isGroup: true,
    isAdmin: true,
}