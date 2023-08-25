
var popupBox = document.createElement("div");
popupBox.style.position = "fixed";
popupBox.style.zIndex = "10000";
popupBox.style.top = "40px";
popupBox.style.width = "100%";
popupBox.style.margin = "0";
popupBox.style.padding = "0";
popupBox.style.left = "0";
document.body.appendChild(popupBox);
/**
 * 
 * @param {String} msg innerHTML
 * @param {Int} liveTime ms
 */
function popup(msg, liveTime) {
    liveTime = liveTime ? liveTime : 1000;
    var popupDiv = document.createElement("div");
    popupDiv.style.width = "fit-content";
    popupDiv.style.position = "relative";
    popupDiv.style.left = "0";
    popupDiv.style.right = "0";
    popupDiv.style.marginTop = "10px";
    popupDiv.style.marginLeft = "auto";
    popupDiv.style.marginRight = "auto";
    popupDiv.style.fontFamily = `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;
    popupDiv.style.fontSize = "25px";
    popupDiv.style.backgroundColor = "rgba(236, 236, 236, 0.8)";
    popupDiv.style.border = "2px solid rgb(255, 255, 255)";
    popupDiv.style.borderRadius = "3px";
    popupDiv.style.zIndex = "20000";
    popupDiv.style.color = "white";
    popupDiv.style.paddingBottom = "5px";
    popupDiv.style.userSelect = "none";
    popupDiv.style.paddingLeft = "4px";
    popupDiv.style.paddingRight = "4px";
    popupDiv.style.boxShadow = "2px 2px 10px rgba(255, 255, 255, 0.74)";
    popupDiv.style.transition = "opacity .3s linear";
    popupDiv.style.opacity = "0";
    popupDiv.innerHTML = msg;
    popupBox.appendChild(popupDiv);
    setTimeout(() => {
        popupDiv.style.opacity = "1";
    }, 100);
    setTimeout(() => {
        popupDiv.style.opacity = "0";
    }, liveTime + 100);
    setTimeout(() => {
        popupBox.removeChild(popupDiv);
    }, liveTime + 700);
}