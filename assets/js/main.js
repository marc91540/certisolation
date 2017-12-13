$(document).ready(function(){

  //------------------------------------//
  //Navbar//
  //------------------------------------//
      var menu = $('.navbar');
      $(window).bind('scroll', function(e){
        if($(window).scrollTop() > 140){
          if(!menu.hasClass('open')){
            menu.addClass('open');
          }
        }else{
          if(menu.hasClass('open')){
            menu.removeClass('open');
          }
        }
      });


  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);

  });

  //------------------------------------//
  //Wow Animation//
  //------------------------------------//
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();


  //------------------------------------//
  //form//
  //------------------------------------//
$('#insideForm').submit(function(e){
  e.preventDefault();
  /////
  // Faire avant vérification pour voir si tous les champ on été remplis
  
  var form2 = document.querySelector("#insideForm");
  form2.addEventListener("submit", validate);
  function validate(e) {
    e.preventDefault();

    var inputs = form2.querySelectorAll("[data-error]");

    clear(inputs, function() {
      checkIsEmpty(inputs);
    });

    function checkIsEmpty(inputs) {
      var isEmpty = false;

      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];

        if (input.value.trim() === "") {
          isEmpty = true;
          markInput(input);
        }
      }
    }
    function markInput(input) {
      input.classList.add("error");
      var text = input.getAttribute("data-error");

      if (!text) return;

      var div = document.createElement("div");

      div.textContent = text;
      div.className = "error-text";
      input.parentNode.appendChild(div);
    }

    function clear(inputsItem, callback) {
      for (var i = 0; i < inputsItem.length; i++) {
        var input = inputsItem[i]
          , parent = input.parentNode
          , message = parent.querySelector(".error-text");

        input.classList.remove("error");
        if (message) parent.removeChild(message);
      }

      if (callback) callback();
    }
  }


  ////

  var data = $('#insideForm').serializeArray();
  var isValid = true;
  console.log(data);
  var checkDepartment = $('#designBox option[value="'+data[0].value+'"]').data('idf');
  //if(checkDepartment === 'non' || data[2].value === 'non' || parseInt(data[3].value) < 50 || data[5].value === 'non') isValid = false;
  console.log(checkDepartment);
  /////////////////////////
  // Calcul revenu/foyer //
  var partMenage = [
    {
      idf: 19803,
      autres: 14308
    },
    {
      idf: 20066,
      autres: 20925
    },
    {
      idf: 34906,
      autres: 25166
    },
    {
      idf: 40758,
      autres: 29400
    },
    {
      idf: 46630,
      autres: 33652
    },
    {},
  ];
  var partPersonne = {
    idf: 5860,
    autres: 4241
  }

  // exemple personne en idf
  //if(sonrevenus > 46630 + 5860 * (5 - nombrepart)) isValid = false;
  //var result =
  /*var result1= data[2].value + parseInt(data[3].value) < 50;

  var nombrepart= parseInt(data[7].value)
  if(sonrevenus > 46630 + 5860 * (5 - nombrepart)){
    console.log(nombrepart);
  }
*/



  var departementAutres=$("#designBox option[value='non']").attr('selected','selected');
  var departementIdf=$("#designBox option[value='oui']").attr('selected','selected');
  var accessTrap = data[2].value === 'oui';
  var metreCarre = (data[3].value) >= 50;
  var comblePerdu = data[5].value === 'oui';
  var revenu = (data[6].value);

  var personne1 = (data[7].value) == 1;
  var personne2 = (data[7].value) == 2;
  var personne3 = (data[7].value) == 3;
  var personne4 = (data[7].value) == 4;
  var personne5 = (data[7].value) == 5;
  //plus de 5 personnes
  var personne6 = (data[7].value) == 6;
