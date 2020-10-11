class Player {
    constructor(box) {
    this.box = box;
    this.posY = 4;
    this.posX = 4;
    this.speed = 3;
    this.inputX = 0;
    this.inputY = 0;
    }
    movePlayer(){
        this.posY = this.posY + this.speed * this.inputY;
        this.posX = this.posX + this.speed * this.inputX;
        this.box.style.marginTop = this.posY + "px";
        this.box.style.marginLeft = this.posX + "px";
    }

    
   getInput() {
      document.onkeydown = detectKey;
      const self = this;
      function detectKey(e) {
        e = e || window.event;
  
        if (e.keyCode == "38" && self.checkBorders()) {
          // up arrow
          self.inputY = -1;
        } else if (e.keyCode == "40" && self.checkBorders()) {
          // down arrow
          self.inputY = 1;
        } else if (e.keyCode == "37" && self.checkBorders()) {
          // left arrow
          self.inputX = -1;
        } else if (e.keyCode == "39" && self.checkBorders()) {
          // right arrow
          self.inputX = 1;
        }
        self.movePlayer();
        self.inputX = 0;
        self.inputY = 0;
      }
    }

    checkBorders() {
      if(this.posY-this.speed < 0){
        this.posY += 1;
        return false;
      }
      if(this.posY+ this.speed > 380){
        this.posY -= 1;
        return false;
      }
      if(this.posX+ this.speed > 380){
        this.posX -= 1;
        return false;
      }
      if(this.posX - this.speed < 0){
        this.posX += 1;
        return false;
      }
      return true;
    }
}
let playerContainer = document.getElementById('player');
let newPlayer = new Player(playerContainer);
newPlayer.getInput();