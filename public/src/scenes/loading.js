class loading extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(0, 280, 0, 0);
        
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
       /* var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: 'cyan'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        */
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: 'greenyellow'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
      /*  var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: 'gold'
            }
        });
        assetText.setOrigin(0.5, 0.5);
        */
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0x009688, 1);
            progressBar.fillRect(0, 280, 1000 * value, 30);
        });
        
        /*this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });*/
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            /*loadingText.destroy();*/
            percentText.destroy();
            /*assetText.destroy();*/
        });


        // loading ...
        this.load.image("Logo_tvshowDemo","atlas/Logo_tvshow.png");
        this.load.image("Logo_tvshow","atlas/Logo_Jcave.png");
        this.load.image("closed","atlas/closed.png");
        this.load.image("airadventurelevel3","atlas/background/airadventurelevel3.png");
        this.load.image("SnowFlake","atlas/SnowFlake.png");
        this.load.image("Border","assets/btn/Border.png");
        this.load.image("ic_138","assets/ps/138.png");
        this.load.image("FelisChaus_ParchmentBackground","assets/ps/FelisChaus_ParchmentBackground.jpg");
        this.load.image("play_btn","assets/btn/play.png");
        this.load.image("deadline","assets/ps/deadline.png");
        this.load.image("SJcave","assets/ps/S-Jcave.png");
        // audio

        this.load.audio("menu_audio","audio/Adventure Theme Intro.wav");
        this.load.audio("Siwa_Island","audio/Siwa Island.mp3");

        // other
        this.load.html("form","form.html");

    }

    create() {
        this.scene.start("mainMenu");
    }

}
