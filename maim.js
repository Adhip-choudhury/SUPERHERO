var canvas=new fabric.Canvas("myCanvas");
var block_image_width=30;
var block_image_height=30;
var player_X=10;
var player_Y=10;
var player_Object="";


function player_Update(){

    fabric.Image.fromURL("player.png", function(Img){
        player_Object=Img;
        player_Object.scaleToWidth(150);
        player_Object.scaleToHeight(140);
        player_Object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(player_Object);
    });
}



//moving the player code
window.addEventListener("keydown", my_keydown)
function my_keydown(e){

    var key_pressed=e.keyCode;
    console.log(key_pressed);

    if (key_pressed=="37"){

        Left();
        console.log("left");
    }

    if (key_pressed=="38"){

        Up();
        console.log("Up");
    }

    if (key_pressed=="39"){

        Right();
        console.log("Right");
    }

    if (key_pressed=="40"){

        Down();
        console.log("Down");
    }
    
}

function Down(){
if (player_Y<=500){

    player_Y=player_Y+10;
    console.log(player_X+", "+player_Y);
    player_Update();
}


}



function Up(){
    
    if (player_Y>=10){

        player_Y=player_Y-10;
        console.log(player_X+", "+player_Y);
        player_Update();
    }
}



function Right(){

    if (player_X<=690){

        player_X=player_X+10;
        console.log(player_X+", "+player_Y);
        player_Update();
    }

}



function Left(){
    
    if (player_X>=10){

        player_X=player_X-10;
        console.log(player_X+", "+player_Y);
        player_Update();
    }
}