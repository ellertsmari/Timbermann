import {Display} from 'rot-js';
import { TILE_HEIGHT, TILE_WIDTH, HEIGHT, WIDTH } from '../constants';

const tileSet = document.createElement("img");
tileSet.src = "https://raw.githubusercontent.com/ellertsmari/Timbermann/main/sprites.png";
 
const loadGraphics = new Promise((resolve, reject) => {
  tileSet.onload = () => {
    console.log("hello");
    const display = new Display({
      layout: "tile",
      width: WIDTH,
      height: HEIGHT,
      forceSquareRatio: true,
      bg: "transparent",
      tileWidth: TILE_WIDTH,
      tileHeight: TILE_HEIGHT,
      tileSet: tileSet,
      tileMap: {
        '.': [800, 800],
        '#': [515, 565],
        '@': [122, 796],
        'A': [175, 800],
      }
    });
    resolve(display);
    //display.drawText(0, 0, "Hello World");
    
  }
  tileSet.onerror = () => reject(new Error("Could not load tileset"));  
});

export default loadGraphics;