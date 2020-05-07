
socket.onopen = function(e) {
  alert("Connected");
  socket.send("Hello!");
};
socket.onmessage = function(event) {
  alert('Message received: ' + event.data);
};
document.getElementById('send').addEventListener('click', () => {
    socket.send('new message')
})