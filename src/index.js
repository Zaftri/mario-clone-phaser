import Phaser from "phaser";

import Game from "./scenes/Game";

//import './assets/scss/index.scss'

const config = {
    width: 640,
    height: 480,
    parent: 'mario',
    backgroundColor: '#FFFFAC',
    title: 'Tilemap',
    url: 'webtips.dev',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true, // Set it to true if you want debugger enabled by default
            gravity: {
                y: 1000
            }
        }
    },
    scene: [
        Game
    ]
};

new Phaser.Game(config);