obj=[];
function back1(){
    window.location="./index.html"
}
function preload(){
    toi1=loadImage("https://i.postimg.cc/kGQwJTpy/tv.jpg");
}
function setup(){
    canvas=createCanvas(320,240);
    canvas.position(460,340);
    coco=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("stat").innerHTML="STATUS: IT'S YOUR PROBLEM I AM STILL LOADING"
}
function modelLoaded(){
    alert("THESE ARE DEVELOPERS EFFORTS THAT MODEL LOADED");
    status=true;
}

function gotResult(error,results){
    if(error){
        console.log("IT'S AGAIN YOUR PROBLEM THAT I HAVE AN ERROR! YOU WILL NOT REMEMBER IF I TELL YOU THE RESULT "+error);
    }else{
        obj=results;
        document.getElementById("dect").innerHTML="OBJECTS DETECTED: "+obj.length;
        console.log(results);
    }
}
function draw(){
    image(toi1,0,0,320,240);
    r=random(255);
    g=random(255);
    b=random(255);
    if(status != false){
        coco.detect(toi1,gotResult);
        for(var i=0; i<obj.length;i++){
            fill(r,g,b);
            $("#stat").html("STATUS: DEVELOPER'S EFFORTS ONLY!");
            $("#nob").html("NUMBER OF OBJECCTS DETECTED: "+obj.length);
            conf=floor(obj[i].confidence*100);
            text(obj[i].label+" "+ conf+"%",obj[i].x+15,obj[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(obj[i].x,obj[i].y,obj[i].width,obj[i].height);
            
        }
    }   
}