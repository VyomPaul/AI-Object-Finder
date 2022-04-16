object = "";
status = "";
results = [];

function setup() {
    canvas.creaateCanvas(480, 380);
    canvas.center();
    video = createCaptue(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object = document.getElementById(objectNameGiven).innerHTML;
}

function modelLoaded() {
    console.log("model loaded");
    status = true
}

function draw() {
    image(video, 0, 0, 480, 380);
    if(status != "") {
        for(i = 0; i<objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResult() {
    if(error) {
        console.log(error);
    }
    console.log(results)
}