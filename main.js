var sqr=document.querySelectorAll('.game div');
var inp=document.querySelector('input');
var windv=document.querySelector('.winner');
var first_click=true; //check if this is the first time click



function checking(ev) {
  var tmp=ev.target;
  if (tmp.className===""){
  	inp.value=Number((inp.value)-5);
  }else{
  	inp.value=Number(inp.value)+5;
  }
  shuffle();
  if (first_click){
  first_click=false;
  delay();
 }

}
function shuffle(){
	windv=document.querySelector('.winner');
	windv.classList.remove("winner");
	sqr= _.shuffle(sqr);
	sqr[0].classList.add("winner");
}
function delay(){
	shuffle();
	inp.value-=2;
	setTimeout(delay,1000);
}


for(var i=0;i<sqr.length;i++){
	sqr[i].addEventListener('click',checking);
	}

	
