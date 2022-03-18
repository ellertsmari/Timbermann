import loadGraphics from './game/display';
import initMap from './game/map';
import controllWithKeyboard from './game/keyboard';
import { WIDTH, HEIGHT } from './constants';
const initialize = async () => {
  const display = await loadGraphics;
  document.body.appendChild(display.getContainer());
  
  initMap(display);
  const playerpos = [rand(WIDTH), rand(HEIGHT)];
  display.draw(playerpos[0], playerpos[1], "@", "green",  "green");
  display.draw(1, 1, "A", "green",  "green");
  controllWithKeyboard(display, "@", playerpos); 

}
initialize();


const rand = (max, min=0) => Math.floor(Math.random() * (max - min + 1)) + min;
