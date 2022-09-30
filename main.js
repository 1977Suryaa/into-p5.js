function setup(){
canvas=createCanvas(400,400)
webcam=createCapture(VIDEO)
webcam.hide()
}
function draw(){
image(webcam,0,0,400,400)
tint(filter1)
}
function filter(){
    filter1=document.getElementById("input").value


}
function take_snapshot(){
    save("pic.png")
}