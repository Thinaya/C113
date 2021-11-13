function preload() {

}

function setup() {
canvas = createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();


tint_color = "";
}

function draw() {
image(video, 170,100, 300, 300);
tint(tint_color);
circle(50, 50, 40);
rect(80,60,480,30)
circle(590, 50, 40);
circle(50,430, 40);
rect(80,410,480,30)
circle(590, 430, 40);
circle(590, 350, 40);
circle(590, 250, 40);
circle(590, 150, 40);
circle(50,350, 40);
circle(50,250, 40);
circle(50,150, 40);
}

function take_snapshot() {
   save('image.png');
}

function filter_tint() {
tint_color = document.getElementById("color_name").value;
}