//create function to move the players divs
console.log($('#paddle_1'));


$( () => {


  //  let left_p1 = () => {
  //    $('#paddle_1').event.currentTarget().css('left', '-=5');
  //  }


  $(document).keyup( (e) => {
    // console.log(e.which);
    switch (e.which) {
      case 37:
      $('#paddle_1').animate(
        {
          left: '-=0'

        });
        break;
        case 39:
        $('#paddle_1').animate(
          {
            left: '+=0'
          });
          break;
          case 65:
          $('#paddle_2').animate(
            {
              left: '-=0'
            });
            break;
            case 83:
            $('#paddle_2').animate(
              {
                left: '+=0'
              });
              break;
              default:
              break;
            }
          });


          $(document).keydown( (e) => {
            let playerOneLeft = false;
            // console.log(e.which);
            switch (e.which) {
              case 37:

              // if ($('#paddle_1').css('left') > 0% {
                $('#paddle_1').animate(
                  
                  {
                    left: '-=20'
                  })
                // })

                break;
                case 39:
                $('#paddle_1').animate(
                  {
                    left: '+=20'
                    // playerOneRight = requestAnimationFrame(right_p1);
                  });
                  break;
                  case 65:
                  $('#paddle_2').animate(
                    {
                      left: '-=20'
                      // playerTwoLeft = requestAnimationFrame(left_p2);
                    });
                    break;
                    case 83:
                    $('#paddle_2').animate(
                      {
                        left: '+=20'
                        // playerTwoRight = requestAnimationFrame(right_p2);
                      });
                      break;
                      default:
                      break;
                    }
                  });



                });
