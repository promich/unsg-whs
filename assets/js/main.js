var seconds = 5;
var doPlay = true;
var rotator = document.getElementById('rotator')
  , α = 0
  , π = Math.PI
  , t = (seconds/360 * 1000);

(function draw() {
  α++;
  α %= 360;
  var r = ( α * π / 180 )
    , x = Math.sin( r ) * 200
    , y = Math.cos( r ) * - 200
    , mid = ( α > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -200 A 200 200 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';
  //[x,y].forEach(function( d ){
  //  d = Math.round( d * 1e3 ) / 1e3;
  //});
 
  rotator.setAttribute( 'd', anim );
  
  if(doPlay){
    setTimeout(draw, t); // Redraw
  }
})();

		// Create the loader and queue our images. Images will not 
		// begin downloading until we tell the loader to start. 
		var loader = new PxLoader(),
		Img_01 = loader.addImage('assets/img/rotator_grey.svg'),
		Img_03 = loader.addImage('assets/img/whs_logo_dark.svg'),
		Img_04 = loader.addImage('assets/img/icon-fb.svg'),
		Img_05 = loader.addImage('assets/img/icon-twitter.svg'),
		Img_06 = loader.addImage('assets/img/icon-info.svg'),
		Img_07 = loader.addImage('assets/img/logo_begin.svg'),
		Img_08 = loader.addImage('assets/img/back_01.jpg'),
		Img_09 = loader.addImage('assets/img/back_03.jpg'),
		Img_10 = loader.addImage('assets/img/back_03b.jpg'),
		Img_11 = loader.addImage('assets/img/back_04.jpg'),
		Img_12 = loader.addImage('assets/img/back_11.jpg'),
		Img_13 = loader.addImage('assets/img/back_12.jpg'),
		Img_14 = loader.addImage('assets/img/back_cr1.png'),
		Img_15 = loader.addImage('assets/img/back_cr2.png'),
		Img_16 = loader.addImage('assets/img/back_cr3.png'),
		Img_17 = loader.addImage('assets/img/back_cr4.png'),
		Img_18 = loader.addImage('assets/img/back_cr5.png'),
		Img_19 = loader.addImage('assets/img/logo_end.svg')

		
		// callback that will be run once images are ready 
		loader.addCompletionListener(function() { 
		
		
		function explode(){

			$('.blocker').addClass('loaded');
			$("#rotator").fadeOut("slow", function(){$(this).remove();});
			
			
			}
		setTimeout(explode, 2500);
		function backer(){
			$('.blocker').addClass('senditback');
			}
		setTimeout(backer, 5000);
		}); 
 
		// begin downloading images 
		loader.start(); 


$(document).ready(function() {
  
  var factor = 1;
  var windowHeight = $(window).height();  



var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    
    reverse: true
  }
});



// Timeline variables setup
			var $slide2 = $("#second");
			var $count1 = $slide2.find("span.count1");
			var manCounter1 = {
				man: 0
			}
			var $count2 = $slide2.find("span.count2");
			var manCounter2 = {
				man: 0
			}
			var $count3 = $slide2.find("span.count3");
			var manCounter3 = {
				man: 0
			}
			var $count4 = $slide2.find("span.count4");
			var manCounter4 = {
				man: 0
			}
