module.exports = {
    name: "trumpcomment",
    alias: ["trc","trumptweet"],
    use: "<consulta>",
    desc: "Trump Twitter Comment Maker",
    type: "creator",
    example: "%prefix%command <consulta>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/trump", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}