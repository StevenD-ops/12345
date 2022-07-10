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

𝑷𝒖𝒆𝒅𝒆𝒔 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒓 ''𝒎𝒆𝒏𝒖'' 𝒑𝒂𝒓𝒂 𝒂𝒄𝒄𝒆𝒅𝒆𝒓 𝒂𝒍 𝒎𝒆𝒏ú 𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒂𝒍.

𝑺𝒊 𝒅𝒆𝒔𝒆𝒂𝒔 𝒉𝒂𝒄𝒆𝒓 𝒖𝒏 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒅𝒆 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏/ 𝒇𝒐𝒕𝒐/𝒈𝒊𝒇 𝒔𝒐𝒍𝒐 𝒅𝒆𝒃𝒆𝒔 𝒅𝒆 𝒆𝒏𝒗𝒊𝒂𝒓 𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒆𝒍 𝒄𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒆𝒍𝒆𝒈𝒊𝒅𝒐 𝒄𝒐𝒏 𝒍𝒂 𝒑𝒂𝒍𝒂𝒃𝒓𝒂 ''𝒔𝒕𝒊𝒄𝒌𝒆𝒓'' \n\n

Descargas de videos y audios estan actualmente desactivadas.\n\n

┌──⭓  𝐌𝐞𝐧𝐮 𝐝𝐞 𝐂𝐨𝐧𝐯𝐞𝐫𝐬𝐢ó𝐧
│
│⭔ 𝗲𝗺𝗼𝗷𝗶  <𝗰𝗼𝗻𝘀𝘂𝗹𝘁𝗮>
│⭔ 𝗲𝗺𝗼𝗷𝗶𝗺𝗶𝘅  <𝗰𝗼𝗻𝘀𝘂𝗹𝘁𝗮>
│⭔ 𝘀𝗰𝗶𝗿𝗰𝗹𝗲  <𝗿𝗲𝗽𝗹𝘆>
│⭔ 𝘀𝘁𝗶𝗰𝗸𝗲𝗿  <𝗿𝗲𝗽𝗹𝘆>
│⭔ 𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝗽  <𝗿𝗲𝗽𝗹𝘆>
│⭔ 𝘁𝗮𝗸𝗲𝘀𝘁𝗶𝗰𝗸𝗲𝗿  <𝗿𝗲𝗽𝗹𝘆>
│⭔ 𝘁𝗼𝗶𝗺𝗴  <𝗿𝗲𝗽𝗹𝘆>
│⭔ 𝘁𝗼𝘃𝗶𝗱𝗲𝗼  <𝗿𝗲𝗽𝗹𝘆>
│⭔ 𝒂𝒕𝒕𝒑  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒔𝒎𝒆𝒎𝒆  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│
└───────⭓

┌──⭓ 𝑪𝒓𝒆𝒂𝒕𝒐𝒓 𝑴𝒆𝒏𝒖
│
│⭔ 𝒃𝒐𝒕𝒄𝒐𝒎𝒎𝒆𝒏𝒕  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒄𝒉𝒂𝒏𝒈𝒆𝒎𝒚𝒎𝒊𝒏𝒅  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒉𝒂𝒓𝒕𝒂𝒄𝒖𝒔𝒕𝒐𝒎 𝒉𝒂𝒌𝒖𝒏𝒂|𝒎𝒂𝒕𝒂𝒕𝒂|𝒗𝒊𝒗𝒆
│⭔ 𝒌𝒂𝒏𝒏𝒂𝒈𝒆𝒏  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒑𝒉𝒄𝒐𝒎𝒎𝒆𝒏𝒕  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒕𝒓𝒖𝒎𝒑𝒄𝒐𝒎𝒎𝒆𝒏𝒕  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒕𝒘𝒆𝒆𝒕𝒎𝒂𝒌𝒆𝒓  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒚𝒕𝒄𝒐𝒎𝒎𝒆𝒏𝒕  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│
└───────⭓

┌──⭓ 𝑬𝒏𝒕𝒆𝒓𝒕𝒂𝒊𝒏𝒎𝒆𝒏𝒕 𝑴𝒆𝒏𝒖
│
│⭔ 𝑩𝒐𝒕  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│
└───────⭓

