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

            𝑷𝒖𝒆𝒅𝒆𝒔 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒓 ''%prefix%𝒎𝒆𝒏𝒖'' 𝒑𝒂𝒓𝒂 𝒂𝒄𝒄𝒆𝒅𝒆𝒓 𝒂𝒍 𝒎𝒆𝒏ú
             𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒂𝒍.

            𝑺𝒊 𝒅𝒆𝒔𝒆𝒂𝒔 𝒉𝒂𝒄𝒆𝒓 𝒖𝒏 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒅𝒆 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏/𝒇𝒐𝒕𝒐/𝒈𝒊𝒇 𝒔𝒐𝒍𝒐 𝒅𝒆𝒃𝒆𝒔 𝒅𝒆 𝒆𝒏𝒗𝒊𝒂𝒓 𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒆𝒍 𝒄𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒆𝒍𝒆𝒈𝒊
            𝒅𝒐 𝒄𝒐𝒏 𝒍𝒂 𝒑𝒂𝒍𝒂𝒃𝒓𝒂 ''%prefix%𝒔𝒕𝒊𝒄𝒌𝒆𝒓''

            I̳N̳F̳O̳R̳M̳A̳C̳I̳O̳N̳ ̳D̳E̳ ̳B̳E̳N̳D̳E̳R̳

            %prefix%𝒈𝒓𝒖𝒑𝒐𝒔
            %prefix%𝒆𝒔𝒕𝒂𝒅𝒐
            %prefix%𝒊𝒏𝒇𝒐𝒃𝒐𝒕
            %prefix%𝒈𝒓𝒐𝒖𝒑𝒍𝒊𝒔𝒕
            %prefix%𝒐𝒘𝒏𝒆𝒓

            𝑷𝒂𝒓𝒂 𝑯𝒂𝒃𝒍𝒂𝒓 𝒄𝒐𝒏 𝒆𝒍 𝑩𝒐𝒕 𝒑𝒖𝒆𝒅𝒆 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒓
            %prefix%𝑩𝒐𝒕 + (𝒄𝒐𝒎𝒆𝒏𝒕𝒂𝒓𝒊𝒐𝒔)

            I̳N̳G̳R̳E̳S̳A̳ ̳A̳ ̳B̳E̳N̳D̳E̳R̳ ̳A̳ ̳T̳U̳ ̳G̳R̳U̳P̳O̳

            %prefix%𝒋𝒐𝒊𝒏 <𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒍𝒊𝒏𝒌 / 𝒖𝒓𝒍>


            R̳E̳P̳O̳R̳T̳E̳ ̳D̳E̳ ̳F̳A̳L̳L̳O̳S̳

             %prefix%𝒓𝒆𝒑𝒐𝒓𝒕𝒆 <𝒕𝒆𝒙𝒕𝒐>


            ┌──⭓  𝐌𝐞𝐧𝐮 𝐝𝐞 𝐂𝐨𝐧𝐯𝐞𝐫𝐬𝐢ó𝐧
            │
            │ %prefix%𝒔𝒕𝒊𝒄𝒌𝒆𝒓 <𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒂 𝒊𝒎𝒂𝒈𝒆𝒏 𝒐 𝒗𝒊𝒅𝒆𝒐>
            │ %prefix%𝒔𝒕𝒊𝒄𝒌𝒆𝒓 <𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒍𝒊𝒏𝒌 / 𝒖𝒓𝒍>
            │ %prefix%𝒔 <𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒂 𝒊𝒎𝒂𝒈𝒆𝒏 𝒐 𝒗𝒊𝒅𝒆𝒐>
            │ %prefix%𝒔 <𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒍𝒊𝒏𝒌 / 𝒖𝒓𝒍>
            │ %prefix%𝒆𝒎𝒐𝒋𝒊𝒎𝒊𝒙 <𝒆𝒎𝒐𝒋𝒊 1>&<𝒆𝒎𝒐𝒋𝒊 2>
            │ %prefix%𝒔𝒄𝒊𝒓𝒄𝒍𝒆 <𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒂 𝒊𝒎𝒂𝒈𝒆𝒏>
            │ %prefix%𝒔𝒆𝒎𝒐𝒋𝒊 <𝒕𝒊𝒑𝒐> <𝒆𝒎𝒐𝒋𝒊>
            │ %prefix%𝒂𝒕𝒕𝒑 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒂𝒕𝒕𝒑2 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒕𝒕𝒑 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒕𝒕𝒑2 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒕𝒕𝒑3 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒕𝒕𝒑4 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒕𝒕𝒑5 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒑𝒂𝒕 <@𝒕𝒂𝒈>
            │ %prefix%𝒔𝒍𝒂𝒑 <@𝒕𝒂𝒈>
            │ %prefix%𝒌𝒊𝒔𝒔 <@𝒕𝒂𝒈>
            │ %prefix%𝒅𝒂𝒅𝒐
            │ %prefix%𝒘𝒎 <𝒑𝒂𝒄𝒌𝒏𝒂𝒎𝒆> <𝒂𝒖𝒕𝒉𝒐𝒓>
            │ %prefix%𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒎𝒂𝒓𝒌𝒆𝒓 <𝒆𝒇𝒆𝒄𝒕𝒐> <𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒂 𝒊𝒎𝒂𝒈𝒆𝒏>
            │ %prefix%𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒇𝒊𝒍𝒕𝒆𝒓 <𝒆𝒇𝒆𝒄𝒕𝒐> <𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒂 𝒊𝒎𝒂𝒈𝒆𝒏>
            │
            └───────⭓


            ┌──⭓  𝑴𝑬𝑵𝑼 𝑫𝑬 𝑮𝑹𝑼𝑷𝑶𝑺
            │ %prefix%𝒂𝒅𝒅 <𝒏𝒖𝒎𝒆𝒓𝒐>
            │ %prefix%𝒌𝒊𝒄𝒌 <@𝒕𝒂𝒈>
            │ %prefix%𝒈𝒓𝒖𝒑𝒐 <𝒂𝒃𝒓𝒊𝒓 / 𝒄𝒆𝒓𝒓𝒂𝒓>
            │ %prefix%𝒑𝒓𝒐𝒎𝒐𝒕𝒆 <@𝒕𝒂𝒈>
            │ %prefix%𝒅𝒆𝒎𝒐𝒕𝒆 <@𝒕𝒂𝒈>
            │ 𝒂𝒅𝒎𝒊𝒏𝒔 <𝒕𝒆𝒙𝒕𝒐> (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
            │ %prefix%𝒅𝒆𝒎𝒐𝒕𝒆 <@𝒕𝒂𝒈>
            │ %prefix%𝒊𝒏𝒇𝒐𝒈𝒓𝒐𝒖𝒑
            │ %prefix%𝒍𝒊𝒏𝒌
            │ %prefix%𝒔𝒆𝒕𝒏𝒂𝒎𝒆 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒔𝒆𝒕𝒅𝒆𝒔𝒄 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒊𝒏𝒗𝒐𝒄𝒂𝒓 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒔𝒆𝒕𝒘𝒆𝒍𝒄𝒐𝒎𝒆 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒔𝒆𝒕𝒃𝒚𝒆 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒉𝒊𝒅𝒆𝒕𝒂𝒈 <𝒕𝒆𝒙𝒕𝒐>
            │
            └───────⭓


            ┌──⭓  𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺
            │
            │ %prefix%𝒚𝒕𝒎𝒑3 <𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒍𝒊𝒏𝒌 / 𝒖𝒓𝒍>
            │ %prefix%𝒚𝒕𝒎𝒑4 <𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒍𝒊𝒏𝒌 / 𝒖𝒓𝒍>
            │ %prefix%𝒚𝒕𝒎𝒑3𝒅𝒐𝒄 <𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒍𝒊𝒏𝒌 / 𝒖𝒓𝒍>
            │ %prefix%𝒚𝒕𝒎𝒑4𝒅𝒐𝒄 <𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒍𝒊𝒏𝒌 / 𝒖𝒓𝒍>
            │ %prefix%𝒑𝒍𝒂𝒚.1 <𝒕𝒆𝒙𝒕𝒐 / 𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒍𝒊𝒏𝒌 / 𝒖𝒓𝒍>
            │ %prefix%𝒑𝒍𝒂𝒚.2 <𝒕𝒆𝒙𝒕𝒐 / 𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒍𝒊𝒏𝒌 / 𝒖𝒓𝒍>
            │ %prefix%𝒑𝒍𝒂𝒚 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒑𝒍𝒂𝒚𝒅𝒐𝒄 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕2 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒔𝒑𝒐𝒕𝒊𝒇𝒚 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒊𝒎𝒂𝒈𝒆𝒏 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒑𝒊𝒏𝒕𝒆𝒓𝒆𝒕 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒘𝒂𝒍𝒍𝒑𝒂𝒑𝒆𝒓 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒘𝒂𝒍𝒍𝒑𝒂𝒑𝒆𝒓2 <𝒕𝒆𝒙𝒕𝒐>
            │
            └───────⭓


            ┌──⭓  𝑩𝑼𝑺𝑪𝑨𝑫𝑶𝑹𝑬𝑺
            │
            │ %prefix%𝒙𝒏𝒙𝒙𝒔𝒆𝒂𝒓𝒄𝒉 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒂𝒏𝒊𝒎𝒆𝒊𝒏𝒇𝒐 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒈𝒐𝒐𝒈𝒍𝒆 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒍𝒆𝒕𝒓𝒂 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒘𝒊𝒌𝒊𝒑𝒆𝒅𝒊𝒂 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒚𝒕𝒔𝒆𝒂𝒓𝒄𝒉 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒂𝒑𝒌𝒅𝒐𝒏𝒆 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒂𝒑𝒌𝒈𝒐𝒐𝒈𝒍𝒆 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒂𝒑𝒌𝒎𝒐𝒅𝒚 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒂𝒑𝒌𝒔𝒉𝒖𝒃 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒉𝒂𝒑𝒑𝒚𝒎𝒐𝒅 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒉𝒐𝒔𝒕𝒂𝒑𝒌 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒓𝒆𝒗𝒅𝒍 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒕𝒐𝒓𝒂𝒄𝒄𝒊𝒏𝒐 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒖𝒂𝒑𝒌𝒑𝒓𝒐 <𝒕𝒆𝒙𝒕𝒐>
            │
            └───────⭓


            ┌──⭓  𝑱𝒖𝒆𝒈𝒐𝒔
            │
            │ %prefix%𝒎𝒂𝒕𝒆𝒔 <𝒏𝒐𝒐𝒃 / 𝒆𝒂𝒔𝒚 / 𝒎𝒆𝒅𝒊𝒖𝒎 / 𝒉𝒂𝒓𝒅 / 𝒆𝒙𝒕𝒓𝒆𝒎𝒆 /𝒊𝒎𝒑𝒐𝒔𝒔𝒊𝒃𝒍𝒆 /𝒊𝒎𝒑𝒐𝒔𝒔𝒊𝒃𝒍𝒆2>
            │ %prefix%𝒑𝒑𝒕 <𝒑𝒂𝒑𝒆𝒍 / 𝒕𝒊𝒋𝒆𝒓𝒂 /𝒑𝒊𝒆𝒅𝒓𝒂>
            │ %prefix%𝒑𝒓𝒐𝒔𝒕𝒊𝒕𝒖𝒕𝒐 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒑𝒓𝒐𝒔𝒕𝒊𝒕𝒖𝒕𝒂 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒈𝒂𝒚2 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒍𝒆𝒔𝒃𝒊𝒂𝒏𝒂 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒑𝒂𝒋𝒆𝒓𝒐 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒑𝒂𝒋𝒆𝒓𝒂 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒑𝒖𝒕𝒐 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒑𝒖𝒕𝒂 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒎𝒂𝒏𝒄𝒐 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒎𝒂𝒏𝒄𝒂 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒓𝒂𝒕𝒂 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒍𝒐𝒗𝒆 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒅𝒐𝒙𝒆𝒂𝒓 <𝒏𝒐𝒎𝒃𝒓𝒆 / @𝒕𝒂𝒈>
            │ %prefix%𝒑𝒓𝒆𝒈𝒖𝒏𝒕𝒂 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒔𝒍𝒐𝒕 <𝒂𝒑𝒖𝒆𝒔𝒕𝒂>
            │ %prefix%𝒑𝒗𝒑 <@𝒕𝒂𝒈>
            │ %prefix%𝒔𝒊𝒎𝒊 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒕𝒐𝒑𝒈𝒂𝒚𝒔
            │ %prefix%𝒕𝒐𝒑𝒐𝒕𝒂𝒌𝒖𝒔
            │ %prefix%𝒇𝒐𝒓𝒎𝒂𝒓𝒑𝒂𝒓𝒆𝒋𝒂
            │ %prefix%𝒗𝒆𝒓𝒅𝒂𝒅
            │ %prefix%𝒓𝒆𝒕𝒐
            │
            └───────⭓


            ┌──⭓  𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑫𝑶𝑹𝑬𝑺
            │
            │ %prefix%𝒕𝒐𝒊𝒎𝒈 <𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒔𝒕𝒊𝒄𝒌𝒆𝒓>
            │ %prefix%𝒕𝒐𝒎𝒑3 <𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 / 𝒏𝒐𝒕𝒂 𝒅𝒆 𝒗𝒐𝒛>
            │ %prefix%𝒕𝒐𝒑𝒕𝒕 <𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 / 𝒂𝒖𝒅𝒊𝒐>
            │ %prefix%𝒕𝒐𝒗𝒊𝒅𝒆𝒐 <𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒂𝒖𝒅𝒊𝒐>
            │ %prefix%𝒕𝒐𝒖𝒓𝒍 <𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 / 𝒊𝒎𝒂𝒈𝒆𝒏 / 𝒂𝒖𝒅𝒊𝒐>
            │ %prefix%𝒕𝒕𝒔 𝒆𝒔 <𝒕𝒆𝒙𝒕𝒐>
            │
            └───────⭓


            ┌──⭓  𝑪𝒐𝒏𝒗𝒆𝒓𝒔𝒂𝒄𝒊𝒐𝒏𝒆𝒔 𝒂𝒏𝒐𝒏𝒊𝒎𝒂𝒔
            │
            │ %prefix%𝒔𝒕𝒂𝒓𝒕
            │ %prefix%𝒏𝒆𝒙𝒕
            │ %prefix%𝒍𝒆𝒂𝒗𝒆
            │
            └───────⭓


            ┌──⭓ 𝑴𝑨𝑺 𝑫𝑬 +18
            │
            │ %prefix%𝒑𝒂𝒄𝒌
            │ %prefix%𝒑𝒂𝒄𝒌2
            │ %prefix%𝒑𝒂𝒄𝒌3
            │ %prefix%𝒗𝒊𝒅𝒆𝒐𝒙𝒙𝒙
            │ %prefix%𝒕𝒆𝒕𝒂𝒔
            │ %prefix%𝒃𝒐𝒐𝒕𝒚
            │ %prefix%𝒆𝒄𝒄𝒉𝒊
            │ %prefix%𝒇𝒖𝒓𝒓𝒐
            │ %prefix%𝒊𝒎𝒂𝒈𝒆𝒏𝒍𝒆𝒔𝒃𝒊𝒂𝒏𝒔
            │ %prefix%𝒑𝒂𝒏𝒕𝒊𝒆𝒔
            │ %prefix%𝒑𝒆𝒏𝒆
            │ %prefix%𝒑𝒐𝒓𝒏𝒐
            │ %prefix%𝒑𝒐𝒓𝒏𝒐2
            │ %prefix%𝒓𝒂𝒏𝒅𝒐𝒎𝒙𝒙𝒙
            │ %prefix%𝒑𝒆𝒄𝒉𝒐𝒔
            │ %prefix%𝒚𝒂𝒐𝒊
            │ %prefix%𝒚𝒂𝒐𝒊2
            │ %prefix%𝒚𝒖𝒓𝒊
            │ %prefix%𝒚𝒖𝒓𝒊2
            │ %prefix%𝒕𝒓𝒂𝒑𝒊𝒕𝒐
            │ %prefix%𝒉𝒆𝒏𝒕𝒂𝒊
            │ %prefix%𝒑𝒊𝒆𝒔
            │ %prefix%𝒏𝒔𝒇𝒘𝒍𝒐𝒍𝒊
            │ %prefix%𝒏𝒔𝒇𝒘𝒐𝒓𝒈𝒚
            │ %prefix%𝒏𝒔𝒇𝒘𝒇𝒐𝒐𝒕
            │ %prefix%𝒏𝒔𝒇𝒘𝒂𝒔𝒔
            │ %prefix%𝒏𝒔𝒇𝒘𝒃𝒅𝒔𝒎
            │ %prefix%𝒏𝒔𝒇𝒘𝒄𝒖𝒎
            │ %prefix%𝒏𝒔𝒇𝒘𝒆𝒓𝒐
            │ %prefix%𝒏𝒔𝒇𝒘𝒇𝒆𝒎𝒅𝒐𝒎
            │ %prefix%𝒏𝒔𝒇𝒘𝒈𝒍𝒂𝒔𝒔
            │
            └───────⭓


            ┌──⭓  𝑹𝑨𝑵𝑫𝑶𝑴
            │
            │ %prefix%𝒄𝒓𝒊𝒔𝒕𝒊𝒂𝒏𝒐𝒓𝒐𝒏𝒂𝒍𝒅𝒐
            │ %prefix%𝒎𝒆𝒔𝒔𝒊
            │ %prefix%𝒎𝒆𝒎𝒆
            │ %prefix%𝒊𝒕𝒛𝒚
            │ %prefix%𝒃𝒍𝒂𝒄𝒌𝒑𝒊𝒏𝒌
            │ %prefix%𝒌𝒑𝒐𝒑 <𝒃𝒍𝒂𝒄𝒌𝒑𝒊𝒏𝒌 / 𝒆𝒙𝒐 / 𝒃𝒕𝒔>
            │ %prefix%𝒍𝒐𝒍𝒊𝒗𝒊𝒅
            │ %prefix%𝒍𝒐𝒍𝒊
            │ %prefix%𝒏𝒂𝒗𝒊𝒅𝒂𝒅
            │ %prefix%𝒑𝒑𝒄𝒐𝒖𝒑𝒍𝒆
            │ %prefix%𝒏𝒆𝒌𝒐
            │ %prefix%𝒘𝒂𝒊𝒇𝒖
            │ %prefix%𝒂𝒌𝒊𝒓𝒂
            │ %prefix%𝒂𝒌𝒊𝒚𝒂𝒎𝒂
            │ %prefix%𝒂𝒏𝒏𝒂
            │ %prefix%𝒂𝒔𝒖𝒏𝒂
            │ %prefix%𝒂𝒚𝒖𝒛𝒂𝒘𝒂
            │ %prefix%𝒃𝒐𝒓𝒖𝒕𝒐
            │ %prefix%𝒄𝒉𝒊𝒉𝒐
            │ %prefix%𝒄𝒉𝒊𝒕𝒐𝒈𝒆
            │ %prefix%𝒅𝒆𝒊𝒅𝒂𝒓𝒂
            │ %prefix%𝒆𝒓𝒛𝒂
            │ %prefix%𝒆𝒍𝒂𝒊𝒏𝒂
            │ %prefix%𝒆𝒃𝒂
            │ %prefix%𝒆𝒎𝒊𝒍𝒊𝒂
            │ %prefix%𝒉𝒆𝒔𝒕𝒊𝒂
            │ %prefix%𝒉𝒊𝒏𝒂𝒕𝒂
            │ %prefix%𝒊𝒏𝒐𝒓𝒊
            │ %prefix%𝒊𝒔𝒖𝒛𝒖
            │ %prefix%𝒊𝒕𝒂𝒄𝒉𝒊
            │ %prefix%𝒊𝒕𝒐𝒓𝒊
            │ %prefix%𝒌𝒂𝒈𝒂
            │ %prefix%𝒌𝒂𝒈𝒖𝒓𝒂
            │ %prefix%𝒌𝒂𝒐𝒓𝒊
            │ %prefix%𝒌𝒆𝒏𝒆𝒌𝒊
            │ %prefix%𝒌𝒐𝒕𝒐𝒓𝒊
            │ %prefix%𝒌𝒖𝒓𝒖𝒎𝒊
            │ %prefix%𝒎𝒂𝒅𝒂𝒓𝒂
            │ %prefix%𝒎𝒊𝒌𝒂𝒔𝒂
            │ %prefix%𝒎𝒊𝒌𝒖
            │ %prefix%𝒎𝒊𝒏𝒂𝒕𝒐
            │ %prefix%𝒏𝒂𝒓𝒖𝒕𝒐
            │ %prefix%𝒏𝒆𝒛𝒖𝒌𝒐
            │ %prefix%𝒔𝒂𝒈𝒊𝒓𝒊
            │ %prefix%𝒔𝒂𝒔𝒖𝒌𝒆
            │ %prefix%𝒔𝒂𝒌𝒖𝒓𝒂
            │ %prefix%𝒄𝒐𝒔𝒑𝒍𝒂𝒚
            │
            └───────⭓


            ┌──⭓  𝑬𝑭𝑬𝑪𝑻𝑶𝑺
            │
            │ %prefix%𝒍𝒐𝒈𝒐𝒔 <𝒆𝒇𝒆𝒄𝒕𝒐> <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒍𝒐𝒈𝒐𝒄𝒐𝒓𝒂𝒛𝒐𝒏 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒍𝒐𝒈𝒐𝒄𝒉𝒓𝒊𝒔𝒕𝒎𝒂𝒔 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒔𝒊𝒎𝒑𝒄𝒂𝒓𝒅 <@𝒕𝒂𝒈>
            │ %prefix%𝒉𝒐𝒓𝒏𝒚𝒄𝒂𝒓𝒅 <@𝒕𝒂𝒈>
            │ %prefix%𝒍𝒐𝒍𝒊𝒄𝒆 <@𝒕𝒂𝒈>
            │ %prefix%𝒚𝒕𝒄𝒐𝒎𝒎𝒆𝒏𝒕 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒊𝒕𝒔𝒔𝒐𝒔𝒕𝒖𝒑𝒊𝒅
            │ %prefix%𝒑𝒊𝒙𝒆𝒍𝒂𝒓
            │ %prefix%𝒃𝒍𝒖𝒓
            │
            └───────⭓

            ┌──⭓  𝑬𝑭𝑹𝑬𝑪𝑻𝑶 𝑫𝑬 𝒂𝒖𝒅𝒊𝒐𝒔
            │   𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒖 𝒂𝒖𝒅𝒊𝒐
            │
            │ %prefix%𝒃𝒂𝒔𝒔
            │ %prefix%𝒃𝒍𝒐𝒘𝒏
            │ %prefix%𝒅𝒆𝒆𝒑
            │ %prefix%𝒆𝒂𝒓𝒓𝒂𝒑𝒆
            │ %prefix%𝒇𝒂𝒔𝒕
            │ %prefix%𝒇𝒂𝒕
            │ %prefix%𝒏𝒊𝒈𝒉𝒕𝒄𝒐𝒓𝒆
            │ %prefix%𝒓𝒆𝒗𝒆𝒓𝒔𝒆
            │ %prefix%𝒓𝒐𝒃𝒐𝒕
            │ %prefix%𝒔𝒍𝒐𝒘
            │ %prefix%𝒔𝒎𝒐𝒐𝒕𝒉
            │ %prefix%𝒕𝒖𝒑𝒂𝒊
            │
            └───────⭓


            ┌──⭓  𝑬𝑪𝑶𝑵𝑶𝑴𝑰𝑨
            │
            │ %prefix%𝒃𝒂𝒍𝒂𝒏𝒄𝒆
            │ %prefix%𝒄𝒍𝒂𝒊𝒎
            │ %prefix%𝒕𝒐𝒑
            │ %prefix%𝒍𝒆𝒗𝒆𝒍𝒖𝒑
            │ %prefix%𝒎𝒚𝒏𝒔
            │ %prefix%𝒑𝒆𝒓𝒇𝒊𝒍
            │ %prefix%𝒘𝒐𝒓𝒌
            │ %prefix%𝒎𝒊𝒏𝒂𝒓
            │ %prefix%𝒃𝒖𝒚
            │ %prefix%𝒃𝒖𝒚𝒂𝒍𝒍
            │ %prefix%𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓 <𝒕𝒊𝒑𝒐> <𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅> <@𝒕𝒂𝒈>
            │ %prefix%𝒗𝒆𝒓𝒊𝒇𝒊𝒄𝒂𝒓
            │ %prefix%𝒖𝒏𝒓𝒆𝒈 <𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆>


            ┌──⭓   𝑯𝑬𝑹𝑨𝑴𝑰𝑬𝑵𝑻𝑨𝑺
            │
            │ %prefix%𝒂𝒇𝒌 <𝒎𝒐𝒕𝒊𝒗𝒐>
            │ %prefix%𝒂𝒄𝒐𝒓𝒕𝒂𝒓 <𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒍𝒊𝒏𝒌 / 𝒖𝒓𝒍>
            │ %prefix%𝒄𝒂𝒍𝒄 <𝒐𝒑𝒆𝒓𝒂𝒄𝒊𝒐𝒏 𝒎𝒂𝒕𝒉>
            │ %prefix%𝒅𝒆𝒍 <𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒓𝒆 𝒂 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒅𝒆𝒍 𝑩𝒐𝒕>
            │ %prefix%𝒒𝒓𝒄𝒐𝒅𝒆 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒓𝒆𝒂𝒅𝒎𝒐𝒓𝒆 <𝒕𝒆𝒙𝒕𝒐1| 𝒕𝒆𝒙𝒕𝒐2>
            │ %prefix%𝒔𝒑𝒂𝒎𝒘𝒂 <𝒏𝒖𝒎𝒆𝒓𝒐|𝒕𝒆𝒙𝒕𝒐|𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅>
            │ %prefix%𝒔𝒕𝒚𝒍𝒆𝒕𝒆𝒙𝒕 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒕𝒓𝒂𝒅𝒖𝒄𝒊𝒓 <𝒕𝒆𝒙𝒕𝒐>
            │
            └───────⭓


            ┌──⭓   𝑨𝑪𝑻𝑰𝑽𝑨𝑹 𝑶 𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑹
            │
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒘𝒆𝒍𝒄𝒐𝒎𝒆
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒘𝒆𝒍𝒄𝒐𝒎𝒆
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒎𝒐𝒅𝒐𝒉𝒐𝒓𝒏𝒚
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒎𝒐𝒅𝒐𝒉𝒐𝒓𝒏𝒚
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌2
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌2
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒅𝒆𝒕𝒆𝒄𝒕
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒅𝒆𝒕𝒆𝒄𝒕
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒂𝒖𝒅𝒊𝒐𝒔
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒂𝒖𝒅𝒊𝒐𝒔
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒂𝒖𝒕𝒐𝒔𝒕𝒊𝒄𝒌𝒆𝒓
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒂𝒖𝒕𝒐𝒔𝒕𝒊𝒄𝒌𝒆𝒓
            │
            └───────⭓


            ┌──⭓   𝑶𝑾𝑵𝑬𝑹 𝒀 𝑴𝑶𝑫𝑬𝑹𝑨𝑫𝑶𝑹𝑬𝑺
            │
            │ %prefix%𝒄𝒂𝒋𝒂𝒇𝒖𝒆𝒓𝒕𝒆
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒓𝒆𝒔𝒕𝒓𝒊𝒄𝒕
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒓𝒆𝒔𝒕𝒓𝒊𝒄𝒕
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒂𝒖𝒕𝒐𝒓𝒆𝒂𝒅
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒂𝒖𝒕𝒐𝒓𝒆𝒂𝒅
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒑𝒖𝒃𝒍𝒊𝒄
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒑𝒖𝒃𝒍𝒊𝒄
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒑𝒄𝒐𝒏𝒍𝒚
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒑𝒄𝒐𝒏𝒍𝒚
            │ %prefix%𝒆𝒏𝒂𝒃𝒍𝒆 𝒈𝒄𝒐𝒏𝒍𝒚
            │ %prefix%𝒅𝒊𝒔𝒂𝒃𝒍𝒆 𝒈𝒄𝒐𝒏𝒍𝒚
            │ %prefix%𝒃𝒂𝒏𝒄𝒉𝒂𝒕
            │ %prefix%𝒖𝒏𝒃𝒂𝒏𝒄𝒉𝒂𝒕
            │ %prefix%𝒃𝒂𝒏𝒖𝒔𝒆𝒓 <@𝒕𝒂𝒈>
            │ %prefix%𝒖𝒏𝒃𝒂𝒏𝒖𝒔𝒆𝒓 <@𝒕𝒂𝒈>
            │ %prefix%𝒃𝒂𝒏𝒖𝒔𝒆𝒓 <@𝒕𝒂𝒈>
            │ %prefix%𝒃𝒄 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒃𝒄𝒄𝒉𝒂𝒕𝒔 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒃𝒄𝒈𝒄 <𝒕𝒆𝒙𝒕𝒐>
            │ %prefix%𝒄𝒍𝒆𝒂𝒓𝒕𝒑𝒎
            │ %prefix%𝒓𝒆𝒔𝒕𝒂𝒓𝒕
            │ %prefix%𝒖𝒑𝒅𝒂𝒕𝒆
            │ %prefix%𝒂𝒅𝒅𝒑𝒓𝒆𝒎 <@𝒕𝒂𝒈>
            │ %prefix%𝒅𝒆𝒍𝒑𝒓𝒆𝒎 <@𝒕𝒂𝒈>
            │ %prefix%𝒍𝒊𝒔𝒕𝒑𝒓𝒆𝒎
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
