enchant();

window.onload = function(){
    var game = new Core(320, 320);
    game.fps = 15;
    game.preload("chara1.png");
    game.onload = function(){
        var bear = new Sprite(32, 32);
        bear.image = game.assets["chara1.png"];
        bear.x = 150;
        bear.y = 150;
        game.rootScene.addChild(bear);
    };
    game.start();
};