/////////////////////////////////////////

  var salaire1 = 14308;
  var salaire2 = 20925;
  var salaire3 = 25166;
  var salaire4 = 29400;
  var salaire5 = 33652;
  //calcul pour plus de 5 personnes
  var salaire6 = 33652 + 4241;
  /////////////////////////////////////

  var salaireIdf1 = 19803;
  var salaireIdf2 = 20066;
  var salaireIdf3 = 34906;
  var salaireIdf4 = 40758;
  var salaireIdf5 = 46630;
  //calcul pour plus de 5 personnes
  var salaireIdf6 = 33652 + 5860;
  /////////////////////////////////////

                console.log(departementAutres);
                console.log(departementIdf);


  if ($(departementAutres) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne1) && (revenu) < (salaire1) ){
    //$('.formulaire').after('<div id="result">Bravo vous etes éligible</div>');
  //location.href ='../index2.html' +
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php"><button  id="button3Bis">Je continue</button></a></div>'



      );

  }else if ($(departementAutres) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne2) && (revenu) <= (salaire2) ){
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php" ><button  id="button3Bis">Je continue</button></a></div>');

  }else if ($(departementAutres) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne3) && (revenu) <= (salaire3) ){
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php" ><button  id="button3Bis">je continue</button></a></div>');

  }else if ($(departementAutres) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne4) && (revenu) <= (salaire4) ){
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php" ><button  id="button3Bis">Je continue</button></a></div>');
  }else if ($(departementAutres) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne5) && (revenu) <= (salaire5) ){
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php" ><button  id="button3Bis">Je continue</button></a></div>');
  }/**/else if ($(departementAutres) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne6) && (revenu) <= (salaire6) ){
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php" ><button  id="button3Bis">Je continue</button></a></div>');
  }
  else if ($(departementIdf) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne1) && (revenu) <= (salaireIdf1) ){
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php" ><button  id="button3Bis">Je continue</button></a></div>');

  }else if ($(departementIdf) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne2) && (revenu) <= (salaireIdf2) ){
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php" ><button  id="button3Bis">Je continue</button></a></div>');

  }else if ($(departementIdf) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne3) && (revenu) <= (salaireIdf3) ){
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php" ><button  id="button3Bis">Je continue</button></a></div>');
  }else if ($(departementIdf) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne4) && (revenu) <= (salaireIdf4) ){
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php" ><button  id="button3Bis">Je continue</button></a></div>');
  }else if ($(departementIdf) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne5) && (revenu) <= (salaireIdf5) ){
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php" ><button  id="button3Bis">Je continue</button></a></div>');
  }/**/else if ($(departementAutres) && (accessTrap) && (metreCarre) && (comblePerdu) && (personne6) && (revenu) <= (salaireIdf6) ){
    $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous êtes éligible</h3><a href="/PlaneteClimatV2/contact.php" ><button  id="button3Bis">Je continue</button></a></div>');
  }
    else{
      $('.formulaire').after('<div id="backgroundResult"></div><div id="result"><h3>Vous nêtes pas éligible a notre offre</h3><a href="/PlaneteClimatV2/" ><button  id="button3Bis">Retour</button></a></div>');
    }





// var nbHabFoyerVal = nb_hab_foyer.val();
 // console.log(nbHabFoyerVal);


/*
var sonrevenus = true;

  if($(sonrevenus)){
    checkDepartment === 'non' || parseInt(data[3].value) < 50 || parseInt(data[6].value) <= 19803 || parseInt(data[7].value) <= 1;
  }else{
    alert("balba");
  }


*/















  /////////////////////////
/*
  if(!isValid) {
    alert("Vous ne pouvez pas benificier de notre offre");
  } else {
    alert("vous êtes éligible, vous pouvez continuer");
  }
  */
});


  //------------------------------------//
  //form2//
  //------------------------------------//
  /*

  $('#insideForm2').submit(function(e){
    e.preventDefault();
    /////
    // Faire avant vérification pour voir si tous les champ on été remplis
    ////

    var data = $('#insideForm2').serializeArray();
    var isValid = true;
    console.log(data);
    var checkDepartment = $('#designBox option[value="'+data[0].value+'"]').data('idf');
    //if(checkDepartment === 'non' || data[2].value === 'non' || parseInt(data[3].value) < 50 || data[5].value === 'non') isValid = false;
    console.log(checkDepartment);
    /////////////////////////

  });


*/





  //----------------Message Oui NON --------------------//
$(".textShow").click(function () {
  var div= $("#"+this.value);
  div.toggle("slow").siblings().hide("slow");
});


$(".textShow2").click(function () {
  var div= $("#"+this.value);
  div.toggle("slow").siblings().hide("slow");
});









  //----------------Message plus de 50 m2--------------------//

//  var message = document.getElementById("surface");
//  var surfaceM = 50;
//
//  document.getElementById("button2").addEventListener("click", function() {
//    //alert( message.value );
//
//    if ( message.value >= surfaceM ) {
//      alert("vous êtes éligible, vous pouvez continuer");
//    }
//    else {
//      alert("Vous ne pouvez pas benificier de notre offre ");
//    }
//  });


/*
  //----------------formulaire fonction --------------------//
  var test = document.getElementById("surface");

  $(".click").click(function () {
    alert(test.textContent);
  });
  $



  var message2 = document.getElementById("surface");

  document.getElementById("myButton").addEventListener("click", function() {
    alert( surface.value );
  });


*/
$('table .infos').hide();

$('table img').hover(
  function () {
    $(this).children('div').fadeIn();
  }, function () {
    $(this).children('div').fadeOut();
  });

  //------------------------------------//
  //GoogleMApFooter//
  //------------------------------------//


  var uluru = {lat: 48.803893, lng: 2.443534};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });






});
