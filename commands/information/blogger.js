const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "blogger",
    alias: ["blogspot"],
    use: "<consulta>",
    desc: "Get User Profile Url From Blogspot",
    type: "information",
    example: `%prefix%command <consulta>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/information/blogger", { query: text }, "apikey"))
        killua.sendText(m.from, fetch.result, m)
    },
    isQuery: true
}