┌──⭓ 𝑮𝒓𝒐𝒖𝒑 𝑴𝒆𝒏𝒖
│
│⭔ 𝒂𝒏𝒕𝒊𝒅𝒆𝒍𝒆𝒕𝒆  <𝒐𝒑𝒕𝒊𝒐𝒏𝒔>
│⭔ 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌  <𝒐𝒑𝒕𝒊𝒐𝒏𝒔>
│⭔ 𝒖𝒏𝒅𝒆𝒇𝒊𝒏𝒆𝒅  <𝒕𝒂𝒈>
│⭔ 𝒐𝒇𝒇𝒍𝒊𝒏𝒆  <𝒐𝒑𝒕𝒊𝒐𝒏𝒔>
│⭔ 𝒑𝒓𝒐𝒎𝒐𝒕𝒆  <𝒕𝒂𝒈>
│⭔ 𝒓𝒆𝒂𝒄𝒕  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒔𝒆𝒕𝒑𝒑𝒈𝒄  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒔𝒆𝒕𝒘𝒆𝒍𝒄𝒐𝒎𝒆  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝑾𝒆𝒍𝒄𝒐𝒎𝒆  <𝒐𝒑𝒕𝒊𝒐𝒏𝒔>
│
└───────⭓

┌──⭓ 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝑴𝒆𝒏𝒖
│
│⭔ 𝒕𝒓𝒂𝒏𝒔𝒍𝒂𝒕𝒆  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│
└───────⭓

┌──⭓ 𝑴𝒂𝒊𝒏 𝑴𝒆𝒏𝒖
│
│⭔ 𝒎𝒆𝒏𝒖
│⭔ 𝒊𝒏𝒔𝒑𝒆𝒄𝒕  <𝒖𝒓𝒍>
│⭔ 𝒑𝒓𝒆𝒎𝒊𝒖𝒎𝒍𝒊𝒔𝒕
│⭔ 𝒓𝒆𝒈𝒊𝒔𝒕𝒆𝒓
│
└───────⭓

┌──⭓ 𝑴𝒐𝒓𝒆𝒏𝒔𝒇𝒘 𝑴𝒆𝒏𝒖
│
│⭔ 𝒎𝒏𝒔𝒇𝒘𝒊𝒎𝒂𝒈𝒆  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒎𝒏𝒔𝒇𝒘𝒎𝒆𝒏𝒖  [𝒍𝒊𝒔𝒕𝒎𝒆𝒏𝒖]
│
└───────⭓

┌──⭓ 𝑶𝒘𝒏𝒆𝒓 𝑴𝒆𝒏𝒖
│
│⭔ 𝒂𝒖𝒕𝒐𝒓𝒆𝒂𝒅  <𝒐𝒑𝒕𝒊𝒐𝒏𝒔>
│⭔ 𝒆𝒗𝒂𝒍  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒆𝒙𝒆𝒄  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒑𝒓𝒆𝒎𝒊𝒖𝒎  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒔𝒆𝒍𝒇  <𝒐𝒑𝒕𝒊𝒐𝒏𝒔>
│⭔ 𝒔𝒆𝒕𝒆𝒙𝒊𝒇  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒖𝒑𝒅𝒂𝒕𝒆
│
└───────⭓

┌──⭓ 𝑷𝒉𝒐𝒕𝒐𝒆𝒅𝒊𝒕𝒐𝒓 𝑴𝒆𝒏𝒖
│
│⭔ 𝒃𝒍𝒖𝒓  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒃𝒓𝒊𝒈𝒉𝒕𝒆𝒏  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒄𝒊𝒓𝒄𝒍𝒆  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒄𝒐𝒎𝒓𝒂𝒅𝒆  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒄𝒐𝒏𝒕𝒓𝒂𝒔𝒕  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒈𝒂𝒚  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒈𝒍𝒂𝒔𝒔  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒈𝒓𝒆𝒚𝒔𝒄𝒂𝒍𝒆  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒉𝒐𝒓𝒏𝒚  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒊𝒏𝒗𝒆𝒓𝒕  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒋𝒂𝒊𝒍  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒑𝒂𝒔𝒔𝒆𝒅  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒑𝒊𝒙𝒆𝒍𝒂𝒕𝒆  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒔𝒄𝒂𝒍𝒆  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒔𝒆𝒑𝒊𝒂  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒕𝒓𝒊𝒈𝒈𝒆𝒓𝒆𝒅  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒖𝒑𝒔𝒄𝒂𝒍𝒆  <𝒓𝒆𝒑𝒍𝒚>
│⭔ 𝒘𝒂𝒔𝒕𝒆𝒅  <𝒓𝒆𝒑𝒍𝒚>
│
└───────⭓

