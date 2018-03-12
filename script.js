$(document).ready(function () {

  //Set up controller
  var controller = new ScrollMagic.Controller()

  // New Scene Effect -- Pin Each Section when it hits top - onLeave
  // $("section").each(function() {
  //     new ScrollMagic.Scene({
  //       //element used to start animation
  //         triggerElement: this,
  //       //where on screen it should start - this will be the top
  //         triggerHook: 'onLeave'
  //     })
  //     //pin the item to the top when it hits
  //     .setPin(this)
  //     //indicators not necessary but helpful for qa happening
  //     .addIndicators({name:$(this).attr('id')})
  //     .addTo(controller);
  // });

    var one = new ScrollMagic.Scene({
      triggerElement: "#one",
      triggerHook: 'onLeave'
    })
      .setPin('#one')
      .addTo(controller)
      .addIndicators({name:'first elem'})

    var two = new ScrollMagic.Scene({
      triggerElement: "#two",
      triggerHook: 'onLeave',
      duration: '1px'
    })
      .setPin('#two')
      .setTween(TweenMax.to('#one', 1, {opacity: 0, display: 'none'}))
      .addTo(controller)
      .addIndicators({name:'second elem'})

    var three = new ScrollMagic.Scene({
      triggerElement: "#three",
      triggerHook: 'onLeave'
    })
      .setPin('#three')
      .addTo(controller)
      .addIndicators({name:'third elem'})

    var four = new ScrollMagic.Scene({
      triggerElement: "#four",
      triggerHook: 'onLeave',
      duration: '1px'
    })
      .setPin('#four')
      .setTween(TweenMax.to('#three', 0.01, {opacity: 0, display: 'none'}))
      .addTo(controller)
      .addIndicators({name:'four elem'})

      // var four = new ScrollMagic.Scene({
      //   triggerElement: "#five",
      //   triggerHook: 'onLeave'
      // })
      //   .setPin('#five')
      //   .addTo(controller)
      //   .addIndicators({name:'five element'})


  new ScrollMagic.Scene({
    triggerElement: '#two',
    triggerHook: 'onEnter',
    duration: '160%'
  })
  // .setTween('#two .inner', {y: '-30%', ease:Linear.easeNone})
  .addIndicators({name:'two para'})
  .setTween(TweenMax.to('#two .inner', 1, {y: '-80%', ease:Power0.easeNone}))
  .addTo(controller)

  // New Scene Effect -- Toggle Active Class on section #three when centered
  new ScrollMagic.Scene({
      //element used to start animation
    triggerElement: "#three",
      //where on screen it should start
    triggerHook: 'onCenter',
      //how long the class should be applied (can be time, height)
    duration: '150%'
    })
      //what element to add class to, and what class to add
    .setClassToggle('#three','active')
    .addTo(controller)

    var timeline = new TimelineMax();
    var tween1 = TweenMax.from('#four h1', 1,{ x: '-100%' , opacity: 0});
    var tween2 = TweenMax.from('#four p', 1,{ x: '100%' , opacity: 0});
      timeline
        .add(tween1)
        .add(tween2, 0);

    new ScrollMagic.Scene({
        //element used to start animation
      triggerElement: "#four",
        //where on screen it should start
      triggerHook: 'onEnter',
      reverse: true,
      duration: $('#four').height()
        //how long the class should be applied (can be time, height)
      // duration: $('#four').height()
      })
      .setTween(timeline)
      .addTo(controller)


      var five = new ScrollMagic.Scene({
        triggerElement: "#five",
        triggerHook: 'onLeave'
      })
        .setPin('#five')
        .addTo(controller)
        .addIndicators({name:'five elem'})

      var six = new ScrollMagic.Scene({
        triggerElement: "#six",
        triggerHook: 'onEnter'
      })
      //
    .setTween(TweenMax.fromTo('#six', 0.8,{x: '-100%', y:'-100%'}, {x: "0%", y: '0', ease: Linear.easeNone}))
      .setPin('#six')
        .addTo(controller)

})
