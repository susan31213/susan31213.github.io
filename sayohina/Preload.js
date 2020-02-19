class Preload extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }

    preload() {

        // buttons img
        this.load.image("button", "assets/images/button_1.png");
        this.load.image("button_hover", "assets/images/button_2.png");
        this.load.image("right", "assets/images/grey_sliderRight.png");

        this.load.image("background", "assets/images/bg.png");

        // hina neko
        this.load.spritesheet("neko", "assets/images/neko.png", {
            frameWidth: 148, 
            frameHeight: 224
        });
        this.load.spritesheet("celebrate_neko", "assets/images/neko_celebrate.png", {
            frameWidth: 154, 
            frameHeight: 253
        });

        // time and score icon
        this.load.image("clock", "assets/images/clock.png");
        this.load.image("basket", "assets/images/picnic-basket.png");

        // food img
        this.load.image("candy", "assets/images/candy.png");
        this.load.image("carrot", "assets/images/carrot.png");
        this.load.image("chicken-leg", "assets/images/chicken-leg.png");
        this.load.image("burger_drink", "assets/images/burger_drink.png");
        this.load.image("french-fries", "assets/images/french-fries.png");
        this.load.image("poop", "assets/images/poop.png");
        this.load.image("to-fu", "assets/images/to-fu2.png");

        // power-up item
        this.load.image("angel", "assets/images/angel.png");

        // social buttons
        this.load.image("fb", "assets/images/facebook.png");
        this.load.image("twitter", "assets/images/twitter.png");
        this.load.image("plurk", "assets/images/plurk.png");
        this.load.image("weibo", "assets/images/weibo.png");
        
    }

    create() {
        this.add.text(20,20,"Loading game...");
        this.scene.start("title");

        // hina neko animation

        this.anims.create({
            key: "neko_anim",
            frames: this.anims.generateFrameNumbers("neko", {
                start: 0,
                end: 1
            }),
            frameRate: 5,
            repeat: -1,
        });
        this.anims.create({
            key: "fireneko_anim",
            frames: this.anims.generateFrameNumbers("neko", {
                start: 2,
                end: 3
            }),
            frameRate: 5,
            repeat: -1,
        });
        this.anims.create({
            key: "celebrate_anim",
            frames: this.anims.generateFrameNumbers("celebrate_neko"),
            frameRate: 3,
            repeat: -1,
        });
    }
}