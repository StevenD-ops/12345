const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "styletext",
    alias: ["fancytext"],
    use: "<consulta>",
    desc: "Search Style Of Text Font",
    type: "search",
    example: `%prefix%command <consulta>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/styletext", { query: text }, "apikey"))
        let caption = `Text Style Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Name : ${i.name}\n`
            caption += `⭔ Result : ${i.result}\n\n`
        }
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}
