export default class BulletSprite extends Phaser.Physics.Arcade.Sprite{

  speed: number;
    constructor(scene, x = 0, y = 0, key = 'bullet'){
      super(scene, x, y, key);

      this.scene.physics.world.enableBody(this);
      this.scene.add.existing(this);

      this.speed = 1000;
    }

    public fire(shipX, shipY, shipRotation){
      const angle = Phaser.Math.DegToRad(shipRotation);
      this.setAngle(shipRotation);
      this.setPosition(shipX, shipY);
      this.body.reset(shipX, shipY);

      this.scene.physics.velocityFromRotation(angle, this.speed, this.body.velocity);
    }
}