// Timeline	
		
			var s2t = new TimelineMax();
			s2t.from( $slide2.find(".para2a"), 2.5, {autoAlpha:0} );
			s2t.from( $slide2.find(".icon1"), 1, {autoAlpha:0}, "+=2" );
			s2t.from( $slide2.find(".item1"), 1, {y: 100,autoAlpha:0} );
			var $count1 = $slide2.find("span.count1");
			s2t.call(function(){
				s2t.set(manCounter1, {man:0});
				$count1.text("0");
			});
			s2t.to( manCounter1, 1, {man:125, onUpdate: function(){
				$count1.text( parseInt(manCounter1.man) );
			}, onComplete: function(){
				$count1.text( "125" );
			}}, "manAnim1" );

			s2t.from( $slide2.find(".icon2"), 1, {autoAlpha:0}, "+=2" );
			s2t.from( $slide2.find(".item2"), 1, {y: 100,autoAlpha:0} );
			var $count2 = $slide2.find("span.count2");
			s2t.call(function(){
				s2t.set(manCounter2, {man:0});
				$count2.text("0");
			});
			s2t.to( manCounter2, 1, {man:60, onUpdate: function(){
				$count2.text( parseInt(manCounter2.man) );
			}, onComplete: function(){
				$count2.text( "60" );
			}}, "manAnim2" );

			s2t.from( $slide2.find(".icon3"), 1, {autoAlpha:0}, "+=2" );
			s2t.from( $slide2.find(".item3"), 1, {y: 100,autoAlpha:0} );
			var $count3 = $slide2.find("span.count3");
			s2t.call(function(){
				s2t.set(manCounter3, {man:0});
				$count3.text("0");
			});
			s2t.to( manCounter3, 1, {man:37, onUpdate: function(){
				$count3.text( parseInt(manCounter3.man) );
			}, onComplete: function(){
				$count3.text( "37" );
			}}, "manAnim3" );

			s2t.from( $slide2.find(".icon4"), 1, {autoAlpha:0}, "+=2" );
			s2t.from( $slide2.find(".item4"), 1, {y: 100,autoAlpha:0} );
			var $count4 = $slide2.find("span.count4");
			s2t.call(function(){
				s2t.set(manCounter4, {man:0});
				$count4.text("0");
			});
			s2t.to( manCounter4, 1, {man:20, onUpdate: function(){
				$count4.text( parseInt(manCounter4.man) );
			}, onComplete: function(){
				$count4.text( "20" );
			}}, "manAnim4" );
			
			s2t.timeScale(3) 

 
// Scene
var scene2a = new ScrollMagic.Scene({
	triggerElement: "#second",
    triggerHook: 'onLeave',  
    offset: -200
	}).setTween(s2t).addTo(controller);


// Timeline variables setup
var $slide3 = $("#third");
// Timeline	
			var s3t = new TimelineMax();
			s3t.from( $slide3.find(".para3a"), 2.5, {autoAlpha:0}, "+=2" );
			s3t.from( $slide3.find(".wrap-inner"), 5, {autoAlpha:0}, "+=8" );
			s3t.from( $slide3.find(".para3b"), 2.5, {autoAlpha:0} );
			s3t.from( $slide3.find(".para3c"), 2.5, {autoAlpha:0}, "+=1" );
			s3t.timeScale(3) 

 var scene3a = new ScrollMagic.Scene({
    triggerElement: "#third", 
    triggerHook: 'onLeave', 
    offset: -200
  }).setTween(s3t).addTo(controller);

 var scene3b = new ScrollMagic.Scene({
    triggerElement: "#third", 
    triggerHook: 'onLeave',  
    duration: '15%',
    offset: 0
  }).setPin("#third .text3", {pushFollowers: false}).addTo(controller);


var $slide4 = $("#fourth");
// Timeline	
			var s4t = new TimelineMax();
			s4t.from( $slide4.find(".para4a"), 2.5, {autoAlpha:0}, "+=2" );
			s4t.from( $slide4.find(".para4b"), 2.5, {autoAlpha:0}, "+=4" );
			s4t.from( $slide4.find(".para4c"), 2.5, {autoAlpha:0}, "+=2" );
			s4t.timeScale(3) 

 var scene4a = new ScrollMagic.Scene({
    triggerElement: "#fourth", 
    triggerHook: 'onLeave', 
    offset: -200
  }).setTween(s4t).addTo(controller);

 var scene4b = new ScrollMagic.Scene({
    triggerElement: "#fourth",
    triggerHook: 'onLeave',  
    duration: '15%',
    offset: 0
  }).setPin("#fourth .text4", {pushFollowers: false}).addTo(controller);


// Timeline variables setup
			var $slide5 = $("#fifth");
