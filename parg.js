const pargs=document.querySelectorAll('.contentparg');
const input=document.querySelector('#num');


function showp(){
    
    var number=input.value;
    for(var i=0;i<pargs.length;i++){
        pargs[i].style.display="none";
    }
    for(var a=0;a<number;a++){
        pargs[a].style.display="block";
    }
    //console.log(number);
}
alert("number of pargraph between 1 to 10");