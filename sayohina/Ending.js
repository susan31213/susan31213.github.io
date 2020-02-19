class Ending extends Phaser.Scene {

    constructor() {
        super("ending");
    }

    init(data) {
        if(data.score != undefined)
            this.score = data.score;
        else
            this.score = 0;
    }

    create() {

        console.log(this.sys.game.device.input.touch);

        // background
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);
        this.add.image(445, 980, "french-fries").angle = 5;
        this.add.image(395, 980, "french-fries").angle = 355;
        this.add.image(335, 980, "french-fries").angle = 350;
        this.candy = [this.add.image(280, 990, "candy"), this.add.image(280, 1010, "candy"), this.add.image(325, 1010, "candy"), this.add.image(370, 1010, "candy")]
        this.candy[0].angle = 180;
        this.candy[1].angle = 270;
        this.candy[2].angle = 200;
        this.candy.forEach(element => {
            element.setScale(0.8);
        });
        this.add.image(470, 1005, "burger_drink");
        this.add.image(420, 1005, "burger_drink");

        this.rightBtn = this.add.image(540, 1210, "right");
        this.leftBtn = this.add.image(180, 1210, "right");
        this.leftBtn.flipX = true;

        this.leftPressing = false;
        this.rightPressing = false;

        this.rightBtn.setInteractive();
        this.leftBtn.setInteractive();
        this.leftBtn.on('pointerdown', () => {
            this.leftPressing = true;
        });
        this.leftBtn.on('pointerout', () => {
            this.leftPressing = false;
        });
        this.rightBtn.on('pointerdown', () => {
            this.rightPressing = true;
        });
        this.rightBtn.on('pointerout', () => {
            this.rightPressing = false;
        });

        this.porinterStatusLabel = this.add.text(config.width/2, config.height/2-100, '', {
            fontFamily: 'Flatwheat',
            fontSize: 30,
            align: 'center',
            color: '#000000'
        }).setOrigin(0.5,0.5);
        

        // hina neko
        this.player = this.add.sprite(config.width/2 + 250, config.height-370, "celebrate_neko");
        this.player.play("celebrate_anim");
        this.player.setScale(1);
        
        // Input
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        
        // back button
        this.backBtn = this.add.sprite(config.width/2, config.height/2+138, "button").setOrigin(0.5, 0.5);
        this.backBtn.setInteractive();
        this.backLabel = this.add.text(config.width/2, config.height/2+148, 'BACK', {
            fontFamily: 'Flatwheat',
            fontSize: 50,
            align: 'center',
            color: '#3b6668'
        }).setOrigin(0.5, 0.5);
        this.backBtn.on('pointerover', () => {
            this.backBtn.setTexture("button_hover");
            this.backLabel.setColor('#ffffff');
        });
        this.backBtn.on('pointerout', () => {
            this.backBtn.setTexture("button");
            this.backLabel.setColor('#3b6668');
        });
        this.backBtn.on('pointerup', () => {
            this.scene.start("title");
        });

        // UI text
        this.titleLabel = this.add.text(config.width/2, 150, 'Congratulations!', {
            fontFamily: 'Flatwheat',
            fontSize: 80,
            align: 'center',
            strokeThickness: 1,
            stoke: '#fff'
        }).setOrigin(0.5, 0.5);

        this.yourScoreLabel = this.add.text(config.width/2-150, 275, 'Your score is...', {
            fontFamily: 'Flatwheat',
            fontSize: 40,
            align: 'center',
            strokeThickness: 1,
            stoke: '#fff'
        }).setOrigin(0.5, 0.5);

        this.scoreLabel = this.add.text(config.width/2, 430, ''+this.score, {
            fontFamily: 'Flatwheat',
            fontSize: 150,
            align: 'center',
            color: '#3b6668',
            boundsAlignH: "center", 
            boundsAlignV: "middle"
        }).setOrigin(0.5, 0.5);
        
        // social buttons
        this.fbBtn = this.add.image(config.width/2 - 150, 650, "fb");
        this.fbBtn.setInteractive();
        this.fbBtn.on('pointerover', () => {
            this.fbBtn.setScale(1.2);
        });
        this.fbBtn.on('pointerout', () => {
            this.fbBtn.setScale(1.0);
        });
        this.fbBtn.on('pointerup', () => {
            window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.google.com%2F&quote=I%20got%20"+this.score+"%20points%20in%20Hina%20Neko's%20Adventure!", "_blank", "toolbar=0,status=0")
        });
        this.twitterBtn = this.add.image(config.width/2 - 50, 650, "twitter");
        this.twitterBtn.setInteractive();
        this.twitterBtn.on('pointerover', () => {
            this.twitterBtn.setScale(1.2);
        });
        this.twitterBtn.on('pointerout', () => {
            this.twitterBtn.setScale(1.0);
        });
        this.twitterBtn.on('pointerup', () => {
            window.open("https://twitter.com/intent/tweet?text=I%20got%20"+this.score+"%20points%20in%20Hina%20Neko's%20Adventure!%20https%3A%2F%2Fwww.google.com%2F", "_blank", "toolbar=0,status=0")
        });
        this.plurkBtn = this.add.image(config.width/2 + 50, 650, "plurk");
        this.plurkBtn.setInteractive();
        this.plurkBtn.on('pointerover', () => {
            this.plurkBtn.setScale(1.2);
        });
        this.plurkBtn.on('pointerout', () => {
            this.plurkBtn.setScale(1.0);
        });
        this.plurkBtn.on('pointerup', () => {
            window.open('http://www.plurk.com/?qualifier=shares&status='.concat(encodeURIComponent('http://www.google.com')).concat(encodeURIComponent("\nI got "+this.score+" points in Hina neko's Adventure!")))
        });
        this.weiboBtn = this.add.image(config.width/2 + 150, 650, "weibo");
        this.weiboBtn.setInteractive();
        this.weiboBtn.on('pointerover', () => {
            this.weiboBtn.setScale(1.2);
        });
        this.weiboBtn.on('pointerout', () => {
            this.weiboBtn.setScale(1.0);
        });
        this.weiboBtn.on('pointerup', () => {
            window.open("http://service.weibo.com/share/share.php?url=http://www.google.com&appkey=&title=I got "+this.score+" points in Hina neko\'s Adventure!&pic=&ralateUid=&")
        });
        this.shareLabel = this.add.text(config.width/2, 580, 'share your score!', {
            fontFamily: 'Flatwheat',
            fontSize: 30,
            align: 'center',
            color: '#3b6668',
            boundsAlignH: "center", 
            boundsAlignV: "middle"
        }).setOrigin(0.5, 0.5);
    }

    update() {
        this.porinterStatusLabel.text = "touch: " + this.sys.game.device.input.touch + ", right: " + this.rightPressing + ", left: " + this.leftPressing;
    }
}