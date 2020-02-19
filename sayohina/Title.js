class Title extends Phaser.Scene {

    constructor() {
        super("title");
    }

    create() {

        // background
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);

        // hina neko
        this.player = this.add.sprite(config.width/2 + 200, config.height-335, "neko");
        this.player.play("neko_anim");
        this.player.setScale(img_config.neko_scale);
        
        // Start button
        this.startBtn = this.add.sprite(config.width/2, config.height/2-130, "button").setOrigin(0.5, 0.5);
        this.startBtn.setInteractive();
        this.startLable = this.add.text(config.width/2, config.height/2-120, 'START', {
            fontFamily: 'Flatwheat',
            fontSize: 50,
            align: 'center',
            color: '#3b6668'
        }).setOrigin(0.5, 0.5);;
        this.startBtn.on('pointerover', () => {
            this.startBtn.setTexture("button_hover");
            this.startLable.setColor('#ffffff');
        });
        this.startBtn.on('pointerout', () => {
            this.startBtn.setTexture("button");
            this.startLable.setColor('#3b6668');
        });
        this.startBtn.on('pointerup', () => {
            this.scene.start("playGame");
        });

        // How to play button
        this.readmeBtn = this.add.sprite(config.width/2, config.height/2+50, "button");
        this.readmeBtn.setInteractive();
        this.readmeLabel = this.add.text(config.width/2, config.height/2+63, 'HOW TO PLAY', {
            fontFamily: 'Flatwheat',
            fontSize: 40,
            align: 'center',
            color: '#3b6668'
        }).setOrigin(0.5, 0.5);;
        this.readmeBtn.on('pointerover', () => {
            this.readmeBtn.setTexture("button_hover");
            this.readmeLabel.setColor('#ffffff');
        });
        this.readmeBtn.on('pointerout', () => {
            this.readmeBtn.setTexture("button");
            this.readmeLabel.setColor('#3b6668');
        });


        // UI text
        this.titleLabel = this.add.text(config.width/2, 250, 'Hina Neko\'s\nAdventure', {
            fontFamily: 'Flatwheat',
            fontSize: 100,
            align: 'center',
            strokeThickness: 1,
            stoke: '#fff',
            boundsAlignH: "center"
        }).setOrigin(0.5, 0.5);;
    }
}