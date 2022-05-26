let handler = async (m, { conn, text, usedPrefix, command }) => {
    db.data.sticker = db.data.sticker || {}
    if (!m.quoted) throw 'Responde a un sticker que quieres hacer comando *${usedPrefix + command}*'
    if (!m.quoted.fileSha256) throw 'Falta el sticker'
    if (!text) throw `Usar:\n${usedPrefix + command} <teks>\n\nEjemplo:\n${usedPrefix + command} tes`
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw 'No tienes permiso para modificar este sticker'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Se guardo el comando`)
}


handler.help = ['cmd'].map(v => 'set' + v + ' <teks>')
handler.tags = ['database', 'premium']
handler.command = ['setcmd']
handler.premium = true

export default handler
