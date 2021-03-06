$(document).ready( () => {

  // global variables
  
  let paddleOne = $('#paddle_1');
  let paddleTwo = $('#paddle_2');
  let ball = $('#ball');
  let ball1 = $('#ball1');
  let downward = true;
  let top = 1;
  let container = $('#container');
  let player1 = 'Player 1';
  let player2 = 'Player 2';
  let pl1 = 0;
  let pl2 = 0;
  let p = ball;
  let t = paddleOne;
  let t2 = paddleTwo;
  let height = paddleTwo.height();
  let conHeight = $('#container').height();
  let ball_lOrR;
  let angle;
  let points;



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

////////////////////////////////////////////////////////////////////////

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


////////////////////////////////////////////////////////////////////////
////////////////////////////collision detection////////////////////////
////////////////////////////////////////////////////////////////////////

          // collision detection (works)
          let detectCollisons1 = () => {

            if(
              ((t.position().top) < p.position().top + p.height())
              &&
              (t.position().left < p.position().left)
              &&
              (t.position().left + t.width() > p.position().left + p.width()))
              {
                downward = false;

                // find middle of ball
                ball_middle = parseInt(p.css('left')) + p.width() / 2;

                // find middle of paddle
                paddle_middle = parseInt(t.css('left')) + t.width() /2;

                // where does the ball hit?
                ball_lOrR = (ball_middle > paddle_middle ? 'right':'left');

                // create new angle
                angle = parseInt(Math.abs(paddle_middle - ball_middle) / 12);
              }
            }



            // ///////////  works /////////////////////////////////
            let detectCollisons2 = () => {
              if
              (
                ((t2.position().top) + t2.height() > p.position().top)
                &&
                (t2.position().left < p.position().left)
                &&
                (t2.position().left + t2.width() > p.position().left + p.width())
              )
              {
                downward = true;
                // find middle of ball
                ball_middle = parseInt(p.css('left')) + p.width() / 2;
                // find middle of paddle
                paddle_middle = parseInt(t2.css('left')) + t2.width() /2;
                // where does the ball hit?
                ball_lOrR = (ball_middle > paddle_middle ? 'right':'left');
                // create new angle
                angle = parseInt(Math.abs(paddle_middle - ball_middle) / 12);

              }
            }

////////////////////////////////////////////////////////////////////////
///////////////////////// game start function///////////////////////////
////////////////////////////////////////////////////////////////////////

            // THIS FIXED PLAYER TWO SCORE INTERVAL BUT NOT PLAYER ONE??
            let interval = null;
            let interval1 = null;


            let play = () => {
              detectCollisons2();
              detectCollisons1();
              changeDirection();

              if (points !== true){
                  score()
              };

              interval = setInterval(play, 500, 'linear');
            };
// /////////////////////////////////////////////////////////////////////
// round 2 function (inoperable)
// /////////////////////////////////////////////////////////////////////

            let round2 = () => {
              // console.log(container);
              detectCollisons2();
              detectCollisons1();
              changeDirection1();

              if (points !== true){
                  score()
              };

              interval1 = setInterval(play, 100, 'linear');
            }


// /////////////////////////////////////////////////////////////////////
// function used to change direction of the ball after a collision is detected
////////////////////////////////////////////////////////////////////////

            let changeDirection = () => {
              // console.log('change direction is running');
              if (downward === false) {

                up();
              } else if (downward === true){

                down();
              }
            }

// /////////////////////////////////////////////////////////////////////
// function used to change direction of the ball after a collision is detected (round 2 inoperable)
////////////////////////////////////////////////////////////////////////

            let changeDirection1 = () => {
              // console.log('change direction is running');
              if (downward === false) {

                up1();
              } else if (downward === true){

                down1();
              }
            }

////////////////////////////////////////////////////////////////////////
            // // ball movement functions
////////////////////////////////////////////////////////////////////////


            let down = () => {
              // console.log("========================");
              p.css('top', parseInt(ball.css('top')) + top);
              if (ball_lOrR === 'right') {
                p.css('left', parseInt(p.css('left')) + angle);
              } else {
                p.css('left', parseInt(p.css('left')) - angle);
              }
              detectCollisons1();
            }

///////////////////////////////////////////////////////////////////////
            // round 2 ball movement function
////////////////////////////////////////////////////////////////////////

            let down1 = () => {
              // console.log("========================");
              ball1.css('top', parseInt(ball.css('top')) + top);
              if (ball_lOrR === 'right') {
                ball1.css('left', parseInt(p.css('left')) + angle);
              } else {
                ball1.css('left', parseInt(p.css('left')) - angle);
              }
              detectCollisons1();
              // score();
            }

////////////////////////////////////////////////////////////////////////
            // ball movement function
////////////////////////////////////////////////////////////////////////

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
              // score();
            }
////////////////////////////////////////////////////////////////////////
            // round 2 movement function
////////////////////////////////////////////////////////////////////////

            let up1 = () => {
              // console.log("++++++++++++++++++++++");

              ball1.css('top', parseInt(ball.css('top')) - top);
              if (ball_lOrR === 'right') {
                ball1.css('left', parseInt(p.css('left')) + angle);
              } else {
                ball1.css('left', parseInt(p.css('left')) - angle);
              }
              // console.log("ball: " + ball.position().top);
              // console.log('paddle 2: ' + paddleTwo.position().top);
              detectCollisons2();
              // score();
            }
////////////////////////////////////////////////////////////////////////
            // reset function to set ball in middle of screen
////////////////////////////////////////////////////////////////////////

            let reset = () => {
              // console.log('working');
              $('#restart_div').css({'display': 'inline-block', 'z-index': 2});
              $('#p1score').html('<h2>' + pl1 + '</h2>').css('margin', 'auto');
              $('#p2score').html('<h2>' + pl2 + '</h2>').css('margin', 'auto');
              $('#player2').append($('<div>')).html('<h2>' + player2 +'</h2>')
              $('#player1').append($('<div>')).html('<h2>' + player1 +'</h2>')
              ball.css({'position': '50%'});
              ball.detach();
              ball1.appendTo(container).css({'display': 'inline-block','position': '50%'});
              // console.log(p.position());
              // ball.appendTo('#container').css({'top': '50%'});

            }



/////////////////////////////////////////////////////////////////////
//check for score and increments it then calls the reset function//////////////////////////////////////////////////////////////

            let score = () => {

              if (p.position().top >= container.height())
              {
                $('#player2').append($('<div>')).html('<h2>' + player2 + " wins the round" + '</h2>');
                pl2++;
                reset();
                points = true;
                clearInterval(interval);
                clearInterval(interval1);

              }
              if (parseInt(p.css('top')) <= 0)
              {
                $('#player1').append($('<div>')).html('<h2>' + player1 + " wins the round" + '</h2>');
                pl1++;
                reset();
                points = true;
                clearInterval(interval);
                clearInterval(interval1);
              }

            };
////////////////////////////////////////////////////////////////////////
// hidden div for restarting rounds and reseting game board
////////////////////////////////////////////////////////////////////////


            let $restart_div = $('#restart_div');
            $('#restart').click(() => {
              $(document).location.reload();
            })

////////////////////////////////////////////////////////////////////////
            // button used to start next round
////////////////////////////////////////////////////////////////////////

            $('#round').click(() => {
              round2();
              $restart_div.css({'display': 'none'});
              // ball1.css({'display': 'block','position': '50%'});
              // $('#player1').html('<h2>'

            })
            play();

          });
