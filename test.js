var Bot = require( "./bot" )
var bot = Bot( {
   name : "Baka",
   info : "Baka( Cirno ) in GSK bot",
   none : "Baka",
   ques : [
     { keys : [ "hello", "你好", "hi", "hey" ],
      answers : [ "hey", "OvO" ] },
     { keys : [ "名字", "name", "名" ],
      answers : [ "咱叫琪露诺", "咱是幻想乡最强" ] },
     { keys : [ "baka", "笨", "大baka", "大笨蛋" ],
      answers : [ "咱不笨", "才不是", "不笨💢" ] }
   ]
} )
// 输出信息
console.log( bot.toString() )
// 浏览器使用console.log会自动调用toString方法
console.log( bot.ask( "hello，baka" ) )
// 询问