// Timeline	
			var s5t = new TimelineMax();
			s5t.from( $slide5.find(".para5a"), 2.5, {autoAlpha:0}, "+=1" );
			s5t.from( $slide5.find(".area1 img"), 1, {y: 100,autoAlpha:0}, "+=1.5" );
			s5t.from( $slide5.find(".area2 img"), 1, {y: 100,autoAlpha:0}, "+=1.5" );
			s5t.from( $slide5.find(".area3 img"), 1, {y: 100,autoAlpha:0}, "+=1.5" );
			s5t.from( $slide5.find(".area4 img"), 1, {y: 100,autoAlpha:0}, "+=1.5" );
			s5t.from( $slide5.find(".area5 img"), 1, {y: 100,autoAlpha:0}, "+=1.5" );			
			s5t.timeScale(3) 


 var scene5a = new ScrollMagic.Scene({
    triggerElement: "#fifth", 
    triggerHook: 'onLeave',  
    duration: '25%',
    offset: 0
  }).setPin("#fifth .text5", {pushFollowers: false}).addTo(controller);

 var scene5b = new ScrollMagic.Scene({
    triggerElement: "#fifth", 
    triggerHook: 0, 
    offset: -200
  }).setTween(s5t).addTo(controller);


 var scene6a = new ScrollMagic.Scene({
    triggerElement: "#sixth", 
    triggerHook: 'onLeave',  
    duration: '15%',
    offset: 0
  }).setPin("#sixth .text6", {pushFollowers: false}).addTo(controller);


 var scene7a = new ScrollMagic.Scene({
    triggerElement: "#seventh", 
    triggerHook: 'onLeave',  
    duration: '15%',
    offset: 0
  }).setPin("#seventh .text7", {pushFollowers: false}).addTo(controller);
  
 var scene8a = new ScrollMagic.Scene({
    triggerElement: "#eighth", 
    triggerHook: 'onLeave',  
    duration: '15%',
    offset: 0
  }).setPin("#eighth .text8", {pushFollowers: false}).addTo(controller);

 var scene9a = new ScrollMagic.Scene({
    triggerElement: "#ninth", 
    triggerHook: 'onLeave',  
    duration: '15%',
    offset: 0
  }).setPin("#ninth .text9", {pushFollowers: false}).addTo(controller);

 var scene10a = new ScrollMagic.Scene({
    triggerElement: "#tenth", 
    triggerHook: 'onLeave',  
    duration: '15%',
    offset: 0
  }).setPin("#tenth .text10", {pushFollowers: false}).addTo(controller);


// Timeline variables setup
			var $slide11 = $("#eleventh");
// Timeline	
			var s11t = new TimelineMax();
			s11t.from( $slide11.find(".para11a"), 2, {autoAlpha:0});
			s11t.from( $slide11.find(".para11b"), 2, {autoAlpha:0}, "+=1" );
			s11t.from( $slide11.find(".para11c"), 2, {autoAlpha:0}, "+=3" );
		
			s11t.timeScale(3) 


 var scene11a = new ScrollMagic.Scene({
    triggerElement: "#eleventh", 
    triggerHook: 'onLeave',  
    duration: '15%',
    offset: 0
  }).setPin("#eleventh .text11", {pushFollowers: false}).addTo(controller);

 var scene11b = new ScrollMagic.Scene({
    triggerElement: "#eleventh", 
    triggerHook: 0, 
    offset: -200
  }).setTween(s11t).addTo(controller);


// Timeline variables setup
			var $slide12 = $("#twelfth");
// Timeline	
			var s12t = new TimelineMax();
			s12t.from( $slide12.find(".para12a"), 2, {autoAlpha:0});
			s12t.from( $slide12.find(".para12b"), 2.5, {autoAlpha:0}, "+=7" );
			s12t.from( $slide12.find(".para12c"), 2.5, {autoAlpha:0}, "+=3" );
			s12t.timeScale(3) 


 var scene12a = new ScrollMagic.Scene({
    triggerElement: "#twelfth", 
    triggerHook: 'onLeave',  
    duration: '10%',
    offset: 0
  }).setPin("#twelfth .text12", {pushFollowers: false}).addTo(controller);

 var scene12b = new ScrollMagic.Scene({
    triggerElement: "#twelfth", 
    triggerHook: 0, 
    offset: -200
  }).setTween(s12t).addTo(controller);


  var s13t = new TimelineMax();

 var scene13a = new ScrollMagic.Scene({
    triggerElement: "#thirteenth", 
    triggerHook: 'onEnter',  
    offset: 0
  }).setTween(s13t).addTo(controller);


  var tween13 = TweenMax.to("#thirteenth .text13", 1, {opacity: 1, ease: Linear.easeNone});

 var scene13b = new ScrollMagic.Scene({
    triggerElement: "#thirteenth", 
    triggerHook: 'onEnter',  
    offset: 0
  }).setTween(tween13).addTo(controller);



var scene1 = new ScrollMagic.Scene({ triggerElement: '#first', duration: '100%' })
								.setClassToggle('#intro-anchor', 'active')
								.addTo(controller);
