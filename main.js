object = "";
status = "";

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
}