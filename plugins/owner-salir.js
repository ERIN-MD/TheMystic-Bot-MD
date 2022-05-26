let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('El bot saldra del grupo, , ! (≧ω≦)ゞ') 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(out|leavegc)$/i

handler.owner = true
handler.group = true
module.exports =  handler