var scene2 = new ScrollMagic.Scene({ triggerElement: '#second', duration: '100%' })
								.setClassToggle('#anchor2', 'active')
								.addTo(controller);
var scene3 = new ScrollMagic.Scene({ triggerElement: '#third', duration: '100%' })
								.setClassToggle('#anchor3', 'active')
								.addTo(controller);
var scene4 = new ScrollMagic.Scene({ triggerElement: '#fourth', duration: '100%' })
								.setClassToggle('#anchor4', 'active')
								.addTo(controller);								
var scene5 = new ScrollMagic.Scene({ triggerElement: '#fifth', duration: '100%' })
								.setClassToggle('#anchor5', 'active')
								.addTo(controller);	
var scene6 = new ScrollMagic.Scene({ triggerElement: '#sixth', duration:'100%' })
								.setClassToggle('#anchor6', 'active')
								.addTo(controller);
var scene7 = new ScrollMagic.Scene({ triggerElement: '#seventh', duration: '100%' })
								.setClassToggle('#anchor7', 'active')
								.addTo(controller);
var scene8 = new ScrollMagic.Scene({ triggerElement: '#eighth', duration:'100%' })
								.setClassToggle('#anchor8', 'active')
								.addTo(controller);								
var scene9 = new ScrollMagic.Scene({ triggerElement: '#ninth', duration:'100%' })
								.setClassToggle('#anchor9', 'active')
								.addTo(controller);
var scene10 = new ScrollMagic.Scene({ triggerElement: '#tenth', duration:'100%' })
								.setClassToggle('#anchor10', 'active')
								.addTo(controller);	
var scene11 = new ScrollMagic.Scene({ triggerElement: '#eleventh', duration:'100%' })
								.setClassToggle('#anchor11', 'active')
								.addTo(controller);
var scene12 = new ScrollMagic.Scene({ triggerElement: '#twelfth', duration:'100%' })
								.setClassToggle('#anchor12', 'active')
								.addTo(controller);
var scene13 = new ScrollMagic.Scene({ triggerElement: '#thirteenth', duration:'100%' })
								.setClassToggle('#anchor13', 'active')
								.addTo(controller);								

// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target,
      autoKill : true // Allow scroll position to change outside itself
    },
    ease : Cubic.easeInOut
  });


});


//  Bind scroll to anchor links
$(document).on("click", ".dotstyle li a[href^=#]", function(e) {
  var id = $(this).attr("href");

  if($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

  }

});


//  Bind scroll to anchor links
$('a[href^=#].advancer').click(function(e) {
  var id = $(this).attr("href");

  if($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

  }

});


	$('.scene a').click(function(e) {
    var href = $(this).attr('href');
    if (href.substr(0, 1) == '#') {
      e.preventDefault();
      var cls = href.substr(1)
      $('.' + cls).addClass('in');      
    }
  });
  $('.close').click(function(e) {
    e.preventDefault();
    $(this).parents('.rule').removeClass('in');
  });
  $('.rule').click(function(e) {
    e.preventDefault();
    $(this).removeClass('in');
  });
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('.rule.in').removeClass('in');
    }
  });


});

$(function () {
    $('#chartthree').highcharts({

        chart: {
            type: 'column',
            backgroundColor:'rgba(255, 255, 255, 1)',
            spacingLeft: 0
        },

        title: {
            text: '<span style="color:rgb(0,41,90)">Funding</span> and <span style="color:rgb(70,180,240)">unmet needs</span>, UN-coordinated appeals, 2005-14',
            align : 'left',
            style: {
                color: 'rgb(0,41,90)',
                font: '20px "Lato", sans-serif'
           }
        },
        
		colors : ['rgb(70,180,240)','rgb(0,41,90)'],
		
        xAxis: {
            categories: ['2005', '2006', '2007', '2008', '2009','2010', '2011', '2012', '2013', '2014']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'US$ Billions'
            }
        },
        credits: {
          enabled : false
        },
        legend: {
          align : 'left'
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'UN appeal: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'Unmet needs',
            data: [2.0, 2.0, 1.6, 2.3, 2.8, 4.9, 3.6, 4.3, 4.7, 7.2]
        }, {
            name: 'Funding',
            data: [4.0, 3.9, 4.0, 5.7, 7.1, 8.0, 5.8, 6.2, 8.5, 10.8]
        }]
    });
});


