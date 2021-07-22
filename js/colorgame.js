
var n=6;
var c=generaterandomcolor(n);
var pickcolor=pickedcolor();
var e=document.querySelector('span');
var b=document.querySelectorAll('.square');
var m=document.querySelector("#message");
var nxt=document.querySelector("#b1");
var easy=document.querySelector("#b2");
var hard=document.querySelector("#b3");
var h1=document.querySelector("h1");


easy.addEventListener("click",function(){
	easy.classList.add("buttoncolor");
	hard.classList.remove("buttoncolor");
	n=3;
    reset();
	easy.style.color="white";
	hard.style.color="black";
});
hard.addEventListener("click",function(){
	hard.classList.add("buttoncolor");
	easy.classList.remove("buttoncolor");
	n=6;
	reset();
	hard.style.color="white";
	easy.style.color="black";
});

nxt.addEventListener("click",function(){
	reset();
});

e.textContent=pickcolor;
for(var i=0;i<b.length;i++)
{	
	b[i].style.background=c[i];

	b[i].addEventListener("click",function(){
	
		
		if(this.style.background==pickcolor)
		{
			for(var i=0;i<b.length;i++)
			{
				b[i].style.background=pickcolor;
			}
			m.textContent="Correct !!";
			h1.style.background=pickcolor;
			b1.textContent="Play Again ?";
			b1.addEventListener("click",function(){
			b1.textContent="New Color";
			});
		}
		else{
			
			m.textContent="Try Again";
			this.style.background="black";
		}
	});	
}
function reset(){
	//generate random colors
	c=generaterandomcolor(n);
	//picks up a color from the selected colors
	pickcolor=pickedcolor();
	
	e.textContent=pickcolor;
	for(var i=0;i<b.length;i++)
	{	
	if(c[i])
	{
			b[i].style.display="block";
			b[i].style.background=c[i];
	}
	else
	{
		b[i].style.display="none";
	}
	}
	h1.style.background="rgb(110, 67, 211)";
	m.textContent=" ";

}


function generaterandomcolor(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr[i]=randomcolors();

	}
	return arr;
}
function randomcolors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
function pickedcolor()
{
	var rr=Math.floor(Math.random()*c.length);
	return c[rr];
}
