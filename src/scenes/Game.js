class Game extends Phaser.Scene {
    constructor () {
        super('Game');
    }

    preload() {
        this.load('tiles', './assets/tiles.png');
        this.load.tilemapTiledJSON('map', './assets/map.json');
    }

    create() {
        this.map = this.make.tilemap({ key: 'map' });
        this.tileset = this.map.addTilesetImage('map-tileset', 'tiles');
        this.platform = this.map.createStaticLayer('platform', this.tileset, 0, 0);

        this.map.createStaticLayer('background', this.tileset, 0, 0);
        this.platform.setCollisionByExclusion(-1, true);
    }

    update() {

    }
}

export default Game;