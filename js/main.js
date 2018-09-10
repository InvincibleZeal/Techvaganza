$(function() {

  var card = $('.card');
  var transformY = $(window).height() > 550 ? $(window).height() : $(window).height()*3/2;

  tlevent = new TimelineLite();
  tlevent.defaultEase = Back.easeInOut.config(0.5);

  tlevent
      .set(card, {transformOrigin: `50% ${transformY}px`})
      // .fromTo(card[0], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)})
      .set(card[0], {autoAlpha: 0.5})
      .fromTo(card[0], 0.5, {rotation: 100, opacity: 0}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2)})
      .fromTo(card[1], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5), onComplete: slideNum, onCompleteParams: [0], onReverseComplete: slideNum, onReverseCompleteParams:[0]}, "-=0.5")
      .addLabel('NON TECHNICAL')
      .addPause()
      .fromTo(card[0], 0.5, {rotation: 0, opacity: 1}, {rotation: -50, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)})
      .fromTo(card[1], 0.5, {rotation: 50, opacity: 0.5}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2)}, "-=0.5")
      .fromTo(card[2], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5), onComplete: slideNum, onCompleteParams: [1], onReverseComplete: slideNum, onReverseCompleteParams:[0]}, "-=0.5")
      .addPause()
      .fromTo(card[0], 0.5, {rotation: -50, opacity: 0.5}, {rotation: -100, opacity: 0, ease: Back.easeInOut.config(0.5)})
      .fromTo(card[1], 0.5, {rotation: 0, opacity: 1}, {rotation: -50, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)}, "-=0.5")
      .fromTo(card[2], 0.5, {rotation: 50, opacity: 0.5}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2)}, "-=0.5")
      .fromTo(card[3], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5), onComplete: slideNum, onCompleteParams: [2], onReverseComplete: slideNum, onReverseCompleteParams:[1]}, "-=0.5")
      .addPause()
      .fromTo(card[1], 0.5, {rotation: -50, opacity: 0.5}, {rotation: -100, opacity: 0, ease: Back.easeInOut.config(0.5)})
      .fromTo(card[2], 0.5, {rotation: 0, opacity: 1}, {rotation: -50, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)}, "-=0.5")
      .fromTo(card[3], 0.5, {rotation: 50, opacity: 0.5}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2)}, "-=0.5")
      .fromTo(card[4], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5), onComplete: slideNum, onCompleteParams: [3], onReverseComplete: slideNum, onReverseCompleteParams:[2]}, "-=0.5")
      .addLabel('CODING')
      .addPause()
      .fromTo(card[2], 0.5, {rotation: -50, opacity: 0.5}, {rotation: -100, opacity: 0, ease: Back.easeInOut.config(0.5)})
      .fromTo(card[3], 0.5, {rotation: 0, opacity: 1}, {rotation: -50, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)}, "-=0.5")
      .fromTo(card[4], 0.5, {rotation: 50, opacity: 0.5}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2)}, "-=0.5")
      .fromTo(card[5], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5), onComplete: slideNum, onCompleteParams: [4], onReverseComplete: slideNum, onReverseCompleteParams:[3]}, "-=0.5")
      .addPause()
      .fromTo(card[3], 0.5, {rotation: -50, opacity: 0.5}, {rotation: -100, opacity: 0, ease: Back.easeInOut.config(0.5)})
      .fromTo(card[4], 0.5, {rotation: 0, opacity: 1}, {rotation: -50, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)}, "-=0.5")
      .fromTo(card[5], 0.5, {rotation: 50, opacity: 0.5}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2)}, "-=0.5")
      .fromTo(card[6], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5), onComplete: slideNum, onCompleteParams: [5], onReverseComplete: slideNum, onReverseCompleteParams:[4]}, "-=0.5")
      .addLabel('FUN')
      .addPause()
      .fromTo(card[4], 0.5, {rotation: -50, opacity: 0.5}, {rotation: -100, opacity: 0, ease: Back.easeInOut.config(0.5)})
      .fromTo(card[5], 0.5, {rotation: 0, opacity: 1}, {rotation: -50, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)}, "-=0.5")
      .fromTo(card[6], 0.5, {rotation: 50, opacity: 0.5}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2)}, "-=0.5")
      .fromTo(card[7], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5), onComplete: slideNum, onCompleteParams: [6], onReverseComplete: slideNum, onReverseCompleteParams:[5]}, "-=0.5")
      .addPause()
      .fromTo(card[5], 0.5, {rotation: -50, opacity: 0.5}, {rotation: -100, opacity: 0, ease: Back.easeInOut.config(0.5)})
      .fromTo(card[6], 0.5, {rotation: 0, opacity: 1}, {rotation: -50, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)}, "-=0.5")
      .fromTo(card[7], 0.5, {rotation: 50, opacity: 0.5}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2)}, "-=0.5")
      .fromTo(card[8], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5), onComplete: slideNum, onCompleteParams: [7], onReverseComplete: slideNum, onReverseCompleteParams:[6]}, "-=0.5")
      .addLabel('TECHNICAL')
      .addPause()
      .fromTo(card[6], 0.5, {rotation: -50, opacity: 0.5}, {rotation: -100, opacity: 0, ease: Back.easeInOut.config(0.5)})
      .fromTo(card[7], 0.5, {rotation: 0, opacity: 1}, {rotation: -50, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)}, "-=0.5")
      .fromTo(card[8], 0.5, {rotation: 50, opacity: 0.5}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2)}, "-=0.5")
      .fromTo(card[9], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5), onComplete: slideNum, onCompleteParams: [8], onReverseComplete: slideNum, onReverseCompleteParams:[7]}, "-=0.5")
      .addPause()
      .fromTo(card[7], 0.5, {rotation: -50, opacity: 0.5}, {rotation: -100, opacity: 0, ease: Back.easeInOut.config(0.5)})
      .fromTo(card[8], 0.5, {rotation: 0, opacity: 1}, {rotation: -50, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)}, "-=0.5")
      .fromTo(card[9], 0.5, {rotation: 50, opacity: 0.5}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2)}, "-=0.5")
      .fromTo(card[10], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5), onComplete: slideNum, onCompleteParams: [9], onReverseComplete: slideNum, onReverseCompleteParams:[8]}, "-=0.5")
      .addPause()
      .fromTo(card[8], 0.5, {rotation: -50, opacity: 0.5}, {rotation: -100, opacity: 0, ease: Back.easeInOut.config(0.5)})
      .fromTo(card[9], 0.5, {rotation: 0, opacity: 1}, {rotation: -50, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)}, "-=0.5")
      .fromTo(card[10], 0.5, {rotation: 50, opacity: 0.5}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2), onComplete: slideNum, onCompleteParams: [10], onReverseComplete: slideNum, onReverseCompleteParams: [9]}, "-=0.5")
      // .fromTo(card[11], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)}, "-=0.5")
      .addPause()
      // .fromTo(card[9], 0.5, {rotation: -50, opacity: 0.5}, {rotation: -100, opacity: 0, ease: Back.easeInOut.config(0.5)})
      // .fromTo(card[10], 0.5, {rotation: 0, opacity: 1}, {rotation: -50, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5), onComplete: slideNum, onCompleteParams: [11], onReverseComplete: slideNum, onReverseCompleteParams: [10]}, "-=0.5")
      // .fromTo(card[11], 0.5, {rotation: 50, opacity: 0.5}, {rotation: 0, opacity: 1, boxShadow: "none", ease: Back.easeInOut.config(1.2)}, "-=0.5")
      // .fromTo(card[12], 0.5, {rotation: 100, opacity: 0}, {rotation: 50, autoAlpha: 0.5, opacity: 0.5, boxShadow: "0 0 10px 10px rgba(255,255,255,1)", ease: Back.easeInOut.config(0.5)}, "-=0.5")
      ;

  // >>>>>>>>>>========== CONTROLLERS ==============<<<<<<<<<<<

  // >>>>>>>>>>======== MAIN CONTROLLER ============<<<<<<<<<<<
  var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

  $('body').bind(mousewheelevt, function(e){
    var evt = window.event || e //equalize event object
    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible
    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

    if(delta > 0)
        tlevent.reverse();//scroll up
    else
      tlevent.play(); //scroll down
  });

  // >>>>>>>>>>= SLIDING-NUM & NAV-BTN CONTROLLER =<<<<<<<<<<<

  $('.tagbtn').click(function(e) {
    tlevent.seek(`${this.innerText}`);
    resetActiveTags();
    console.log($(this).addClass('activetag'));
    $('.slideshow-numActive').css('transform', `translateX(${-35*(this.dataset.event-1)}px)`);
  });

  function slideNum(num) {
      resetActiveTags();
      if(num < 3)
        $('.tag_1 .tagbtn').addClass('activetag');
      else if(num < 5)
        $('.tag_2 .tagbtn').addClass('activetag');
      else if(num < 7)
        $('.tag_3 .tagbtn').addClass('activetag');
      else
        $('.tag_4 .tagbtn').addClass('activetag');

      $('.slideshow-numActive').css('transform', `translateX(${-35*num}px)`);
  }

  function resetActiveTags(){
    $('.tagbtn').removeClass('activetag');
  }

  // >>>>>>>>>>======== MAIN CONTROLLER ============<<<<<<<<<<<

  var mousewheel = $('#mousewheel')
		mouse = $('#mouse'),
		mouseLight = $('#mouse-light'),
		wheel =	$('#wheel')
		;

	tlmw = new TimelineMax({repeat: -1});

	tlmw
		.from(wheel, 0.8, { autoAlpha: 0, scale: 0, y: 15, transformOrigin: "center center", ease: Power4.easeOut})
		.fromTo([mouse, mouseLight], 0.8, {y: 15}, {y: -5, ease: Power4.easeOut}, "-=0.8")
		.to(wheel, 0.8, {y: 70, scale: 0, ease: Power1.easeOut})
		.fromTo(mouse, 0.8, {strokeDasharray: "135 0 135"}, {strokeDashoffset: 93, strokeDasharray: "50 350 50", ease: Power1.easeIn}, "-=0.8")
		.to([mouse, mouseLight], 0.8, {y: 15, ease: Power4.easeOut}, "-=0.8")
		;

});
