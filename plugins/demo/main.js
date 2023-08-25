console.log(this);
logger.error("Myplugin Start!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
var plugin = this;
var ev = plugin.events;
var ticks = 0;
ev.onPlayerConnection = function (player) {
    logger.info("[Myplugin] Player ID:" + player.ID + " Connected to Rimspace");
};
ev.onClose = (code) => {
    logger.warn("[Myplugin] Rimspace is closed.");
    logger.info(code);
}
ev.onPlayerMessage = (player, parsed) => {
    console.log(parsed);
    logger.info("Player Object Data:");
    console.log(player);
    console.log(`[Myplugin] MsgEvent--> ${player.GameName}'s Message: ${parsed.original}`);
    if (parsed.header === "uuid") {
        player.exec("say " + uuidv4(), function (json) {
            console.log("This is callback:");
            console.log(json);
        });
    }
}
ev.onTickCircle = function () {
    ticks++;
    if (ticks % 200 === 0) {
        logger.info("Ticks: " + ticks);
    }
}
ev.onConsoleInput = (parsed) => {
    console.log("[Myplugin] Console Input Object");
    console.log(parsed);
}