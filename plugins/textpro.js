// MISAEL

import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
	let title = `— *T E X T P R O* —`
    let caption = 'Seleccione el tipo de logo que quiere'
const sections = [
   {
	title: "TIPOS DE logos",
	rows: [
	    {title: "3d-deep-sea-metal", rowId: ".textpro 3d-deep-sea-metal " + args[0] + ""},
	    {title: "American-flag-3D", rowId: ".textpro American-flag-3D " + args[0] + ""},
	    {title: "3D-sci-fi", rowId: ".testpro 3D-sci-fi " + args[0] + ""},
	    {title: "3D-rainbow-color-calligraphy", rowId: ".textpro 3D-rainbow-color-calligraphy " + args[0] + ""},
	    {title: "3D-water-pipe", rowId: ".textpro 3D-water-pipe " + args[0] + ""},
	    {title: "Halloween-skeleton", rowId: ".textpro Halloween-skeleton " + args[0] + ""},
	    {title: "a-spooky-Halloween", rowId: ".textpro a-spooky-Halloween " + args[0] + ""},
	    {title: "a-cinematic-horror", rowId: ".textpro a-cinematic-horror " + args[0] + ""},
            {title: "a-sketch", rowId: ".textpro a-sketch " + args[0] + ""},
	    {title: "blue-circuit-style", rowId: ".textpro blue-circuit-style " + args[0] + ""},
	    {title: "space", rowId: ".textpro space " + args[0] + ""},
	    {title: "a-metallic", rowId: ".textpro a-metallic " + args[0] + ""},
	    {title: "Creat-glossy-metalic", rowId: ".textpro Creat-glossy-metalic " + args[0] + ""},
	    {title: "a-Captain-America", rowId: ".textpro a-Captain-America " + args[0] + ""},
	    {title: "science-fiction", rowId: ".textpro science-fiction " + args[0] + ""},
	    {title: "Video-game-classic-8-bit", rowId: ".textpro Video-game-classic-8-bit " + args[0] + ""},
	    {title: "green-horror-style", rowId: ".textpro green-horror-style " + args[0] + ""},
	    {title: "a-transformer", rowId: ".textpro a-transformer " + args[0] + ""},
	    {title: "berry", rowId: ".textpro berry " + args[0] + ""},
	    {title: "layered", rowId: ".textpro layered " + args[0] + ""},
	    {title: "Online-thunder--generator", rowId: ".textpro Online-thunder--generator " + args[0] + ""},
	    {title: "a-magma-hot", rowId: ".textpro a-magma-hot " + args[0] + ""},
	    {title: "3D-stone-cracked-cool", rowId: ".textpro 3D-stone-cracked-cool " + args[0] + ""},
	    {title: "3D-neon-light", rowId: ".textpro 3D-neon-light " + args[0] + ""},
	    {title: "impressive-glitch", rowId: ".textpro impressive-glitch " + args[0] + ""},
	    {title: "a-glitch", rowId: ".textpro a-glitch " + args[0] + ""},
	    {title: "Harry-Potter", rowId: ".textpro Harry-Potter " + args[0] + ""},
	    {title: "embossed--on-cracked-surface", rowId: ".textpro embossed--on-cracked-surface " + args[0] + ""},
	    {title: "Broken-glass", rowId: ".textpro Broken-glass " + args[0] + ""},
	    {title: "art-paper-cut", rowId: ".textpro art-paper-cut " + args[0] + ""},
	    {title: "artistic-black-and-white-status-and-quote-with-your-photos", rowId: ".textpro artistic-black-and-white-status-and-quote-with-your-photos " + args[0] + ""},
	    {title: "Online-3D-gradient--generator", rowId: ".textpro Online-3D-gradient--generator " + args[0] + ""},
	    {title: "a-3D-glossy-metal", rowId: ".textpro a-3D-glossy-metal " + args[0] + ""},
	    {title: "3D-realistic--on-the-beach", rowId: ".textpro 3D-realistic--on-the-beach " + args[0] + ""},
	    {title: "a-watercolor", rowId: ".textpro a-watercolor " + args[0] + ""},
	    {title: "Online-multicolor-3D-paper-cut", rowId: ".textpro Online-multicolor-3D-paper-cut " + args[0] + ""},
	    {title: "Write-text-on-foggy-window", rowId: ".textpro Write-text-on-foggy-window " + args[0] + ""},
	    {title: "neon-devil-wings", rowId: ".textpro neon-devil-wings " + args[0] + ""},
	    {title: "3D-underwater--generator", rowId: ".textpro 3D-underwater--generator " + args[0] + ""},
	    {title: "Online-black-and-white-bear-mascot-logo-creation", rowId: ".textpro Online-black-and-white-bear-mascot-logo-creation " + args[0] + ""},
	    {title: "wonderful-graffiti-art", rowId: ".textpro wonderful-graffiti-art " + args[0] + ""},
	    {title: "a-cool-graffiti-text-on-the-wall", rowId: ".textpro a-cool-graffiti-text-on-the-wall " + args[0] + ""},
	    {title: "cool-wall-graffiti", rowId: ".textpro cool-wall-graffiti " + args[0] + ""},
            {title: "a-christmas-holiday-snow", rowId: ".textpro a-christmas-holiday-snow " + args[0] + ""},
	    {title: "a-futuristic-technology-neon-light", rowId: ".textpro a-futuristic-technology-neon-light " + args[0] + ""},
	    {title: "snow--for-winter-holidays", rowId: ".textpro snow--for-winter-holidays " + args[0] + ""},
	    {title: "a-cloud--on-the-sky", rowId: ".textpro a-cloud--on-the-sky " + args[0] + ""},
	    {title: "3D-luxury-gold", rowId: ".textpro 3D-luxury-gold " + args[0] + ""},
	    {title: "3D-gradient", rowId: ".textpro 3D-gradient " + args[0] + ""},
	    {title: "Blackpink-logo-style", rowId: ".textpro Blackpink-logo-style " + args[0] + ""},
	    {title: "realistic-vintage-style-light-bulb", rowId: ".textpro realistic-vintage-style-light-bulb " + args[0] + ""},
	    {title: "realistic-cloud", rowId: ".textpro realistic-cloud " + args[0] + ""},
	    {title: "a-cloud--in-the-sky", rowId: ".textpro a-cloud--in-the-sky " + args[0] + ""},
	    {title: "Write-in-Sand-Summer-Beach", rowId: ".textpro Write-in-Sand-Summer-Beach " + args[0] + ""},
	    {title: "Sand-Writing", rowId: ".textpro Sand-Writing " + args[0] + ""},
	    {title: "Sand-engraved-3d", rowId: ".textpro Sand-engraved-3d " + args[0] + ""},
	    {title: "a-summery-sand-writing", rowId: ".textpro a-summery-sand-writing " + args[0] + ""},
	    {title: "Foil-Balloon--For-Birthday", rowId: ".textpro Foil-Balloon--For-Birthday " + args[0] + ""},
	    {title: "3d-glue--with-realistic-style", rowId: ".textpro 3d-glue--with-realistic-style " + args[0] + ""},
	    {title: "space-3D", rowId: ".textpro space-3D " + args[0] + ""},
	    {title: "Metal-Dark-Gold", rowId: ".textpro Metal-Dark-Gold " + args[0] + ""},
	    {title: "Glitch--Style-Tik-Tok", rowId: ".textpro Glitch--Style-Tik-Tok " + args[0] + ""},
            {title: "a-Stone", rowId: ".textpro a-Stone " + args[0] + ""},
	    {title: "Neon-Light--With-Galaxy-Style", rowId: ".textpro Neon-Light--With-Galaxy-Style " + args[0] + ""},
	    {title: "1917-Style", rowId: ".textpro 1917-Style " + args[0] + ""},
	    {title: "80's-Retro-Neon", rowId: ".textpro 80's-Retro-Neon " + args[0] + ""},
	    {title: "Minion--3D", rowId: ".textpro Minion--3D " + args[0] + ""},
	    {title: "Pornhub-Style-Logo", rowId: ".textpro Pornhub-Style-Logo " + args[0] + ""},
	    {title: "Double-Exposure--Black-&-White", rowId: ".textpro Double-Exposure--Black-&-White " + args[0] + ""},
	    {title: "Holographic-3D", rowId: ".textpro Holographic-3D " + args[0] + ""},
	    {title: "3D-Avengers-logo", rowId: ".textpro 3D-Avengers-logo " + args[0] + ""},
	    {title: "Metal-Purple-Dual-Effect", rowId: ".textpro Metal-Purple-Dual-Effect " + args[0] + ""},
	    {title: "logo-style-Marvel-studios-Ver:-metal", rowId: ".textpro logo-style-Marvel-studios-Ver:-metal " + args[0] + ""},
	    {title: "logo-style-Marvel-studios", rowId: ".textpro logo-style-Marvel-studios " + args[0] + ""},
	    {title: "Deluxe-Silver", rowId: ".textpro Deluxe-Silver " + args[0] + ""},
	    {title: "Color-Full-Luxury-Metal", rowId: ".textpro Color-Full-Luxury-Metal " + args[0] + ""},
	    {title: "Glossy-Blue-Metal", rowId: ".textpro Glossy-Blue-Metal " + args[0] + ""},
	    {title: "Deluxe-Gold", rowId: ".textpro Deluxe-Gold " + args[0] + ""},
	    {title: "Glossy-Carbon", rowId: ".textpro Glossy-Carbon " + args[0] + ""},
	    {title: "Fabric", rowId: ".textpro Fabric " + args[0] + ""},
	    {title: "Neon", rowId: ".textpro Neon " + args[0] + ""},
	    {title: "New-Year-Cards-3D-By-Name", rowId: ".textpro New-Year-Cards-3D-By-Name " + args[0] + ""},
	    {title: "Happ-new-year-card-firework-gif", rowId: ".textpro Happ-new-year-card-firework-gif " + args[0] + ""},
	    {title: "Fullcolor-Balloon", rowId: ".textpro Fullcolor-Balloon " + args[0] + ""},
	    {title: "Text-Logo-3D-Metal", rowId: ".textpro Text-Logo-3D-Metal " + args[0] + ""},
	    {title: "avatar-gold", rowId: ".textpro avatar-gold " + args[0] + ""},
	    {title: "Text-Logo-3D-Metal-Silver", rowId: ".textpro Text-Logo-3D-Metal-Silver " + args[0] + ""},
	    {title: "Text-Logo-3D-Metal-Rose-Gold", rowId: ".textpro Text-Logo-3D-Metal-Rose-Gold " + args[0] + ""},
	    {title: "Text-Logo-3D-Metal-Gold", rowId: ".textpro Text-Logo-3D-Metal-Gold " + args[0] + ""},
	    {title: "Text-Logo-3D-Metal-Galaxy", rowId: ".textpro Text-Logo-3D-Metal-Galaxy " + args[0] + ""},
	    {title: "Xmas-Cards-3D", rowId: ".textpro Xmas-Cards-3D " + args[0] + ""},
	    {title: "Blood-Text-On-The-Frosted-Glass", rowId: ".textpro Blood-Text-On-The-Frosted-Glass " + args[0] + ""},
	    {title: "Halloween-Fire", rowId: ".textpro Halloween-Fire " + args[0] + ""},
	    {title: "Metal-Dark-Gold", rowId: ".textpro Metal-Dark-Gold " + args[0] + ""},
	    {title: "Lion-Logo-Mascot", rowId: ".textpro Lion-Logo-Mascot " + args[0] + ""},
	    {title: "Wolf-Logo-Black-&-White", rowId: ".textpro Wolf-Logo-Black-&-White " + args[0] + ""},
	    {title: "Wolf-Logo-Galaxy", rowId: ".textpro Wolf-Logo-Galaxy " + args[0] + ""},
	    {title: "Ninja-Logo", rowId: ".textpro Ninja-Logo " + args[0] + ""},
	    {title: "Logo-Joker", rowId: ".textpro Logo-Joker " + args[0] + ""},
	    {title: "Wicker", rowId: ".textpro Wicker " + args[0] + ""},
	    {title: "Natural-Leaves", rowId: ".textpro Natural-Leaves " + args[0] + ""},
	    {title: "Firework-Sparkle", rowId: ".textpro Firework-Sparkle " + args[0] + ""},
	    {title: "Skeleton", rowId: ".textpro Skeleton " + args[0] + ""},
	    {title: "Red-Foil-Balloon", rowId: ".textpro Red-Foil-Balloon " + args[0] + ""},
	    {title: "Purple-Foil-Balloon", rowId: ".textpro Purple-Foil-Balloon " + args[0] + ""},
	    {title: "Pink-Foil-Balloon", rowId: ".textpro Pink-Foil-Balloon " + args[0] + ""},
	    {title: "Cyan-Foil-Balloon", rowId: ".textpro Cyan-Foil-Balloon " + args[0] + ""},
	    {title: "Blue-Foil-Balloon", rowId: ".textpro Blue-Foil-Balloon " + args[0] + ""},
	    {title: "Gold-Foil-Balloon", rowId: ".textpro Gold-Foil-Balloon " + args[0] + ""},
	    {title: "Steel", rowId: ".textpro Steel " + args[0] + ""},
	    {title: "Ultra-Gloss", rowId: ".textpro Ultra-Gloss " + args[0] + ""},
	    {title: "Denim", rowId: ".textpro Denim " + args[0] + ""},
	    {title: "Decorate-Green", rowId: ".textpro Decorate-Green " + args[0] + ""},
	    {title: "Decorate-Purple", rowId: ".textpro Decorate-Purple " + args[0] + ""},
	    {title: "Peridot-Stone", rowId: ".textpro Peridot-Stone " + args[0] + ""},
	    {title: "Rock", rowId: ".textpro Rock " + args[0] + ""},
	    {title: "Lava", rowId: ".textpro Lava " + args[0] + ""},
	    {title: "Yellow-Glass", rowId: ".textpro Yellow-Glass " + args[0] + ""},
	    {title: "Purple-Glass", rowId: ".textpro Purple-Glass " + args[0] + ""},
	    {title: "Orange-Glass", rowId: ".textpro Orange-Glass " + args[0] + ""},
	    {title: "Green-Glass", rowId: ".textpro Green-Glass " + args[0] + ""},
	    {title: "Cyan-Glass", rowId: ".textpro Cyan-Glass " + args[0] + ""},
	    {title: "Blue-Glass", rowId: ".textpro Blue-Glass " + args[0] + ""},
	    {title: "Red-Glass", rowId: ".textpro Red-Glass " + args[0] + ""},
	    {title: "Purple-Shiny-Glass", rowId: ".textpro Purple-Shiny-Glass " + args[0] + ""},
	    {title: "Captain-America", rowId: ".textpro Captain-America " + args[0] + ""},
	    {title: "Robot-R2-D2", rowId: ".textpro Robot-R2-D2 " + args[0] + ""},
	    {title: "Rainbow-Equalizer", rowId: ".textpro Rainbow-Equalizer " + args[0] + ""},
	    {title: "Toxic", rowId: ".textpro Toxic " + args[0] + ""},
	    {title: "Pink-Sparkling-Jewelry", rowId: ".textpro Pink-Sparkling-Jewelry " + args[0] + ""},
	    {title: "Blue-Sparkling-Jewelry", rowId: ".textpro Blue-Sparkling-Jewelry " + args[0] + ""},
	    {title: "Green-Sparkling-Jewelry", rowId: ".textpro Green-Sparkling-Jewelry " + args[0] + ""},
	    {title: "Purple-Sparkling-Jewelry", rowId: ".textpro Purple-Sparkling-Jewelry " + args[0] + ""},
	    {title: "Gold-Sparkling-Jewelry", rowId: ".textpro Gold-Sparkling-Jewelry " + args[0] + ""},
	    {title: "Red-Sparkling-Jewelry", rowId: ".textpro Red-Sparkling-Jewelry " + args[0] + ""},
	    {title: "Cyan-Sparkling-Jewelry", rowId: ".textpro Cyan-Sparkling-Jewelry " + args[0] + ""},
	    {title: "Purple-Glass", rowId: ".textpro Purple-Glass " + args[0] + ""},
	    {title: "Decorative-Glass", rowId: ".textpro Decorative-Glass " + args[0] + ""},
	    {title: "Chocolate-Cake", rowId: ".textpro Chocolate-Cake " + args[0] + ""},
	    {title: "Strawberry", rowId: ".textpro Strawberry " + args[0] + ""},
	    {title: "Koi-Fish", rowId: ".textpro Koi-Fish " + args[0] + ""},
	    {title: "Bread", rowId: ".textpro Bread " + args[0] + ""},
	    {title: "Matrix-Style", rowId: ".textpro Matrix-Style " + args[0] + ""},
	    {title: "Horror-Blood", rowId: ".textpro Horror-Blood " + args[0] + ""},
	    {title: "Neon-Light", rowId: ".textpro Neon-Light " + args[0] + ""},
	    {title: "Thunder", rowId: ".textpro Thunder " + args[0] + ""},
	    {title: "3D-Box", rowId: ".textpro 3D-Box " + args[0] + ""},
	    {title: "Neon", rowId: ".textpro Neon " + args[0] + ""},
	    {title: "Road-Warning", rowId: ".textpro Road-Warning " + args[0] + ""},
	    {title: "3D-Steel", rowId: ".textpro 3D-Steel " + args[0] + ""},
	    {title: "Bokeh", rowId: ".textpro Bokeh " + args[0] + ""},
	    {title: "Green-Neon", rowId: ".textpro Green-Neon " + args[0] + ""},
	    {title: "Free-Advanced-Glow", rowId: ".textpro Free-Advanced-Glow " + args[0] + ""},
	    {title: "Dropwater", rowId: ".textpro Dropwater " + args[0] + ""},
	    {title: "Break-Wall", rowId: ".textpro Break-Wall " + args[0] + ""},
	    {title: "Chrismast-Gift", rowId: ".textpro Chrismast-Gift " + args[0] + ""},
	    {title: "Honey", rowId: ".textpro Honey " + args[0] + ""},
	    {title: "Plastic-Bag-Drug", rowId: ".textpro Plastic-Bag-Drug " + args[0] + ""},
	    {title: "Horror-Gift", rowId: ".textpro Horror-Gift " + args[0] + ""},
	    {title: "Marble-Slabs", rowId: ".textpro Marble-Slabs " + args[0] + ""},
	    {title: "Marble", rowId: ".textpro Marble " + args[0] + ""},
	    {title: "Ice-Cold", rowId: ".textpro Ice-Cold " + args[0] + ""},
	    {title: "Fruit-Juice", rowId: ".textpro Fruit-Juice " + args[0] + ""},
	    {title: "Rusty-Metal", rowId: ".textpro Rusty-Metal " + args[0] + ""},
	    {title: "Abstra-Gold", rowId: ".textpro Abstra-Gold " + args[0] + ""},
	    {title: "Biscuit", rowId: ".textpro Biscuit " + args[0] + ""},
	    {title: "Bagel", rowId: ".textpro Bagel " + args[0] + ""},
	    {title: "Wood", rowId: ".textpro Wood " + args[0] + ""},
	    {title: "SCI---Fi", rowId: ".textpro SCI---Fi " + args[0] + ""},
	    {title: "Metal-Rainbow", rowId: ".textpro Metal-Rainbow " + args[0] + ""},
	    {title: "Purple-Gem", rowId: ".textpro Purple-Gem " + args[0] + ""},
	    {title: "Shiny-Metal", rowId: ".textpro Shiny-Metal " + args[0] + ""},
	    {title: "Yellow-Jewelry", rowId: ".textpro Yellow-Jewelry " + args[0] + ""},
	    {title: "Silver-Jewelry", rowId: ".textpro Silver-Jewelry " + args[0] + ""},
	    {title: "Red-Jewelry", rowId: ".textpro Red-Jewelry " + args[0] + ""},
	    {title: "Purple-Jewelry", rowId: ".textpro Purple-Jewelry " + args[0] + ""},
	    {title: "Orange-Jewelry", rowId: ".textpro Orange-Jewelry " + args[0] + ""},
	    {title: "Green-Jewelry", rowId: ".textpro Green-Jewelry " + args[0] + ""},
	    {title: "Cyan-Jewelry", rowId: ".textpro Cyan-Jewelry " + args[0] + ""},
	    {title: "Blue-Jewelry", rowId: ".textpro Blue-Jewelry " + args[0] + ""},
	    {title: "Hot-Metal", rowId: ".textpro Hot-Metal " + args[0] + ""},
	    {title: "Hexa-Golden", rowId: ".textpro Hexa-Golden " + args[0] + ""},
	    {title: "Blue-Glitter", rowId: ".textpro Blue-Glitter " + args[0] + ""},
	    {title: "Purple-Glitter", rowId: ".textpro Purple-Glitter " + args[0] + ""},
	    {title: "Pink-Glitter", rowId: ".textpro Pink-Glitter " + args[0] + ""},
	    {title: "Green-Glitter", rowId: ".textpro Green-Glitter " + args[0] + ""},
	    {title: "Silver-Glitter", rowId: ".textpro Silver-Glitter " + args[0] + ""},
	    {title: "Gold-Glitter", rowId: ".textpro Gold-Glitter " + args[0] + ""},
	    {title: "Bronze-Glitter", rowId: ".textpro Bronze-Glitter " + args[0] + ""},
	    {title: "Eroded-Metal", rowId: ".textpro Eroded-Metal " + args[0] + ""},
	    {title: "Carbon", rowId: ".textpro Carbon " + args[0] + ""},
	    {title: "Pink-Candy", rowId: ".textpro Pink-Candy " + args[0] + ""},
	    {title: "Blue-Metal", rowId: ".textpro Blue-Metal " + args[0] + ""},
	    {title: "Blue-Gem", rowId: ".textpro Blue-Gem " + args[0] + ""},
	    {title: "Black-Metal", rowId: ".textpro Black-Metal " + args[0] + ""},
	    {title: "3D-Glowing-Metal", rowId: ".textpro 3D-Glowing-Metal " + args[0] + ""},
	    {title: "3D-Chrome", rowId: ".textpro 3D-Chrome " + args[0] + ""},
        ]
    },
]

