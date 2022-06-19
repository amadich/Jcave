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
    scene: [{preload: preload,create:create},loading,menu_main,menu_choix]
}
let game = new Phaser.Game(config);
let logo_menu;
let pr;
let po;
let particles_rain;
let LoginInput_User;
let deadline;


function preload() {
    this.load.image("loadlogo","atlas/Logo_Jcave.png");
}

function create() {
    this.scene.start("bootGame");
}
