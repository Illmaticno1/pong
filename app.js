//create function to move the players divs


$(document).ready( () => {

  let pw, ph, px, py, tw, th, tx, ty;
  let paddleOne = $('#paddle_1');
  let paddleTwo = $('#paddle_2');
  let ball = $('#ball');

  let top = 6;
  let moveBall = true;

  let p = ball;
  let t = paddleOne;


  //  global functions used for call backs
  let detectCollisons = () => {

      pw = p.offsetWidth;
      ph = p.offsetHeight;
      px = p.offsetLeft;
      py = p.offsetTop;
      tw = t.offsetWidth;
      th = t.offsetHeight;
      tx = t.offsetLeft;
      ty = t.offsetTop;

      if((px+pw) > tx && px < (tx+tw) && (py+ph) > ty && py < (ty+th)){
        console.log('collision detected');
      }
      window.requestAnimationFrame(detectCollisons);
  }



  let left_p1 = () => {
    if (parseInt(paddleOne.css('left')) > 0) {
      $('#paddle_1').animate(
      {left: '-=15'},
      {duration: 1});
    };
  };


  let right_p1 = () => {
    if (parseInt(paddleOne.css('left')) < 310) {
      $('#paddle_1').animate(
     {left: '+=15'},
     {duration: 1});
    };
  };


  let left_p2 = () => {
    if (parseInt(paddleTwo.css('left')) > 0) {
      $('#paddle_2').animate(
      {left: '-=15'},
      {duration: 1});
    };
  };


  let right_p2 = () => {
    if (parseInt(paddleTwo.css('left')) < 310) {
      $('#paddle_2').animate(
     {left: '+=15'},
     {duration: 1});
    };
  };

  let stop = () => {
    $(('#paddle').css('left') +=0);
  }





  // key up and key down function to move player divs
  $(document).keydown( (e) => {
    // console.log(e.which);
    switch (e.which) {
      case 37:
      left_p1();
      break;

      case 39:
      right_p1();

      break;

      case 65:
      left_p2();

      break;
      case 83:
      right_p2();

    break;
    default:
    break;
    }
    });



    let play = () => {

      if(detectCollisons(t, p))
      {
        up();
        console.log('yes');
      }
      if(moveBall === true)
      {
        down();
      }
      else
      {
        up();
      }
      setInterval(play), 1000;
    };



    let down = () => {
      // console.log(ball);
      ball.css('top', parseInt(ball.css('top')) + top);
    }
    let up = () => {
      ball.css('top', parseInt(ball.css('top')) - top);
    }
    play();




});
