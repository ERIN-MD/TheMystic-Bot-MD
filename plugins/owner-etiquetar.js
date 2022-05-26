let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *Dueño alguien te llamo ehe ehe :v*`, m)

  conn.reply(m.chat, `
No etiquetes a mi creador si es algo importante
escribele a su privado no seas timido(a)`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@51977783315 |@62895336282144/i
handler.command = new RegExp

module.exports = handler
