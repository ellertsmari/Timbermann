import { HEIGHT, WIDTH } from "../constants";
import { Map } from "rot-js";
import store from '../store';
import { tileChanged } from '../reducers/mapReducer';

const initMap = (display) => {
  const map = new Map.Cellular(WIDTH, HEIGHT);
  map.randomize(0.50);
  for (var i=0; i<4; i++) map.create(); 
  map.connect((x,y,tree) => {
      //console.log(x, y,  wall ? '#' : '.')
    store.dispatch(tileChanged({x, y, tile: tree ? '#' : '.'}));
    display.draw(x, y, tree ? '#' : '.', "green",  "green");
  });
  return map;
}

export default initMap;