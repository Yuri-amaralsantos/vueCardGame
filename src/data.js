let sk1 = { name: 'atk1', cost: 1, damage: 2 };
let sk2 = { name: 'atk2', cost: 2, damage: 4 };

let ch1 = {
  name: 'warrior',
  hp: 2,
  atk: 1,
  cost: 1,
};

let ch2 = {
  name: 'archer',
  hp: 1,
  atk: 3,
  cost: 2,
};

class Player {
  target = 0;
  board = []
  hand = [{ ...ch2 },{ ...ch1 }, { ...ch1 }];
}

class Bot {
  board = [{ ...ch2 }]
}

class Game {
  player = new Player();
  bot = new Bot();
  energy = 1;

  play(index) {
    this.player.board.push(this.player.hand[index])
    this.player.hand.splice(index,1)
  }

  turn() {
    alert("turn passed")
  }

 
}

export const game = new Game();
