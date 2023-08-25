var plugin = this;
var rimspace = api.rimspace;
var events = this.events;
logger.info(rimspace.version);
events.onPlayerConnection = (player) => {
    player.exec("say What the hell", function (json) {
        logger.info(JSON.stringify(json, null, '\t'));
    });
}
// console.log(rimspace.config());
// console.log(api.initFs());