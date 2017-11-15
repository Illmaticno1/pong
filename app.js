

$(document).ready( () => {

  // global variables
  // let pw, ph, px, py, tw, th, tx, ty; unused variables
  let paddleOne = $('#paddle_1');
  let paddleTwo = $('#paddle_2');
  let ball = $('#ball');
  let downward = true;
  let top = 6;
  let container = $('#container');
  let player1 = 0;
  let player2 = 0;
  let p = ball;
  let t = paddleOne;
  let t2 = paddleTwo;
  let height = paddleTwo.height();
  let conHeight = $('#container').height();
  // console.log(t.position().left);
  // console.log(t.width());
  // console.log(p.position().left + t.width());


//////////////////////////paddle movement/////////////////////////////


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
      if (parseInt(paddleOne.css('left')) < 690) {
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
          if (parseInt(paddleTwo.css('left')) < 690) {
            $('#paddle_2').animate(
              {left: '+=15'},
              {duration: 1});
            };
          };

          let stop = () => {
            $(('#paddle').css('left') +=0);
          }


////////////////////////event listener (keypress)///////////////////////


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



////////////////////////////collision detection////////////////////////

          // collision detection (works)
          let detectCollisons1 = () => {

            if(
              ((t.position().top) < p.position().top + p.height())
              &&
              (t.position().left < p.position().left)
              &&
              (t.position().left + t.width() > p.position().left + p.width()))
              {
                paddleOne.css('background-color', 'green');
                // console.log('contact');
                downward = false;
                // console.log(downward);
                // stopIt();
                // console.log(ball.position().top);
                changeDirection();
              }
            }
            // /////////// doesnt work /////////////////////////////////
            let detectCollisons2 = () => {
              // console.log('detect collision 2 is running');
              // console.log(p.position().top);
              // console.log(t2.position().top + t2.height);
              // console.log(t2.height());
              if(
                ((t2.position().top) + t2.height() > p.position().top)
                &&
                (t2.position().left < p.position().left)
                &&
                (t2.position().left + t2.width() > p.position().left + p.width())
              )
              {
                // console.log('inside of if statement');
                paddleTwo.css('background-color', 'green');
                // console.log('contact');
                downward = true;
                // console.log(downward);
                // stopIt();
                // console.log(ball.position().top);
                changeDirection();
              }
            }
            // console.log("paddle two height: " + t2.height());
            // create function to increment players scores
            // console.log("container: " + container.position().top);

/////////////////////// not showing an alert???/////////////////////////
            let score = () => {

              if (p.position().top >= container.height())
              {
                // alert('player 2 scores!!')

                player2++;
                // reset();
                // console.log("player 2: " + player2);
              };

              if (p.position().top >= container.height() - container.height())
              {

                player1++;
                // console.log("player 1: " + player1);
              }

            }

///////////////////////// game start function///////////////////////////
////////////////////////////////////////////////////////////////////////
            let play = () => {
              // console.log(t2.position().top + t2.height());
              // console.log(p.position());

              detectCollisons2();
              detectCollisons1();
              // down();
              changeDirection();
              setInterval(play, 750);
            };

////////////////////////////////// unfinsihed///////////////////////////
            let changeDirection = () => {
              // console.log('change direction is running');
              if (downward === false) {
                // find middle of ball
                ball_middle = parseInt(p.css('left')) + p.width() / 2;
                // find middle of paddle
                paddle_middle = parseInt(t.css('left')) + t.width() /2;
                // where does teh ball hit?
                ball_lOrR = (ball_middle > paddle_middle ? 'right':'left');
                // create new angle
                angle = parseInt(Math.abs(paddle_middle - ball_middle) / 4);
                // console.log(downward);
                up();
              } else if (downward === true){
                // find middle of ball
                ball_middle = parseInt(p.css('left')) + p.width() / 2;
                // find middle of paddle
                paddle_middle = parseInt(t2.css('left')) + t2.width() /2;
                // where does teh ball hit?
                ball_lOrR = (ball_middle > paddle_middle ? 'right':'left');
                // create new angle
                angle = parseInt(Math.abs(paddle_middle - ball_middle) / 4);
                // console.log("upward");
                down();
              }
            }

            // // ball movement functions
            let down = () => {
              // console.log("========================");
              ball.css('top', parseInt(ball.css('top')) + top);
              if (ball_lOrR === 'right') {
                p.css('left', parseInt(p.css('left')) + angle);
              } else {
                p.css('left', parseInt(p.css('left')) - angle);
              }
              detectCollisons1();
              score();
            }

            let up = () => {
              // console.log("++++++++++++++++++++++");

              ball.css('top', parseInt(ball.css('top')) - top);
              if (ball_lOrR === 'right') {
                p.css('left', parseInt(p.css('left')) + angle);
              } else {
                p.css('left', parseInt(p.css('left')) - angle);
              }
              // console.log("ball: " + ball.position().top);
              // console.log('paddle 2: ' + paddleTwo.position().top);
              detectCollisons2();
              score();
            }

            // reset function to reset ball in middle of screen
            let reset = () => {
              ball.css('top', '50%');
            }
            // let stopIt = () => {
            //   ball.css('top', parseInt(ball.css('top')) + 0);
            // }
            play();




          });
