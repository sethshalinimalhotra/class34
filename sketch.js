const MEngine = Matter.Engine;
const MWorld = Matter.World;
const MBodies = Matter.Bodies;
const MBody = Matter.Body;
var ground;
var engine;
function preload(){

}

function setup(){
    createCanvas(1000,800);
    engine =  MEngine.create();
    world = engine.world;
    ground = new Ground(100,100,200,20);
    
}
function draw(){
    MEngine.update(engine);
    rectMode(CENTER);
    ground.display();
    background(255);
}