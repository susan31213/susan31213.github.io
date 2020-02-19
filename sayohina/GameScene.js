class GameScene extends Phaser.Scene {

    constructor() {
        super("playGame");
    }

    create() {

        // background
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);

        // hina neko
        this.player = this.physics.add.sprite(config.width/2, config.height-335, "neko");
        this.player.body.setSize(95,180, true);
        this.player.play("neko_anim");
        this.player.setScale(img_config.neko_scale);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);
        this.playerSpeed = gameSetting.playerInitSpeed;
        
        // UI text
        this.add.image(30,35, "clock").setDepth(1);
        this.add.image(30,85, "basket").setDepth(1);

        this.timeCountdown = gameSetting.time;
        this.timeLabel = this.add.text(60, 15, '120 sec', {
            fontFamily: 'Flatwheat',
            fontSize: 40
        });
        this.timeLabel.setDepth(1);
        this.time.addEvent({ delay: 1000, callback: this.timeCountdownTick, callbackScope: this, loop: true});

        this.score = 0;
        this.scoreLabel = this.add.text(60, 65, '0 pt', {
            fontFamily: 'Flatwheat',
            fontSize: 40
        });
        this.scoreLabel.setDepth(1);



        // Food
        this.foods_instance = this.add.group(); 
        // create food timer
        this.time.addEvent({ delay: 800, callback: this.item_tick, callbackScope: this, loop: true });

        // Power ups
        this.powerUps = this.physics.add.group();
        // create power-up timer
        this.time.addEvent({ delay: 10000, callback: this.powerUp_tick, callbackScope: this, repeat: 10});
        this.time.delayedCall(100000, () => {
            this.time.addEvent({ delay: 4750, callback: this.powerUp_tick, callbackScope: this, loop: true});
        }, null, this);
        this.powerfulTimer = 0;
    
        
        // Make player be able to collect food
        this.physics.add.overlap(this.player, this.foods_instance, this.pickFood, null, this);

        // Make player can eat speedUp
        this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, null, this);
    }

    update(time, delta) {

        // check game over
        if(this.timeCountdown <= 0) {
            this.scene.start("ending", {score: this.score});
        }

        // Player move
        this.movePlayerManager();

        // Food fall down
        for(var i = 0; i<this.foods_instance.getChildren().length; i++) {
            var food = this.foods_instance.getChildren()[i];
            food.update(this);
        }

        // Text update
        this.timeLabel.text = this.timeCountdown + " sec";
        this.scoreLabel.text = this.score + " pt";

        // PowerUp timer
        if(this.powerfulTimer > 0) {
            this.powerfulTimer -= delta;
            if(this.powerfulTimer <= 0) {
                this.playerSpeed = gameSetting.playerInitSpeed;
                this.player.anims.play("neko_anim");
                this.player.anims.msPerFrame = 200;
            }
        }
    }

    movePlayerManager() {

        console.log(this.player.anims.currentAnim.key);

        if(this.player.alpha < 1) {
            this.player.setVelocity(0);
            if (this.player.anims.isPlaying) {
                this.player.anims.stop(this.player.anims.currentAnim.key);
            }
            return;
        }

        if(this.cursorKeys.left.isDown) {
            this.player.flipX = false;
            if (!this.player.anims.isPlaying) {
                this.player.anims.play(this.player.anims.currentAnim.key);
            }
            this.player.setVelocityX(-this.playerSpeed);
        }
        else if (this.cursorKeys.right.isDown) {
            this.player.flipX = true;
            if (!this.player.anims.isPlaying){
                this.player.anims.play(this.player.anims.currentAnim.key);
            }
            this.player.setVelocityX(this.playerSpeed);
        }
        else {
            this.player.setVelocity(0);
            this.player.anims.stop(this.player.anims.currentAnim.key);
        }
    }

    resetPlayer() {
        this.player.alpha = 1;
    }

    timeCountdownTick() {
        this.timeCountdown--;
    }

    item_tick() {
        var food = new Food(this);
    }

    powerUp_tick() {
        var powerUp = new SpeedUp(this);
    }

    // Pick food
    pickFood(player, food) {
        
        if(player.alpha < 1) return;
        
        switch (food.type) {
            case 0:
                // candy
                this.score += 10;
                break;
            case 1:
                // carrot
                this.score -= 30;
                break;
            case 2:
                // chicken-leg
                this.score += 15;
                break;
            case 3:
                // burger_drink
                this.score += 20;
                break;
            case 4:
                // french-fries
                this.score += 50;
                break;
            case 5:
                // poop
                player.alpha = 0.5;
                this.time.addEvent({
                    delay: 3000,
                    callback: this.resetPlayer,
                    callbackScope: this,
                    loop: false
                });
                break;
            case 6:
                // to-fu
                this.score -= 30;
                break;
        }


        food.destroy();
    }

    pickPowerUp(player, powerUp) {

        if(player.alpha < 1) return;

        this.powerfulTimer = gameSetting.playerPowerfulTime_max;
        this.playerSpeed *= 2;
        this.player.anims.play("fireneko_anim");
        this.player.anims.msPerFrame = 30000 / this.playerSpeed;
        powerUp.disableBody(true, true);
    }

    endGame() {
        this.input.keyboard.shutdown();

    }
}

