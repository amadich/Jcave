class loading_scene extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(0, 280, 800, 10);
        
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 100,
            text: '...جاري تحميل الملفات',
            image : "https://tweegee.su/headerH/menu/favicon.ico",
            style: {
                font: '20px monospace',
                fill: '#222'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#222'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#8f563b'
            }
        });
        assetText.setOrigin(0.5, 0.5);
        
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(0, 280, 800 * value, 10);
        });
        
        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });


        this.load.image("tiles","public/assets/cave_tileset.png");
        this.load.tilemapTiledJSON("cave","public/assets/cave.json");
        //
        this.load.image("background","public/assets/JWDLx5AZBtI.jpg");
        this.load.image("city","public/assets/city.png");
        this.load.image("moon","public/assets/moon.png");
        this.load.image("space4","public/assets/spaces/space4.png");
        this.load.image("shadow","public/assets/shadow.png");

        // btn

        this.load.image("Turn","public/assets/btn/Turn_Icon.png");
        this.load.image("Border","public/assets/btn/Border.png");
        this.load.image("purple_start","public/assets/btn/Purple Star Icon.png");
        this.load.image("purple_start1","public/assets/btn/Purple Star Icon 2.png");

        // bat

        this.load.atlas("bat","public/assets/sprites/bat.png","public/assets/sprites/bat.json");
        //

        this.load.atlas("alert","public/assets/sprites/alert.png","public/assets/sprites/alert.json");
        this.load.atlas("error_wait","public/assets/sprites/error_wait.png","public/assets/sprites/error_wait.json");
        this.load.atlas("chat_need","public/assets/sprites/chat_need.png","public/assets/sprites/chat_need.json");

        this.load.atlas("sara","public/assets/sprites/sara.png","public/assets/sprites/sara.json");
        this.load.atlas("tom","public/assets/sprites/tom.png","public/assets/sprites/tom.json");
        this.load.atlas("objets","public/assets/sprites/objets.png","public/assets/sprites/objets.json");
        this.load.plugin('rexoutlinepipelineplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexoutlinepipelineplugin.min.js', true);

        // ps

        this.load.image("head_sara","public/assets/ps/sara.png");
        this.load.image("packin","public/assets/ps/packin.png");
        this.load.image("packin_c","public/assets/ps/packin_c.png");
        this.load.image("next","public/assets/ps/next.png");


    }
    create() {
        this.scene.start("playGame");
    }
}