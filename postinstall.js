
const printMessage = require('print-message');

printMessage([
    "Hello am Danford Kija David form Tanzania" +
    "Let build software together ,my contacts github:@Kijacode, whatsapp:+255620419226, email:kijadanford@gmail.com"
],
{
    border:true,
    color:'green',
    borderColor:'blue',
    borderSymbol:'|',
    sideSymbol:'|',
    leftTopSymbol:'L',
    leftBottomSymbol:'r',
    rightBottomSymbol:'',
    marginTop:3,
    marginBottom:3,
    paddingTop:2,
    paddingBottom:2,
    printFn:function(message){
        process.stdout.write(message);
    }
}


)