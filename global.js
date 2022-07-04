const fs = require("fs")

global.user = require("./data/user")
global.group = require("./data/group")
global._user = JSON.parse(fs.readFileSync("./database/user.json"))
global._group = JSON.parse(fs.readFileSync("./database/group.json"))

global.mess = (type, m) => {
    let msg = {
        wait: 'Espera, en progreso',
        owner: '¡Este comando solo puede ser utilizado por el Propietario!',
        premium: '¡Este comando solo puede ser utilizado por Premium!',
        group: '¡Este comando solo se puede usar en grupos!',
        private: '¡Este comando solo se puede usar en el chat privado!',
        admin: '¡Este comando solo puede ser utilizado por administradores de grupo!',
        botAdmin: 'Bot bukan admin, tidak dapat mengakses fitur tersebut',
        bot: 'Esta característica solo puede ser accedida por Bot',
        dead: '¡Esta función se está desactivando!',
        media: 'Responder medios',
        error: "No se han encontrado resultados"
    }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}
