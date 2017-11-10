//create function to move the players divs
console.log($('#paddle_1'));


$( () => {


  $(document).keydown( (e) => {
    // console.log(e.which);
    switch (e.which) {
      case 37:
      $('#paddle_1').animate(
        {
          left: '-=5'

        });
        break;
        case 39:
        $('#paddle_1').animate(
          {
            left: '+=5'
          });
          break;
          case 65:
          $('#paddle_2').animate(
            {
              left: '-=5'
            });
            break;
            case 83:
            $('#paddle_2').animate(
              {
                left: '+=5'
              });
              break;
              default:
            }
          });
        });
