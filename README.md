# bot.js
A js chat bot module just 0.5k( Node/Browser ).  
Example:
```js
var b = bot({
  name : "bot name",
  info : "description",
  none : "return if return '' ",
  ques : [
    {
      keys : [ "keywords" ],
      answers : [ "answers" ]
    }
  ]
})
window.alert( b.toString() )
// bot name : description
window.alert( b.ask( "some word" ) )
```