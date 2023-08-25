var ev = this.events;

var circle = function (r, deg) {//半径，角度
    return position = [
        r * Math.cos(deg / 180 * Math.PI),
        r * Math.sin(deg / 180 * Math.PI),
    ];
}
var ellipse = function (a, b, deg) {//长半轴，短半轴，角度
    return position = [
        a * Math.cos(deg / 180 * Math.PI),
        b * Math.sin(deg / 180 * Math.PI),
    ];
}




ev.onPlayerMessage = function (player, parsed) {
    logger.warn(parsed.original);
    switch (parsed.header) {
        case "circle":
            var r = parseInt(parsed.body[0]);
            player.tellraw("r = " + r);
            for (var i = 0; i < 360; i += 2) {
                var pos = circle(r, i);
                console.log(pos);
                console.log(i);
                player.exec(`setblock ~${pos[0]} ~ ~${pos[1]} stone 0`);
            }
            break;
        case "ellipse":
            var a = parseInt(parsed.body[0]);
            var b = parseInt(parsed.body[1]);
            player.tellraw(`a = ${a}, b = ${b}`);
            for (var i = 0; i < 360; i += 2) {
                var pos = ellipse(a, b, i);
                console.log(pos);
                console.log(i);
                player.exec(`setblock ~${pos[0]} ~ ~${pos[1]} gold_block 0`);
            }
            break;
    }
}