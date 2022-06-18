class menu_choix extends Phaser.Scene {
    constructor() {
        super("choixMenu");
    }
    create() {
        // background
        let bg_menu = this.add.image(0,0,"airadventurelevel3")
        .setOrigin(0, .0)
        .setScale(.6);




        let FelisChaus_ParchmentBackground = this.add.image(500,250,"FelisChaus_ParchmentBackground").setScale(1).setAlpha(1);


        this.add.image(500,150,"SJcave").setScale(.7);

        this.add.text(350,300,"Jcave, A two-dimensional game !",{
            color: "222",
            fontFamily: "monospace"
        })
        
        this.add.text(320,320,"that has started and is currently under",{
            color: "222",
            fontFamily: "monospace"
        })

        this.add.text(320,340,"development",{
            color: "222",
            fontFamily: "monospace"
        })

        this.add.image(500,400,"closed");

        // add effected

        particles_rain = this.add.particles('SnowFlake');
        particles_rain.setInteractive();
        particles_rain.createEmitter({
            x: {min: 0, max: 1000},
            y: 0,
            lifespan: 1000,
            speedY: 800,
            scaleY: .5,
            scaleX: .01,
            quantity: 10,
            blendMode: 'ADD' // LIGHTEN
        });



    }
}