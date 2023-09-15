import ShipSprite from '../objects/shipSprite';

export default class MainScene extends Phaser.Scene {
  fpsText

  ship:ShipSprite;
  background: Phaser.GameObjects.TileSprite;

  constructor() {
    super({ key: 'MainScene' })
  }

  preload(){
    this.load.image('ship', 'assets/img/pepe.png');
    this.load.image('background','assets/img/blue.png');
    this.load.image('bullet', 'assets/img/laser.png');
  }

  create() {
    this.background = this.add.tileSprite(0,0, this.cameras.main.width, this.cameras.main.height, 'background');
    this.background.setOrigin(0,0);
    this.ship = new ShipSprite(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
  }

  update(){
    this.ship.update();
  }

}