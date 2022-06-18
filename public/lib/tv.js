const config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    dom: {
        createContainer: true
    },
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1000,
        height: 600
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    backgroundColor: "#75b298",
    scene: [loading,menu_main,menu_choix]
}
let game = new Phaser.Game(config);
let logo_menu;
let pr;
let po;
let particles_rain;
let LoginInput_User;
let deadline;