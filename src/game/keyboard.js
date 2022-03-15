import store from "../store";
const controllWithKeyboard = (Display, char, playerpos) => {
  document.onkeydown = (e) => {
    const map = {
      "ArrowUp": [0,-1],
      "ArrowDown": [0,1],
      "ArrowLeft": [-1,0],
      "ArrowRight": [1,0]
    }
    console.log(Display.Tile);
    const nextSpot = [playerpos[0] + map[e.key][0], playerpos[1] + map[e.key][1]];
    if(nextSpot[0] < 0 || nextSpot[0] > Display.getOptions().width || nextSpot[1] < 0 || nextSpot[1] > Display.getOptions().height) return;
    //if (Display.getContent(nextSpot[0], nextSpot[1]) === '#') return;
    const lmap = store.getState().map;
    console.log(lmap);
    console.log(lmap.entities[nextSpot[0] + "," + nextSpot[1]])
    if(lmap.entities[nextSpot[0] + "," + nextSpot[1]].tile === "#") return;
    if(e.key in map){
      Display.draw(playerpos[0], playerpos[1], ".", "green",  "green");
      Display.draw(nextSpot[0], nextSpot[1], char, "green",  "green");
      playerpos = nextSpot;
    }
    
   
  }
}

export default controllWithKeyboard;