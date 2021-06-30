Webcam.set(    {
    height:300,
    width:350,
    image_format:'png',
     png_quality:90
    }
);
camera=document.getElementById("cam")
Webcam.attach("#cam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("img").innerHTML='<img id="iii" src='+data_uri+"'</img>'";
    });
}

console.log("ml5.js version:"+ml5.version);
classifer=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/adATqAoMK/model.json',modelLoded_p);

function modelLoded_p(){
    console.log("Model Loded!");
}
function check(){
    img=document.getElementById("iii");
    classifer.classify(img,got_result)
}
function got_result(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("person_name").innerHTML=results[0].label
    }
}