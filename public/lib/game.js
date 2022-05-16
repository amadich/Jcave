const config = {
    type: Phaser.WEBGL,
    type: Phaser.AUTO,
    pixelArt: true,
    //zoom: 1.4,
    //width: 800,
    //height: 700,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: 'phaser-example',
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 800,
      height: 700
  },
    backgroundColor : "8f563b",
    physics: {
        default: 'arcade',
        arcade: {
          tileBias: 4,
          debug: false,
        }
      },
    
      scene: [
        loading_scene,
        spawn,
    ]
    
}
let game = new Phaser.Game(config);
let bat = [];
let chat_need;
let player;
let sara;
let tom;
let backpack;
let cursors;
let Turn_Icon;
let Border;
let bar_lvl;
let master_level;
let x_lvl;
let clac_lvl;
let container_alert;
let alert_msg = ["تم فصل الأتصال", "حدث خطأ", "تم حظرك" , "ممنوع الشتيمة", "أهدأ قليلا ... ","موافق"];
let e_3; // btn_gold
let error_wait;
let packin_container;