const listMessage = {
  text: caption,
  footer: null,
  title: title,
  buttonText: "Selecciona",
  sections
}

if (!args[0]) return m.reply('Falta el texto ejemplo: .logo Gata Bot')
if (!args[1]) return conn.sendMessage(m.chat, listMessage)

//TINY
if (args[1] == "tinyurl") {
	let res = await fetch(`https://hardianto.xyz/api/short/tinyurl?url=${args[0]}&apikey=hardianto`)
    let json = await res.json()
    let { result } = await json
m.reply('_*En proceso...*_')
conn.reply(m.chat, `💌 *Link:* ${result}`,m)
}
//--------------

//LINKPOI
if (args[1] == "linkpoi") {
	let poi = await fetch(`https://linkpoi.ga/api.php?url=${args[0]}`)
	let jpoi = await poi.json()
	let { shorturl } = jpoi
	m.reply('_*En proceso...*_')
conn.reply(m.chat, `💌 *Link:* ${shorturl.replace('\/','/')}`,m)
}
//------------
if (args[1] == "bitly") {
	let bit = await fetch(`https://api.xteam.xyz/shorturl/bitly?url=${args[0]}&APIKEY=YOURAPIKEY`)
	let bitly = await bit.json()
	let { result } = bitly
	let { link } = result
	m.reply('_*En proceso...*_')
conn.reply(m.chat, `💌 *Link:* ${link}`,m)
}
}
handler.help = ['textpro']
handler.tags = ['internet']
handler.command = /^(logo)$/i

export default handler
