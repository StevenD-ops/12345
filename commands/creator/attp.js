module.exports = {
    name: "attp",
    alias: ["texttopicture"],
    use: "<consulta>",
    desc: "ATTP Maker",
    type: "creator",
    example: "%prefix%command <consulta>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/attp", { text: text }, "apikey"), "", m)
    },
    isQuery: true
}