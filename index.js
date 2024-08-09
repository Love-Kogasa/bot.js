async function main( box, inp, sub ){
    var cirno = bot( await (await fetch( "./cirno.json" )).json() )
    box.innerHTML = "<msg>" + cirno.toString() + "</msg>"
    sub.onclick = function(){
        try {
            box.innerHTML += `<div align="right"><user>You : ${inp.value}</user></div>`
            box.innerHTML += `<msg>Cirno : ${cirno.ask( inp.value )}</msg>`
            inp.value = ""
        } catch( err ){
            box.innerHTML += `<msg style="background-color : red;">Error : ${err}</msg>`
        }
    }
}