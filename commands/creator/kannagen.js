module.exports = {
    name: "kannagen",
    alias: ["kannagenerator"],
    use: "<consulta>",
    desc: "Kanna Comment Maker",
    type: "creator",
    example: "%prefix%command <consulta>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/kannagen", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}