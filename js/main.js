


let palyerX = [];
let palyerO =[];
let marker = ["X" , "O"]; 
let urTurn = 0;
let stop = false;
let winerMatch =
[
[0 ,1 ,2 ,3 ],
[4 ,5 ,6 , 7 ],
[8 ,9 ,10 ,11 ],
[12, 13, 14, 15],
[0 , 4 , 8 , 12 ],
[1 , 5 , 9 ,13 ],
[2 , 6 , 10 , 14 ],
[3 , 7 , 11, 15 ],
[3 ,6, 9, 12 ],
[0 , 5 , 10 ,15 ]]; 

// let score=[];
// let gameover ;


$(document).ready(function(){
    $(".body").hide();
    $("#Option1").click(function(){
      $(".home").hide();
      $(".body").show();
    
    });
    $("#show").click(function(){
   
    });
  });


$('body').on('click', function(event){
    let id = event.target.id
    console.log(event.target.id)
});


$('.click').on('click', function(event){
   
    if(!stop){
        if (event.target.innerText == '') {
            document.body.style.cursor ='pointer' ;
            $(this).html(`<span> ${marker[urTurn]} </span> `)
            if (urTurn == 0){
                palyerX.push(Number(event.target.id) )
                console.log("Player X ")
                console.log(palyerX )

                checkWin(palyerX)
            } else {
                palyerO.push(Number(event.target.id) ) 
                console.log("Player O ")
                console.log(palyerO )
                checkWin(palyerO)
                if(palyerO.length === 8 ){


                    Swal.fire({
                        title: 'Oops ...!',
                        text: 'No one win , Try agin',
                        imageUrl: 'file:///Users/macbook/Desktop/Project-1-Prompt/Tic%20tac%20toc/WP-logo-xo.png',
                        imageWidth: 300,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        animation: false
                      })
                
                }
            } 
        swichPleyers(); 
        }
        else if (event.target.innerText != '') {
            document.body.style.cursor = 'not-allowed';
        }
    }
   });

function swichPleyers() {
        if (urTurn == 0 ) { 
            urTurn = 1;
            document.getElementById("massege").innerText=  marker[urTurn] + " Turn";
        }
        else { 
            urTurn = 0; 
            document.getElementById("massege").innerText=  marker[urTurn] + " Turn";
            }
    }


function checkWin(palye)
 { let j =0 ;
  for (let i=0; i< winerMatch.length; i++)
 {
     let win=true;
        if(palye.includes(winerMatch[i][j]) &&  palye.includes(winerMatch[i][j+1]) && palye.includes(winerMatch[i][j+2]) && palye.includes(winerMatch[i][j+3]) ){
           

            if ( palye  == palyerX) {

                Swal.fire({
                    title: "Good job!" ,
                    text: `${marker[urTurn]} is the winer`,
                    imageUrl: 'file:///Users/macbook/Desktop/Project-1-Prompt/Tic%20tac%20toc/x.png',
                    imageWidth: 300,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    animation: false
                  })

                }
            else if ( palye  == palyerO) {

                Swal.fire({
                    title: "Good job!" ,
                    text: `${marker[urTurn]} is the winer`,
                    imageUrl: 'file:///Users/macbook/Desktop/Project-1-Prompt/Tic%20tac%20toc/o.png',
                    imageWidth: 300,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    animation: false
                  })
                  
            }


            
             
            stop = true;
            return win;

        }
 } return false 
}

    
  
$('#im').click(function() {

$('.click').text(" ")
document.getElementById("massege").innerText= ("TIC TAC TOC"); 
urTurn=0;
palyerX = [];
palyerO =[];
stop = false;
});


