class spawn extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {


        

        // animation of objets

        this.anims.create({
            key: "backpack",
            frameRate: 10,
            frames: this.anims.generateFrameNames("objets", {
                //prefix: "-",
                suffix: ".png",
                start: 1,
                //end: 7,
                zeroPad: 2
            }),
            repeat: 1
        });


        // animation of objets

        this.anims.create({
            key: "objet_1",
            frameRate: 10,
            frames: this.anims.generateFrameNames("objets", {
                //prefix: "-",
                suffix: ".png",
                start: 8,
                //end: 7,
                zeroPad: 2
            }),
            repeat: 1
        });
        
         // animation of bat

         this.anims.create({
            key: "bat",
            frameRate: 10,
            frames: this.anims.generateFrameNames("bat", {
                //prefix: "-",
                suffix: ".png",
                start: 4,
                end: 7,
                zeroPad: 2
            }),
            repeat: -1
        });

        // animation of tom_move 

        this.anims.create({
            key: "walk_tom",
            frameRate: 10,
            frames: this.anims.generateFrameNames("tom", {
                //prefix: "-",
                suffix: ".png",
                start: 173, // 225
                end: 174, // 233
                zeroPad: 3
            }),
            repeat: -1
        });


         // animation of sara_salut 

         this.anims.create({
            key: "sara_salut",
            frameRate: 10,
            frames: this.anims.generateFrameNames("sara", {
                //prefix: "-",
                suffix: ".png",
                start: 199, // 225
                end: 200, // 233
                zeroPad: 3
            }),
            repeat: 3
        });


        // animation of sara_move 

        this.anims.create({
            key: "walk_sara",
            frameRate: 10,
            frames: this.anims.generateFrameNames("sara", {
                //prefix: "-",
                suffix: ".png",
                start: 143,
                end: 151,
                zeroPad: 3
            }),
            repeat: 0
        });



        // animation of sara_drop 

        this.anims.create({
            key: "sara_drop",
            frameRate: 10,
            frames: this.anims.generateFrameNames("sara", {
                //prefix: "-",
                suffix: ".png",
                start: 91,
                end: 98,
                zeroPad: 3
            }),
            repeat: 0
        });



        // animation of sara_swip 

        this.anims.create({
            key: "sara_swip",
            frameRate: 10,
            frames: this.anims.generateFrameNames("sara", {
                //prefix: "-",
                suffix: ".png",
                start: 260,
                end: 263,
                zeroPad: 3
            }),
            repeat: 0
        });


        // animation of sara_swip (-1)

        this.anims.create({
            key: "sara_swip-1",
            frameRate: 10,
            frames: this.anims.generateFrameNames("sara", {
                //prefix: "-",
                suffix: ".png",
                start: 263,
                end: 260,
                zeroPad: 3
            }),
            repeat: 0
        });



        


        // animation of sara_afk

        this.anims.create({
            key: "sara_afk",
            frameRate: 10,
            frames: this.anims.generateFrameNames("sara", {
                //prefix: "-",
                suffix: ".png",
                start: 39,
                end: 41,
                zeroPad: 3
            }),
            repeat: 0
        });





        // animation of alert_placed

        this.anims.create({
            key: "placed",
            frameRate: 10,
            frames: this.anims.generateFrameNames("alert", {
                prefix: "placed-",
                suffix: ".png",
                //start: 1,
                //end: 7,
                //zeroPad: 2
            }),
            repeat: 1
        });

         // animation of alert_task

         this.anims.create({
            key: "task",
            frameRate: 10,
            frames: this.anims.generateFrameNames("alert", {
                prefix: "task-",
                suffix: ".png",
                //start: 1,
                //end: 7,
                //zeroPad: 2
            }),
            repeat: 1
        });




         // animation of alert_btn_gold

         this.anims.create({
            key: "btn_gold",
            frameRate: 10,
            frames: this.anims.generateFrameNames("alert", {
                prefix: "btn_gold-",
                suffix: ".png",
                //start: 1,
                //end: 7,
                //zeroPad: 2
            }),
            repeat: 1
        });


         // animation of alert - vp

         this.anims.create({
            key: "vp",
            frameRate: 10,
            frames: this.anims.generateFrameNames("alert", {
                prefix: "vp-",
                suffix: ".png",
                //start: 1,
                //end: 7,
                //zeroPad: 2
            }),
            repeat: 1
        });


         // animation of alert - close btn

         this.anims.create({
            key: "btn_close",
            frameRate: 10,
            frames: this.anims.generateFrameNames("alert", {
                prefix: "close-",
                suffix: ".png",
                //start: 1,
                //end: 7,
                //zeroPad: 2
            }),
            repeat: 1
        });



