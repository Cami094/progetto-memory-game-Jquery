const mieImg = [
   "arrabiato",
"bello",
   "piangere", 
  "ridere", 
 "amare",
    "amare1",
   "spavento",
    "shock",
    "arrabbiato",
 "bello",
   "piangere",
   "ridere",
    "amare",
    "amare1",
    "spavento",
    "schock",
];
// creo una variabile che mi contiene le immagini cliccate
$(document).ready(()=>{
let imgray =$(mieImg);
let img = [...imgray]; 
let box = $(".box");

 
for(let i=0; i<img.length; i++){



    $('<div class="images" id = "carta"'+ i + '" ><img  src="/img/'+ mieImg[i]+'.png"></div>')
.appendTo(box)

}
$('.images').each(function(index){
   const cartaaper = $(this).attr("name",imgray[index])
    
})

$('.images').on('click', function (){
$(this).removeClass("images");
  $(this).addClass("giro")

  let numero = $('.giro').val()
console.log(numero)

    if($('.giro').length == 2){
     if(  $(".giro").last().attr("name")=== $(".giro").first().attr("name")){
         $(".giro").each(function(){
             $(".giro").animate({opacity: 0.6}).removeClass("giro")
             .addClass("match");
         });
     }else{ 
       setTimeout(function(){
           $('.giro').each(function(){
               $(this).removeClass("giro")
               .addClass("images")
           });
       },1000)

     }
     
 

 }

    

})
                                                                                                                                   


     


});




// quando il documento è pronto...vado a selezionare casualmente una immagine dalla cartella.


    // creo una variabile "images" che contiene il selettore della classe "images". 
    // così ho un oggetto jQuery e metto gli elementi corrispondenti nell'oggetto jQuery.

    // creo un ciclo for sull'oggetto creato per ottenere poi un'immagine random.

        // prendo a caso un elemento dalla mia lista.

        // vado a prendere il file localizzato nella directory img e creo il tag html e lo inserisco nella pagina.
        //images.eq(e).html("<img id='" + e + "' src='images/" + randomImg + ".png' width='130' height='130' />");
  
 // creo la funzione principale "mostraImg"

    // creo l'oggetto jQuery per i clicks e lo chiamo "tuttiIClick" e prendo il valore e poi incremento.
    
    // ora visualizzo l'emoji (l'immagine) a due a due se sono diverse le nascondo altrimenti le lascio visibili.
    
        // se non sono due visualizzo l'emoji e la inserisco in "clickImgs".
        
            // se sono uguali azzero la mia lista.
            
                // se sono diverse nascondo le due immagini.
                