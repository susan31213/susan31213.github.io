var gameSetting = {
    time: 120,
    playerInitSpeed: 150,
    playerPowerfulTime_max: 5000,
    speedUpLifeTime: 5000,
    food_type: ["candy", "carrot", "chicken-leg", "burger_drink", "french-fries", "poop", "to-fu"],
}

var img_config = {
    neko_x: 148,
    neko_y: 244,
    neko_scale: 0.8,
    item_x: 64,
    item_y: 64,
}

var config = {
    width: 720,
    height: 1280,
    backgroundColor: 0x000000,
    scene: [Preload, Title, Readme, GameScene, Ending],
    physics: {
        default: "arcade",
        arcade:{
            debug: false
        }
    }
}

var game = new Phaser.Game(config);