document.getElementById('convert').addEventListener('click',convert);

window.addEventListener('keydown',function(event){
    if (event.key == 'Control'){
        convert();
    }
});

function convert(){
    
    let value1 = document.getElementById('input').value;
    value1 = value1.toUpperCase();
    // console.log(value1);
    let length = value1.length;
    // console.log(length);
    let new_string = "";
    
    for(let i = 0;i<length;i+=2){
        let character = value1.charAt(i);
        if (character !== " " || character !== '\n'){
            character = character.toLowerCase();
        }  
        new_string += character + value1.charAt(i+1);
    }

    // console.log(new_string);
    
    document.getElementById('input').value = new_string;

}

document.getElementById('color1').addEventListener('click',function(event){
    document.getElementById('input').style.background = "lightcoral";
    document.getElementById('input').style.borderColor= "lightcoral";
    document.getElementById('convert').style.background = "lightgreen";
})
document.getElementById('color2').addEventListener('click',function(event){
    document.getElementById('input').style.background = "lightslategrey";
    document.getElementById('input').style.borderColor= "lightslategrey";
    document.getElementById('convert').style.background = "whitesmoke";
})
document.getElementById('color3').addEventListener('click',function(event){
    document.getElementById('input').style.background = "lightgreen";
    document.getElementById('input').style.borderColor= "lightgreen";
    document.getElementById('convert').style.background = "lightslategrey";
})

