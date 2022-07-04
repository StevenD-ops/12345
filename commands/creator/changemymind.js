module.exports = {
    name: "changemymind",
    alias: ["cmm"],
    use: "<consulta>",
    desc: "Change my mind Maker",
    type: "creator",
    example: "%prefix%command <consulta>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/changemymind", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}