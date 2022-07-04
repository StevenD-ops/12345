module.exports = {
    name: "nuliskiri",
    alias: ["mnuliskiri"],
    use: "<consulta>",
    desc: "Mager Nulis Maker",
    type: "creator",
    example: "%prefix%command <consulta>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/nuliskiri", { text: text }, "apikey"), "", m)
    },
    isQuery: true
}