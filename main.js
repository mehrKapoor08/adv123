function setup() {
    video = createCapture(VIDEO);
    video.size(400, 500)

    canvas = createCanvas(550, 500)
    canvas.position(560, 140)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
};

function modelLoaded() {
    console.log("posenet has been initilalised")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
    }

}

function draw() {
    background("#0000FF")
}