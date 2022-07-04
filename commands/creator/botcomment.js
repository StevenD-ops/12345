module.exports = {
    name: "botcomment",
    alias: ["botmaker","botc"],
    use: "<consulta>",
    desc: "Bot Comment Maker",
    type: "creator",
    example: "%prefix%command <consulta>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/botcomment", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}