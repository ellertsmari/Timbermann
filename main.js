import {Display, Map, Color} from 'rot-js';
const HEIGHT = 20;
const WIDTH = 20;
const tileSet = document.createElement("img");
tileSet.src = "https://raw.githubusercontent.com/ellertsmari/Timbermann/main/sprites.png";
 
tileSet.onload = () => {
  console.log("hello");
   console.log(tileSet);
  const display = new Display({
    layout: "tile",
    width: WIDTH,
    height: HEIGHT,
    //fontSize: 12,
    //fontFamily: 'monospace',
    forceSquareRatio: true,
    bg: "transparent",
    tileWidth: 40,
    tileHeight: 50,
    //tileColorize: true,
    tileSet: tileSet,
    tileMap: {
      '.': [200, 800],
      '#': [515, 565],
      '@': [122, 796],
      'A': [175, 800],
    }
  });
  //display.drawText(0, 0, "Hello World");
  document.body.appendChild(display.getContainer());
  const map = new Map.Cellular(HEIGHT, WIDTH);
  map.randomize(0.50);

  for (var i=0; i<4; i++) map.create(); 
  map.connect((x,y,wall) => {
      //console.log(x, y,  wall ? '#' : '.')
  
    display.draw(x, y, wall ? '#' : '.', "green",  "green");
    
  
  });
  display.draw(rand(WIDTH), rand(HEIGHT), "@", "green",  "green");
  display.draw(1, 1, "A", "green",  "green");
}

const rand = (max, min=0) => Math.floor(Math.random() * (max - min + 1)) + min;