┌──⭓ 𝑹𝒂𝒏𝒅𝒐𝒎𝒂𝒏𝒊𝒎𝒆 𝑴𝒆𝒏𝒖
│
│⭔ 𝒂𝒏𝒊𝒎𝒆𝒄𝒐𝒖𝒑𝒍𝒆
│⭔ 𝒂𝒏𝒊𝒎𝒆𝒎𝒆
│⭔ 𝒂𝒏𝒊𝒎𝒆𝒎𝒆𝒏𝒖  [𝒍𝒊𝒔𝒕𝒎𝒆𝒏𝒖]
│⭔ 𝒉𝒐𝒍𝒐𝒍𝒊𝒗𝒆
│⭔ 𝒓𝒂𝒏𝒅𝒐𝒎𝒂𝒏𝒊𝒎𝒆  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│
└───────⭓


┌──⭓ 𝑹𝒂𝒏𝒅𝒐𝒎𝒊𝒎𝒂𝒈𝒆 𝑴𝒆𝒏𝒖
│
│⭔ 𝒊𝒎𝒂𝒈𝒆𝒎𝒆𝒏𝒖  [𝒍𝒊𝒔𝒕𝒎𝒆𝒏𝒖]
│⭔ 𝒎𝒊𝒏𝒆𝒄𝒓𝒂𝒇𝒕
│⭔ 𝒓𝒂𝒏𝒅𝒐𝒎𝒊𝒎𝒂𝒈𝒆  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│
└───────⭓

┌──⭓ 𝑺𝒆𝒂𝒓𝒄𝒉 𝑴𝒆𝒏𝒖
│
│⭔ 𝒂𝒏𝒊𝒎𝒆𝒒𝒖𝒐𝒕𝒆𝒔  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒃𝒂𝒄𝒂𝒓𝒆𝒔𝒆𝒑  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒄𝒉𝒐𝒓𝒅𝒍𝒂𝒈𝒖  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒅𝒂𝒇𝒐𝒏𝒕  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒈𝒊𝒎𝒂𝒈𝒆  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒋𝒂𝒅𝒘𝒂𝒍𝒕𝒗  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒍𝒊𝒏𝒆𝒔𝒕𝒊𝒄𝒌𝒆𝒓  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒍𝒊𝒓𝒊𝒌𝒍𝒂𝒈𝒖  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒑𝒊𝒏  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒑𝒊𝒙𝒊𝒗  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒓𝒆𝒔𝒆𝒑  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒔𝒇𝒊𝒍𝒆𝒔𝒆𝒂𝒓𝒄𝒉  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒔𝒔𝒆𝒂𝒓𝒄𝒉  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒔𝒕𝒚𝒍𝒆𝒕𝒆𝒙𝒕  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒕𝒓𝒆𝒏𝒅𝒊𝒏𝒈  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒘𝒂𝒈𝒓𝒐𝒖𝒑  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒘𝒂𝒍𝒍𝒑𝒂𝒑𝒆𝒓  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒘𝒂𝒎𝒐𝒅𝒔  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒙𝒏𝒙𝒙𝒔𝒆𝒂𝒓𝒄𝒉  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒙𝒗𝒊𝒅𝒆𝒐𝒔𝒆𝒂𝒓𝒄𝒉  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒚𝒕𝒔𝒆𝒂𝒓𝒄𝒉  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│⭔ 𝒛𝒆𝒓𝒐𝒄𝒉𝒂𝒏  <𝒄𝒐𝒏𝒔𝒖𝒍𝒕𝒂>
│
└───────⭓


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
