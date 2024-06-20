var sessionId;
var cookieArr = document.cookie.split();
for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split('=');
    if ("sessionId" === cookiePair[0].trim()) {
        sessionId = decodeURIComponent(cookiePair[1]);
    }
}
if (!sessionId) {
    throw new Error("session id not found");
}
const deviceId = 'bed80646-1126-4c40-8f0f-32e658016c65';
const urlWebsocket = "wss://wappsto.com/services/2.1/websocket/open?x-session=" + sessionId +
    "&full=true&subscription=[/network/" + deviceId + "]";
const ws = new WebSocket(urlWebsocket);

ws.onmessage = function (event) {
    const DataJson = JSON.parse(event.data);

    console.log(event.data);

}