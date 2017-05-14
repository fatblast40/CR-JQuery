var getQuote = function(){

     var name = $( "#name" ).val();
     var age = $("#age").val();
     var gender = $("#gender").val();
     var country = $("#country").val();
     var horsePower = $("#horse-power").val();

     var obj = {
         name: name,
         age: age,
         gender: gender,
         country: country,
         horsePower: horsePower
     };

     var offer = obj.horsePower * 10;

     if(obj.age < 28){
         offer = offer + (offer * 0.25);
     }

     switch(obj.country){
        case 'canada':
            offer = offer + 50;
            break;
        case 'mexic':
            offer = offer + 150;
            break;
        case 'uk':
            offer = offer + 200;
            break;
        default:
            break;
     }

     if(obj.gender == 'M'){
         offer += 100;
     }

     $("#quote").text("$ " + offer);


};