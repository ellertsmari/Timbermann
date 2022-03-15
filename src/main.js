import {Display, Map, Color} from 'rot-js';
import controllWithKeyboard from './game/keyboard';
import store from './store';
import { tileChanged } from './reducers/mapReducer';
const HEIGHT = 19;
const WIDTH = 43;
const tileSet = document.createElement("img");
tileSet.src = "https://raw.githubusercontent.com/ellertsmari/Timbermann/main/sprites.png";
 
tileSet.onload = () => {
  console.log("hello");
   console.log(tileSet);
  const display = new Display({
    layout: "tile",
    width: WIDTH,
    height: HEIGHT,
    forceSquareRatio: true,
    bg: "transparent",
    tileWidth: 40,
    tileHeight: 50,
    tileSet: tileSet,
    tileMap: {
      '.': [800, 800],
      '#': [515, 565],
      '@': [122, 796],
      'A': [175, 800],
    }
  });
  //display.drawText(0, 0, "Hello World");
  document.body.appendChild(display.getContainer());
  const map = new Map.Cellular(WIDTH, HEIGHT);
  map.randomize(0.50);

  for (var i=0; i<4; i++) map.create(); 
  map.connect((x,y,wall) => {
      //console.log(x, y,  wall ? '#' : '.')
    store.dispatch(tileChanged({x, y, tile: wall ? '#' : '.'}));
    display.draw(x, y, wall ? '#' : '.', "green",  "green");
    
  
  });
  const playerpos = [rand(WIDTH), rand(HEIGHT)];
  display.draw(playerpos[0], playerpos[1], "@", "green",  "green");
  display.draw(1, 1, "A", "green",  "green");
  controllWithKeyboard(display, "@", playerpos); 
}

const rand = (max, min=0) => Math.floor(Math.random() * (max - min + 1)) + min;

