module.exports = {
    name: "menu",
    alias: ["help","?","ayuda"],
    desc: "Listar todos los comandos",
    type: "main",
    start: async(killua, m, { commands, args, prefix, text, toUpper }) => {
        const { pushName, sender } = m
        if (args[0]) {
            let data = []
            let name = args[0].toLowerCase()
            let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "ocultar") return m.reply("No se encontró ningún comando")
            else data.push(`*Command :* ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`*Alias :* ${cmd.alias.join(", ")}`)
            if (cmd.use) data.push(`*Use:* ${cmd.use}`);
            if (cmd.desc) data.push(`*Description :* ${cmd.desc}\n`)
            if (cmd.example) data.push(`*Example :* ${cmd.example.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
            return m.reply(`*Info Command ${cmd.name.replace(/^\w/, c => c.toUpperCase())}*\n\n${data.join("\n")}`)
        } else {
            let teks = `Hello, ${pushName === undefined ? sender.split("@")[0] : pushName}\n\n (っ◔◡◔)っ 𝑯𝑶𝑳𝑨 𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑰𝑫𝑶 𝑨 𝑩𝑬𝑵𝑫𝑬𝑹-𝑩𝑶𝑻

            
`
/*
            for (let type of commands.type) {
                teks += `┌──⭓ *${toUpper(type)} Menu*\n`
                teks += `│\n`
                teks += `${commands.list[type].filter(v => v.type !== "hide").map((cmd) => `│⭔ ${prefix + cmd.name} ${cmd.use ? " " + cmd.use : ""}`).join("\n")}\n`
                teks += `│\n
                teks += `└───────⭓\n\n`
            }
*/
            teks += `𝑺𝒆𝒏𝒅 𝒎𝒆𝒏𝒖 𝒔𝒆𝒈𝒖𝒊𝒅𝒐 𝒅𝒆 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒅𝒆𝒕𝒂𝒍𝒍𝒆𝒔 𝒅𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐, 𝒑𝒐𝒓 𝒆𝒋𝒆𝒎𝒑𝒍𝒐: 𝒎𝒆𝒏𝒖 𝒔𝒕𝒊𝒄𝒌𝒆𝒓`;
            let templateButtons = [
                { urlButton: { displayText: "Source Code", url: "https://github.com/StevenD-ops/123.git" } },
          //*      { urlButton: { displayText: "Main APIs", url: "http://zenzapis.xyz" } },
                { quickReplyButton: { displayText: "Anunciate aqui", id: "#" } },
    //*            { quickReplyButton: { displayText: "Button 2", id: "#" } },
          //*      { quickReplyButton: { displayText: "Button 3", id: "#" } },
            ]

            let templateMessage = {
                image: { url: 'http://cdn29.us1.fansshare.com/pictures/futurama/tv-futurama-bender-hd-wallpaper-1466524665.jpg' },
                caption: teks,
                footer: config.footer,
                templateButtons: templateButtons
            }

            killua.sendMessage(m.from, templateMessage, { quoted: m })
        }
    },
    noLimit: true,
}
