

$(document).ready( () => {

  // global variables
  // let pw, ph, px, py, tw, th, tx, ty; unused variables
  let paddleOne = $('#paddle_1');
  let paddleTwo = $('#paddle_2');
  let ball = $('#ball');
  let downward = 'down';
  let top = 6;
  let container = $('#container');

  let p = ball;
  let t = paddleOne;
  let t2 = paddleTwo;
  let height = paddleTwo.height();
  let collision1;
  let collision2;
  let bouncetime = 1000;
  let ballheight = 280;
  let ballsize = 80;

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
                // downward = false;
                collision1 = true;
                console.log(downward);
                // stopIt();
                console.log(ball.position().top);
                changeDirection();
              }
            }
            // /////////// doesnt work /////////////////////////////////
            let detectCollisons2 = () => {
              if(
                (t2.position().top + t2.height > p.position().top)
                &&
                (t2.position().left < p.position().left)
                &&
                (t2.position().left + t2.width() > p.position().left + p.width())
              )
              {
                paddleTwo.css('background-color', 'green');
                console.log('contact');
                // downward = false;
                collision2 = true;
                console.log(downward);
                stopIt();
                console.log(ball.position().top);
                changeDirection();
              }
            }
            console.log("paddle two height: " + t2.height());
            // create function to increment players scores
            console.log("container: " + container.position().top);

//////////////////////// not showing an alert???/////////////////////////
            let score = () => {

              if (p.position().top >= container.height())
              {
                alert('player 1 scores!!')
              };
            }

////////////////////////// game start function///////////////////////////
/////////////////////////////////////////////////////////////////////////
let down = () => {
  ball.css('top', parseInt(ball.css('top')) + top);
  downward = true;
}

let up = () => {
  ball.css('top', parseInt(ball.css('top')) - top);
  downward = false;
}


            let repeat = () => {
              if (downward === 'down'){
                detectCollisons1
                down();
                setInterval(repeat, 500)
              } else {
                up();
              }
              if(collision1 === true){
                up();
              } else {
                down();
              }



              animate = requestAnimationFrame(repeat)
            };
            repeat();
/////////////////////////////////// unfinsihed///////////////////////////


            // let changeDirection = () => {
            //   if (downward === false) {
            //     // up();
            //   } else if (downward === true){
            //     down();
            //   }
            // }

            // // ball movement functions

            // play();




          });
