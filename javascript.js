var tooltip=function(){
 var id = 'tt';
 var top = 3;
 var left = 3;
 var maxw = 300;
 var speed = 10;
 var timer = 20;
 var endalpha = 95;
 var alpha = 0;
 var tt,t,c,b,h;
 var ie = document.all ? true : false;
 return{
  show:function(v,w){
   if(tt == null){
    tt = document.createElement('div');
    tt.setAttribute('id',id);
    t = document.createElement('div');
    t.setAttribute('id',id + 'top');
    c = document.createElement('div');
    c.setAttribute('id',id + 'cont');
    b = document.createElement('div');
    b.setAttribute('id',id + 'bot');
    tt.appendChild(t);
    tt.appendChild(c);
    tt.appendChild(b);
    document.body.appendChild(tt);
    tt.style.opacity = 0;
    tt.style.filter = 'alpha(opacity=0)';
    document.onmousemove = this.pos;
   }
   tt.style.display = 'block';
   c.innerHTML = v;
   tt.style.width = w ? w + 'px' : 'auto';
   if(!w && ie){
    t.style.display = 'none';
    b.style.display = 'none';
    tt.style.width = tt.offsetWidth;
    t.style.display = 'block';
    b.style.display = 'block';
   }
  if(tt.offsetWidth > maxw){tt.style.width = maxw + 'px'}
  h = parseInt(tt.offsetHeight) + top;
  clearInterval(tt.timer);
  tt.timer = setInterval(function(){tooltip.fade(1)},timer);
  },
  pos:function(e){
   var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
   var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
    tt.style.top = (u + top) + 'px';
    tt.style.left = (l + left) + 'px';

  },
  fade:function(d){
   var a = alpha;
   if((a != endalpha && d == 1) || (a != 0 && d == -1)){
    var i = speed;
   if(endalpha - a < speed && d == 1){
    i = endalpha - a;
   }else if(alpha < speed && d == -1){
     i = a;
   }
   alpha = a + (i * d);
   tt.style.opacity = alpha * .01;
   tt.style.filter = 'alpha(opacity=' + alpha + ')';
  }else{
    clearInterval(tt.timer);
     if(d == -1){tt.style.display = 'none'}
  }
 },
 hide:function(){
  clearInterval(tt.timer);
   tt.timer = setInterval(function(){tooltip.fade(-1)},timer);
  }
 };
}();


var allHTMLTags = new Array();

function getElementByClass(theClass, theColor) {
 var allHTMLTags=document.getElementsByTagName('*');
 for (i=0; i<allHTMLTags.length; i++) {
  if (allHTMLTags[i].className==theClass) {
   allHTMLTags[i].style.color=theColor;
  }
 }
}

function resetColor(theClass) {
 var allHTMLTags=document.getElementsByTagName('*');
 for (i=0; i<allHTMLTags.length; i++) {
  if (allHTMLTags[i].className==theClass) {
   allHTMLTags[i].style.color='black';
  }
 }
}


function calc1() {
var y = document.mainform.myaw.value;
var d = document.mainform.dpi.value;
var w = document.mainform.wsm.value;
var s = document.mainform.sens.value;
var final = (360/(y*d*w*s));
document.mainform.rsensin.value = final;
}

function calc2() {
var y = document.mainform.myaw.value;
var d = document.mainform.dpi.value;
var w = document.mainform.wsm.value;
var s = document.mainform.sens.value;
var final = (360/(y*d*w*s))*2.54;
document.mainform.rsenscm.value = final;
}

function calc3() {
var i = document.mainform.rsensin.value;
var g = document.mainform.igres.value;
var f = document.mainform.fov.value;
var y = (f*(Math.PI/180));
var z = Math.tan(y/2);
var final = (Math.PI*g)/(i*z);
document.mainform.mindpi.value = final;
}


function calc4() {
var m = document.mainform.myaw.value;
var g = document.mainform.igres.value;
var f = document.mainform.fov.value;
var y = (f*(Math.PI/180));
var z = Math.tan(y/2);
var final = (360*z)/(Math.PI*g*m);
document.mainform.maxsens.value = final;
}

function calc5() {
var m = document.mainform.myaw.value;
var o = document.mainform.dres.value;
var f = document.mainform.fov.value;
var y = (f*(Math.PI/180));
var z = Math.tan(y/2);
var final = (360*z)/(Math.PI*o*m);
document.mainform.onetoone.value = final;
}

function calc6() {
var m = document.mainform.myaw.value;
var d = document.mainform.dpi.value;
var w = document.mainform.wsm.value;
var a = document.mainform.accel.value;
var final = (((((d*w)/2.54)*((d*w)/2.54))*m*a)/1000);
document.mainform.realaccel.value = final;
}

function calc7() {
var g = document.mainform.igres.value;
var d = document.mainform.dpi.value;
var f = document.mainform.fps.value;
var w = document.mainform.wsm.value;
var final = (g*f)/(2*((d*w)/0.0254));
document.mainform.neg.value = final;
}
