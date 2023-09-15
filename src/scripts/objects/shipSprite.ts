import BulletSprite from './bulletSprite';

export default  class ShipSprite extends Phaser.Physics.Arcade.Sprite{
  WKey: Phaser.Input.Keyboard.Key;
  AKey: Phaser.Input.Keyboard.Key;
  DKey: Phaser.Input.Keyboard.Key;
  SPACEKey: Phaser.Input.Keyboard.Key;
  body: Phaser.Physics.Arcade.Body;
  bullets: BulletSprite[];

  constructor(scene: Phaser.Scene, x:number, y:number){
    super(scene,x,y, 'ship');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.setDrag(300,300);
    this.body.setAngularDrag(400);
    this.body.setMaxVelocity(600);
    this.body.setAcceleration(0,0);
    this.body.setAngularVelocity(0);

    this.setAngle(-90);
    this.setScale(0.5);

      this.bullets = [];

    this.WKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.AKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.DKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.SPACEKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update(){
    if(this.WKey.isDown){
        this.scene.physics.velocityFromRotation(this.rotation, 600, this.body.acceleration);
    }else{
      this.body.setAcceleration(0,0);
    }

    if(this.AKey.isDown){
      this.body.setAngularVelocity(-150);
    }else if (this.DKey.isDown) {
      this.body.setAngularVelocity(150);
    }else{
      this.body.setAngularVelocity(0);
    }

    if(this.SPACEKey.isDown){
    console.log('firer');
        const bullet = new BulletSprite(this.scene);
        this.bullets.push(bullet);

        bullet.fire(this.x, this.y, this.body.rotation)

        
    }
  }
}