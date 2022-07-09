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
            let teks = `Hello, ${pushName === undefined ? sender.split("@")[0] : pushName}\nHere is the Command List\n\n (っ◔◡◔)っ 𝑯𝑶𝑳𝑨 𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑰𝑫𝑶 𝑨 𝑩𝑬𝑵𝑫𝑬𝑹-𝑩𝑶𝑻

𝑷𝒖𝒆𝒅𝒆𝒔 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒓 ''𝒎𝒆𝒏𝒖'' 𝒑𝒂𝒓𝒂 𝒂𝒄𝒄𝒆𝒅𝒆𝒓 𝒂𝒍 𝒎𝒆𝒏ú 𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒂𝒍.

𝑺𝒊 𝒅𝒆𝒔𝒆𝒂𝒔 𝒉𝒂𝒄𝒆𝒓 𝒖𝒏 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒅𝒆 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏/ 𝒇𝒐𝒕𝒐/𝒈𝒊𝒇 𝒔𝒐𝒍𝒐 𝒅𝒆𝒃𝒆𝒔 𝒅𝒆 𝒆𝒏𝒗𝒊𝒂𝒓 𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒆𝒍 𝒄𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒆𝒍𝒆𝒈𝒊𝒅𝒐 𝒄𝒐𝒏 𝒍𝒂 𝒑𝒂𝒍𝒂𝒃𝒓𝒂 ''𝒔𝒕𝒊𝒄𝒌𝒆𝒓'' \n\n`

            for (let type of commands.type) {
                teks += `┌──⭓ *${toUpper(type)} Menu*\n`
                teks += `│\n`
                teks += `${commands.list[type].filter(v => v.type !== "hide").map((cmd) => `│⭔ ${prefix + cmd.name} ${cmd.use ? " " + cmd.use : ""}`).join("\n")}\n`
                teks += `│\n`
                teks += `└───────⭓\n\n`
            }

            teks += `Send ${prefix}help seguido de un nombre de comando para obtener detalles del comando, por ejemplo:${prefix}help sticker`;
            let templateButtons = [
                { urlButton: { displayText: "Source Code", url: "https://github.com/StevenD-ops/123.git" } },
          //*      { urlButton: { displayText: "Main APIs", url: "http://zenzapis.xyz" } },
                { quickReplyButton: { displayText: "Anunciate aqui", id: "#" } },
    //*            { quickReplyButton: { displayText: "Button 2", id: "#" } },
          //*      { quickReplyButton: { displayText: "Button 3", id: "#" } },
            ]

            let templateMessage = {
                image: { url: 'https://camo.githubusercontent.com/23f3195d91e7095ae37ef6a22475b9f1206f8334bc3e5ca61637f7d7e8cf962a/68747470733a2f2f692e70696e696d672e636f6d2f373336782f66662f38372f62372f66663837623730653963396465613464396361333263393533386138316333622e6a7067' },
                caption: teks,
                footer: config.footer,
                templateButtons: templateButtons
            }

            killua.sendMessage(m.from, templateMessage, { quoted: m })
        }
    },
    noLimit: true,
}
