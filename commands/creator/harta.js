module.exports = {
    name: "harta",
    alias: ["tahta","hartatahta"],
    use: "<consulta>",
    desc: "Harta Tahta Maker",
    type: "creator",
    example: "%prefix%command <consulta>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/hartatahta", { text: text }, "apikey"), "", m)
    },
    isQuery: true
}