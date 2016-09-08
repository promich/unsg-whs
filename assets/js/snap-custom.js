$(document).ready(function(){

//animation theme2c
var viewport2c = Snap.select('#box-cloud');
 Snap.load('assets/img/icon_cloud.svg', function (box2c) {
viewport2c.append(box2c);

var info2c = Snap.select('#svg-cloud');
var arrow1 = info2c.select('#arrow');

var animating2c = true;

//animation arrow
function animOn2c(){
    if( animating2c ) {
      arrow1.stop().animate({
        transform: 't0,-40',  
      }, 500, mina.easeinout, animOut2c);
    };
}

function animOut2c() {
  arrow1.stop().animate({
        transform: 't0,0',
   }, 250, mina.easeinout, animOn2c);
};

var hoverover2c = function() {
    animating2c=true; animOn2c()
	};
var hoverout2c  = function() {
    animating2c=false
};
info2c.hover(hoverover2c, hoverout2c);
});

//animation theme2a
var viewport2a = Snap.select('#box-cloud2');
 Snap.load('assets/img/icon_cloud2.svg', function (box2a) {
viewport2a.append(box2a);

var info2a = Snap.select('#svg-cloud');
var arrow1 = info2a.select('#arrow');

var animating2a = true;

//animation arrow
function animOn2a(){
    if( animating2a ) {
      arrow1.stop().animate({
        transform: 't0,-40',  
      }, 500, mina.easeinout, animOut2a);
    };
}

function animOut2a() {
  arrow1.stop().animate({
        transform: 't0,0',
   }, 250, mina.easeinout, animOn2a);
};

var hoverover2a = function() {
    animating2a=true; animOn2a()
	};
var hoverout2a  = function() {
    animating2a=false
};
info2a.hover(hoverover2a, hoverout2a);
});



});