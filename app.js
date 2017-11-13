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
    $('#paddle_1').animate(
      {
        left: '-=5'
        // playerOneLeft = $('#paddle_1').requestAnimationFrame();

      });
      break;
      case 39:
      $('#paddle_1').animate(
        {
          left: '+=5'
          // playerOneRight = requestAnimationFrame(right_p1);
        });
        break;
        case 65:
        $('#paddle_2').animate(
          {
            left: '-=5'
            // playerTwoLeft = requestAnimationFrame(left_p2);
          });
          break;
          case 83:
          $('#paddle_2').animate(
            {
              left: '+=5'
              // playerTwoRight = requestAnimationFrame(right_p2);
            });
            break;
            default:
            break;
          }
        });



        });
