// create BasicGame Class
BasicGame = {

};

// create Game function in BasicGame
BasicGame.Game = function (game) {
};

// set Game function prototype
BasicGame.Game.prototype = {

    init: function () {
        // set up input max pointers
        this.input.maxPointers = 1;
        // set up stage disable visibility change
        this.stage.disableVisibilityChange = true;
        // set up scale
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceOrientation(false, true);
        this.scale.setResizeCallback(this.gameResized, this);
        this.scale.setScreenSize(true);
        this.scale.refresh();

    },

    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        this.load.image('logo', 'images/phaser.png');
    },

    create: function () {
        // create logo
        this.logo = this.add.sprite(this.world.centerX, this.world.centerY , 'logo');
        // set logo in game
        this.logo.anchor.setTo(0.5, 0.5);

    },

    gameResized: function (width, height) {

        //  This could be handy if you need to do any extra processing if the game resizes.
        //  A resize could happen if for example swapping orientation on a device or resizing the browser window.
        //  Note that this callback is only really useful if you use a ScaleMode of RESIZE and place it inside your main game state.

    }

};