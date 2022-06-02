let printdate=function(){
    let date =new Date()
    console.log('the current date'+date);
}
module.exports.printdate=printdate



let printmonth=function(){
    let date =new Date()
    let month =date.getMonth()
    console.log('the month is' + month)

}
module.exports.printmonth=printmonth

let getBatchInfo=function(){
    console.log("Radon,w3d3,the topic for module system")
}
module.exports.getBatchInfo=getBatchInfo