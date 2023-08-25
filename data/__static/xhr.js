/**
 * 
 * @param {String} url 
 * @param {Function} callback (err, responseText)
 * @param {String} method 
 */
function getRequest(url, callback, method) {
    var xhr = new XMLHttpRequest();
    xhr.open(method ? method : "GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(null, xhr.responseText);
            } else {
                callback(xhr.status, null);
            }
        }
    }
}