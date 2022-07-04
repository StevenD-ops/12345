module.exports = {
    name: "ttp",
    alias: ["texttopicture"],
    use: "<consulta>",
    desc: "TTP Maker",
    type: "creator",
    example: "%prefix%command <consulta>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/ttp", { text: text }, "apikey"), "", m)
    },
    isQuery: true
}