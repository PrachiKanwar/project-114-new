nosex=0
nosey=0
function preload(){
    clownnose=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotposes)
}
function modelloaded(){
    console.log("posenet is initialized")
}
function draw(){
image (video,0,0,300,300)
fill(255,0,0)
stroke(255,0,0)
//circle(nosex,nosey,20)
image (clownnose,nosex-15,nosey+14,40,28)
}
function take_snapshot(){
    save("prachi.png")

}
function gotposes(results){
if(results.length>0){
    console.log(results)
    nosex=results[0].pose.nose.x
    nosey=results[0].pose.nose.y
    console.log("nosex= "+nosex)
    console.log("nosey= "+nosey)
}
}