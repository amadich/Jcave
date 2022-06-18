class menu_main extends Phaser.Scene {
    constructor() {
        super("mainMenu");
    }

    create() {

        // saound
        this.sound.pauseOnBlur = false;
        let menu_audio = this.sound.add("menu_audio");
        let musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0 ,
            loop: true,
            delay: 0
        }
        menu_audio.play(musicConfig);

        // cursor

        this.input.setDefaultCursor('url(assets/input/cursors/2392.png), pointer');

        // background
        let bg_menu = this.add.image(0,0,"airadventurelevel3")
        .setOrigin(0, .0)
        .setScale(.6);

        // Logo

        logo_menu = this.add.image(500,0,"Logo_tvshow");

        this.tweens.add({
            targets: logo_menu,
            y: 150,
            ease: 'Power1',
            duration: 3000,
            yoyo: false,
            //repeat: 1,
        });


      


        // User InterFace (UI)
        let FelisChaus_ParchmentBackground = this.add.image(500,450,"FelisChaus_ParchmentBackground").setScale(.8).setAlpha(.05).setAngle(90);
        let ic_138 = this.add.image(310,400,"ic_138");
        let Border1 = this.add.image(500,400,"Border").setScale(.2);
        let Border2 = this.add.image(500,460,"Border").setScale(.2);

        deadline = this.add.image(500,450,"deadline");
        deadline.setScale(.1);
        deadline.setVisible(false);

        LoginInput_User = this.add.dom(380,350).createFromCache("form").setOrigin(0.5);

        // btn_play
        let btn_play = this.add.image(500,500,"play_btn").setScale(.2);
        btn_play.setInteractive();

        btn_play.on("pointerdown", () => {
            btn_play.setVisible(false);
            LoginInput_User.setVisible(false);
            Border1.setVisible(false);
            Border2.setVisible(false);
            ic_138.x = 500;
            console.log("Joined ...");

            deadline.setVisible(true);

            //

            // add effected Join Option  (choix)

            menu_audio.stop();


            let choix_audio = this.sound.add("Siwa_Island");
            choix_audio.play(musicConfig);

            particles_rain.destroy();

        let particles_o = this.add.particles('SnowFlake');
        particles_o.setInteractive();
       
        po = particles_o.createEmitter({
            x: 0,
            y: { min: 0, max: 2000 },
            lifespan: 2000,
            speedX: { min: 200, max: 800 },
            scale: { start: 1, end: 0 },
            quantity: 100,
            blendMode: 'ADD'
        });

/*
        this.time.delayedCall(3000, function() {
            
        });

*/

        setTimeout(() => {
            po.x.propertyValue = 1000; 
            setTimeout(() => {
                this.scene.start("choixMenu")
            }, 2000);
        }, 3000);


        })


        this.tweens.add({
            targets: btn_play,
            //x: 500,
            y: 550,
            ease: 'Power1',
            duration: 3000,
            yoyo: false,
            //repeat: 1,
        });


        // End ui


        // add effected

        particles_rain = this.add.particles('SnowFlake');
        particles_rain.setInteractive();
        pr = particles_rain.createEmitter({
            x: {min: 0, max: 1000},
            y: 12,
            lifespan: 1000,
            speedY: 800,
            scaleY: .5,
            scaleX: .01,
            quantity: 10,
            blendMode: 'ADD' // LIGHTEN
        });





        



                // Full screen Page
                var FKey = this.input.keyboard.addKey('N');

                FKey.on('down', function () {
        
                    if (this.scale.isFullscreen)
                    {
                        //button.setFrame(0);
                        this.scale.stopFullscreen();
                    }
                    else
                    {
                       // button.setFrame(1);
                        this.scale.startFullscreen();
                    }
        
                }, this);
                // End Full_Screen
        

        
    }

    update() {
        deadline.rotation += 0.1;
    }

}