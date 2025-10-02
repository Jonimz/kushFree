// Get elements
const chat = document.getElementById("chat");
const input = document.getElementById("msg");
const sendBtn = document.getElementById("send");

// Function to add messages
function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender); // sender = 'user' or 'bot'
  msg.innerText = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight; // auto-scroll
}

// Bot replies (simple keyword matching)
function botReply(userText) {
  let reply = "I’m here. Tell me more.";

  const text = userText.toLowerCase();

  if (text.includes("hi") || text.includes("hello")) {
    reply = "Hello! How are you feeling today?";
  } else if (text.includes("craving")) {
    reply = "Cravings are tough. Try a deep breath: inhale 4, hold 7, exhale 8.";
  } else if (text.includes("stress")) {
    reply = "Stress can trigger cravings. Want to try a grounding exercise?";
  } else if (text.includes("bye")) {
    reply = "Take care. Remember, small small we go.";
  }

  appendMessage("bot", reply);
}

// Handle sending a message
function handleSend() {
  const text = input.value.trim();
  if (text === "") return;

  appendMessage("user", text);
  input.value = "";
  botReply(text);
}

// Event listeners
sendBtn.addEventListener("click", handleSend);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSend();
  }
});

// Initial greeting
appendMessage("bot", "Hi, I’m KushFree. I’m here to listen.");
