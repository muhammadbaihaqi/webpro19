const btn = document.getElementById("add");
const chatRoom = document.getElementById("chat-room");

btn.addEventListener("click", () => {
  const chatText = document.getElementById("chatText");
  const list = document.createElement("li");
  list.classList.add("chat-message");
  list.innerHTML = chatText.value;
  chatRoom.appendChild(list);
  chatText.value = "";
});