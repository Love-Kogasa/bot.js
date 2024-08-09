var bot = function( setting ){
  const { name, info, ques, none } = setting,
    like = ( str1, str2 ) => {
     let value = 0
     for( let char of str2.toLowerCase() ) value += !!( str1.toLowerCase().indexOf( char ) + 1 ) + 0
     return ( value / str2.length ) * 100
    }
  return {
    name : name,  info : info, ques : ques, none : none,
    toString : () => ( ( name || "bot" ) + " : " + ( info || "no description" ) ),
    ask : function( ques ){
      var anws = ""
      loop : for( let object of this.ques ){
        let { keys, answers } = object
        for( let question of keys ){
          if( like( question, ques ) >= ( question.length / ques.length ) * ( Math.floor( Math.random() * 20 + 60 ) ) ){
            anws += answers[ Math.floor( Math.random() * answers.length ) ] + " "
            continue loop
          }
        }
      }
      anws = anws.trim() || this.none
      return anws
    }
  }
}
typeof module === "object" && ( module.exports = bot )