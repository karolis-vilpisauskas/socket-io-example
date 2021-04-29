const socket = io("http://localhost:8080");

const messageInput = document.getElementById("messageInput");
const messageContainer = document.getElementById("messageContainer");

const handleSubmit = () => {
  const message = messageInput.value;
  socket.emit("message", message);
};

const addMessage = ({ message, id }) => {
  messageInput.value = "";
  currentUserId = socket.id;
  const isCurrentUser = id === currentUserId;
  const messageItem = document.createElement("div");
  messageItem.classList.add("messageItem");
  if (isCurrentUser) messageItem.classList.add("myMessage");
  messageItem.appendChild(document.createTextNode(message));
  messageItem.setAttribute("id", `${id}-${Math.random(0, 100000)}`);
  messageContainer.appendChild(messageItem);
};

socket.on("message", addMessage);