        // animation of error_wait

        this.anims.create({
            key: "error_wait",
            frameRate: 12,
            frames: this.anims.generateFrameNames("error_wait", {
                //prefix: "-",
                suffix: ".png",
                start: 1,
                end: 24,
                //zeroPad: 2
            }),
            repeat: -1
        });


        // animation of chat_need

        this.anims.create({
            key: "chat_need",
            frameRate: 30,
            frames: this.anims.generateFrameNames("chat_need", {
                //prefix: "-",
                suffix: ".png",
                start: 1,
                end: 34,
                //zeroPad: 2
            }),
            repeat: -1
        });






    }

    create() {

        





            var postFxPlugin = this.plugins.get('rexoutlinepipelineplugin');
        // tiles
        const map = this.make.tilemap({ key:'cave', tileWidth: 32, tileHeight: 32});
        const tileset = map.addTilesetImage("mycave","tiles");
        const layer = map.createLayer("back", tileset ,0, 0).setScale(1.3);
        // background
        //this.add.image(300,300,"background");
        this.add.image(100,100,"space4").setScale(2);
        this.add.image(200,200,"space4").setScale(5);
        this.add.image(300,300,"space4").setScale(2);
        this.add.image(1000,100,"space4").setScale(5);
                // moon
        let moon = this.add.image(100,100,"moon");
        moon.setScale(.3);
       

        // 
        this.add.image(200,520,"city");
        this.add.image(600,520,"city");
        this.add.image(800,520,"city");

        //
        map.setCollisionBetween(1, 200, true, 'back');
        const layer1 = map.createLayer("layer1", tileset ,0, 0)
        const layer2 = map.createLayer("layer2", tileset ,0, 0)
        const layer3 = map.createLayer("layer3", tileset ,0, 0)
       
        const layer4 = map.createLayer("layer4", tileset ,0, 0)
        let shadow = this.add.image(0,410,"shadow");
        shadow.setAlpha(.1)
        const taps = map.createLayer("taps", tileset ,0, 0);
        const layer5 = map.createLayer("torsh", tileset ,0, 0)


        // add bats

       for(let i = 0 ; i <= 10 ; i++) {
            bat[i] = this.physics.add.sprite(-(300*i)-25,550,"bat").anims.play("bat",true);
            bat[i].setGravityX(Math.floor(Math.random()*50));
            bat[i].setGravityY(-5);

            setTimeout(() => {
                bat[i].flipX = true;
                bat[i].setGravityX(Math.floor(Math.random()*(-50)));
                bat[i].setGravityY(+5);


                

            },11000)

       }


       // ================================

        tom = this.add.sprite(740,385,"tom");
        tom.anims.play("walk_tom",true);
       //tom.flipX = true;
       tom.setInteractive();



       // add player [sara]

        sara = this.physics.add.sprite(0,0,"sara"); // 100 418
        sara.anims.play("sara_swip",true);
        setTimeout(() => {
            sara.anims.play("sara_swip-1",true);
        },1000)
        sara.setSize(32,64);
        //sara.setCollideWorldBounds(true);
    //    sara.setPipeline("outline");
       sara.setInteractive();
      /* sara.on('pointerover', function () {
        // Add postfx pipeline
        postFxPlugin.add(gameObject, {
            thickness: 3,
            outlineColor: 0xff8a50
        });
    }
       ) */



       


        //  Create animation player Sara [Drop objet , salut ami ... ] ! 

    
    // Drop objet animation ! 
        this.input.keyboard.on("keydown-A", () => {
            sara.anims.play("sara_drop",true);
           
            if (player.x === 240) {
                sara.on("animationcomplete", ()=> {
                    //taps.setVisible(false);
                    try {
                        colliderObject.destroy();
                    taps.destroy();
                    } catch (error) {
                        // Error find a solution !! please
                    }
                })
            }
            
        });
    

    // Salut ami animation ! 
        this.input.keyboard.on("keydown-S", () => {
            sara.anims.play("sara_salut",true);
        })





        // Sara- Swip (sara_swip)

        this.input.keyboard.on("keydown-D", () => {
            //player.body.setVelocityX(90);
            sara.anims.play('sara_swip', true);
            //sara.flipX = false;
        })




         // sara_afk

         this.input.keyboard.on("keydown-Q", () => {
            
            sara.anims.play('sara_afk', true);
            
        })


        //
       
        chat_need = this.add.sprite(0,-40,"chat_need");
        chat_need.anims.play("chat_need",true);
       

        player = this.add.container(100,418, [ chat_need ,  sara  ]);
        player.setSize(32,64);
        this.physics.world.enable(player);
        player.body.setBounce(1,1)
        player.body.setCollideWorldBounds(true);




        // colider player / objets

       let colliderObject = this.physics.add.collider(player,taps);
       taps.setCollisionBetween(67,70);
        
 //











        cursors = this.input.keyboard.createCursorKeys();




        // Add objet [backpacks]

        backpack = this.add.sprite(750,580,"objets");
        backpack.anims.play("backpack",true);
        backpack.setScale(.8);
        backpack.setDepth(+1)
        backpack.setInteractive();
        backpack.on("pointerdown", ()=> {
            const packin = this.add.image(0,0,"packin");
            packin.setInteractive();
            const packin_c = this.add.image(10,40,"packin_c");
            const btn_close_packin = this.add.sprite(40,-50,"alert");
            btn_close_packin.setInteractive();
            btn_close_packin.anims.play("btn_close",true)
            let next_left = this.add.image(30,30,"next").setScale(.5);
            let next_right = this.add.image(-30,30,"next").setScale(.5).setFlipX(true);
            next_left.setInteractive();
            next_right.setInteractive();
            // add objets []

            const objets_1 = this.add.sprite(0,-10,"objets").setScale(.9);
            objets_1.anims.play("objet_1",true);
           objets_1.setInteractive();

            packin_container = this.add.container(400,400, [packin,packin_c,btn_close_packin,next_left,next_right, objets_1])

            // close

            btn_close_packin.on("pointerdown", ()=> {
                packin_container.destroy();
            })

           /* setTimeout(() => {
                packin_container.destroy();
            },15000)
           */

        });

        




         //  camerra folow player

         this.cameras.main.setBounds(0, 0, map.displayWidth , map.displayHeight);
         //this.cameras.main.startFollow(player);
         
         /* Personne items using !! */

         
         // Border

         Border = this.add.image(600,650,"Border");


         // Turn_Icon
         Turn_Icon = this.add.image(750,650,"Turn")
         .setScale(.3);

       

         let sara_head = this.add.image(750,645,"head_sara");
         //sara_head.setScale(1.5)


         // var level

         bar_lvl = this.add.image(100,650,"purple_start")
         .setScale(.5);
         

         // shadow
        master_level =  this.add.image(54,647,"shadow")
        master_level.scaleX = 0;
        master_level.scaleY = 0.5;
        master_level.setAlpha(.7)
        x_lvl = 0;
        clac_lvl = this.add.text(100,640,x_lvl+"%");
        this.add.image(54,649,"purple_start1").setScale(.5);










        // error
        let error_wait = this.add.sprite(70,-70,"error_wait");
        error_wait.anims.play("error_wait",true);
        let e_1 = this.add.sprite(0,0,'alert');
        e_1.anims.play("placed",true);
        e_1.setScale(.5);
        let e_2 = this.add.sprite(0,-50,'alert');
        e_2.anims.play("task",true);
        e_3 = this.add.sprite(0,30,'alert');
        e_3.anims.play("btn_gold",true);
        e_3.setScale(.9);
        e_3.setInteractive();

        let e_4 = this.add.sprite(-60,-50,"alert");
        e_4.anims.play("vp",true);
        e_4.setScale(.9);

        let e_txt = this.add.text(-60,-15,alert_msg[0] , {
            color: "222"
        });
        let e_ok = this.add.text(-24,+22,alert_msg[5] , {
            color: "222"
        });
        container_alert = this.add.container(400, 400, [ e_1, e_2, e_3 , e_4 , e_txt , e_ok , error_wait]);

        e_3.on("pointermove", () => {
            this.input.setDefaultCursor('pointer');
        });
        e_3.on("pointerdown", () => {
            this.input.setDefaultCursor('default');
            container_alert.destroy();
        });

       

        // end message error


// Full screen Page
        var FKey = this.input.keyboard.addKey('F');

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

// End Full screen Page


    }













    update() {
        

        


        player.body.setVelocityX(0);
        if (cursors.right.isDown) {
            player.body.setVelocityX(90);
            sara.anims.play('walk_sara', true);
            sara.flipX = false;
        }

        if (cursors.left.isDown) {
            player.body.setVelocityX(-90);
            sara.anims.play('walk_sara', true);
            sara.flipX = true;
        }


        if (player.x > tom.x) {
            tom.flipX = true;
        }
        else {
            tom.flipX = false;
        }


        // Move Level start_lvl_bar
        if (master_level.x > 117) {
            
        }

        else {
            x_lvl += 0.008*10;
            clac_lvl.setText(parseInt(x_lvl)+"%");
            master_level.scaleX += 0.001;
            master_level.x += 0.05; 
        }
        // end



    }

}