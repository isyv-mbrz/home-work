var btn=document.querySelector(".circle");
var w = window.innerWidth;
var h = window.innerHeight;
btn.addEventListener("click",function(){
 var rand=Math.floor(Math.random()*100);
    for (var i = 0; i < 1; i++) {
        var daireler=document.createElement("div");
        randTop=Math.floor(Math.random()*h)
        randLeft=Math.floor(Math.random()*w)
        daireler.className="daireler";
        daireler.style.top=randTop+"px";
        daireler.style.left=randLeft+"px";
        document.body.appendChild(daireler)
    }
})