/**
 * Created by ss on 2017/4/22.
 */

function connect() {
    var socket = new SockJS('/endpoint');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/getResponse', function (response) {
            var responseMessage = JSON.parse(response.body);
            renderNews(responseMessage);
        });
    });
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
}

function renderNews(responseMessage) {
    $("footer p:eq(0)").text(responseMessage.message);
}