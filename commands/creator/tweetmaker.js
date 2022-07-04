module.exports = {
    name: "tweetmaker",
    alias: ["twc","tweetcomment"],
    use: "<consulta>",
    desc: "Twitter Comment Maker",
    type: "creator",
    example: "%prefix%command <consulta>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/maketweet", {
            text: text, 
            text2: m.pushName
        }, "apikey"), "", m)
    },
    isQuery: true
}