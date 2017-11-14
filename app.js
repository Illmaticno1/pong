//create function to move the players divs


$(document).ready( () => {

// global variables
  let pw, ph, px, py, tw, th, tx, ty;
  let paddleOne = $('#paddle_1');
  let paddleTwo = $('#paddle_2');
  let ball = $('#ball');

  let top = 6;
  let moveBall = true;

  let p = ball;
  let t = paddleOne;

  console.log(t.position().left);
  console.log(t.width());
  console.log(p.position().left + t.width());





  // move paddle_1 left
  let left_p1 = () => {
    if (parseInt(paddleOne.css('left')) > 0) {
      $('#paddle_1').animate(
        {left: '-=15'},
        {duration: 1});
      };
    };

  // move paddle_1 right
  let right_p1 = () => {
    if (parseInt(paddleOne.css('left')) < 310) {
      $('#paddle_1').animate(
        {left: '+=15'},
        {duration: 1});
      };
    };

  // move paddle_2 left
  let left_p2 = () => {
    if (parseInt(paddleTwo.css('left')) > 0) {
      $('#paddle_2').animate(
        {left: '-=15'},
        {duration: 1});
      };
    };

  // move paddle_2 right
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


    // game start function
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
      setInterval(play, 2000);
    };


    // ball movement functions
    let down = () => {
      // console.log(ball);
      ball.css('top', parseInt(ball.css('top')) + 40);
    }

    let up = () => {
      ball.css('top', parseInt(ball.css('top')) - top);
    }

    let detectCollisons = () => {
      // console.log(t.position().top);
      console.log(p.position().top);
      if((t.position().top < p.position().top)
       &&
       (t.position().left < p.position().left)
        &&
        (t.position().left + t.width() > p.position().left + p.width())){
        console.log('contact');

        up();
      }
    }
    // let changeDirection = () => {
    //   if (down === true) {
    //     up();
    //   } else if (up === true){
    //     down();
    //   }
    // }

    play();




});
