import {Display, Map, Color} from 'rot-js';
const tileSet = document.createElement("img");
tileSet.src = "https://opengameart.org/sites/default/files/preview_height128_trees_mega_pack_cc_by_3_0.png";
 
tileSet.onload = () => {
  console.log("hello");
   console.log(tileSet);
  const display = new Display({
    layout: "tile",
    width: 20,
    height: 20,
    //fontSize: 12,
    //fontFamily: 'monospace',
    forceSquareRatio: true,
    bg: "transparent",
    tileWidth: 40,
    tileHeight: 50,
    //tileColorize: true,
    tileSet: tileSet,
    tileMap: {
      '.': [130, 800],
      '#': [515, 565],
    }
  });
  //display.drawText(0, 0, "Hello World");
  document.body.appendChild(display.getContainer());
  const map = new Map.Cellular(20, 20);
  map.randomize(0.50);

  for (var i=0; i<4; i++) map.create(); 
  map.connect((x,y,wall) => {
      //console.log(x, y,  wall ? '#' : '.')
  
    display.draw(x, y, wall ? '#' : '.', "green",  "green");
    
  
  });
}
/*
Map.prototype.getTile = function(x, y) {
  if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
    return null;
  }
  return this._tiles[y][x];
}

const map = new Map(20, 20);
map.randomize(0.5);
for (let y = 0; y < map._height; y++) {
  for (let x = 0; x < map._width; x++) {
    const tile = map.getTile(x, y);
    if (tile) {
      tile.setColor(Color.fromString('#fff'));
    }
  }
}

for(let i = 0; i < 10; i++) {
  const x = Math.floor(Math.random() * map._width);
  const y = Math.floor(Math.random() * map._height);
  const tile = map.getTile(x, y);
  if (tile) {
    tile.setColor(Color.fromString('#f00'));
  }
}

for(let i = 0; i < 10; i++) {
  const x = Math.floor(Math.random() * map._width);
  const y = Math.floor(Math.random() * map._height);
  const tile = map.getTile(x, y);
  if (tile) {
    tile.setColor(Color.fromString('#0f0'));
  }
}

for(let i = 0; i < 10; i++) {
  const x = Math.floor(Math.random() * map._width);
  const y = Math.floor(Math.random() * map._height);
  const tile = map.getTile(x, y);
  if (tile) {
    tile.setColor(Color.fromString('#00f'));
  }
}

for(let i = 0; i < 10; i++) {
  const x = Math.floor(Math.random() * map._width);
  const y = Math.floor(Math.random() * map._height);
  const tile = map.getTile(x, y);
  if (tile) {
    tile.setColor(Color.fromString('#ff0'));
  }
}

for(let i = 0; i < 10; i++) {
  const x = Math.floor(Math.random() * map._width);
  const y = Math.floor(Math.random() * map._height);
  const tile = map.getTile(x, y);
  if (tile) {
    tile.setColor(Color.fromString('#0ff'));
  }
}

for(let i = 0; i < 10; i++) {
  const x = Math.floor(Math.random() * map._width);
  const y = Math.floor(Math.random() * map._height);
  const tile = map.getTile(x, y);
  if (tile) {
    tile.setColor(Color.fromString('#f0f'));
  }
}

for(let i = 0; i < 10; i++) {
  const display = new rot.Display(map._width, map._height);
  display.draw(map);
  display.compute(map);
  display.draw(map);
}*/