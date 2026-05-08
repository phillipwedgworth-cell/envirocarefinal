// EnviroCare Chat Widget - Lightweight, async, zero dependencies
(function() {
  'use strict';

  // Don't load if already loaded
  if (window.__envirocareChatLoaded) return;
  window.__envirocareChatLoaded = true;

  const API_ENDPOINT = '/api/chat';
  const BRAND_COLOR = '#2d6e3e';
  const BRAND_DARK = '#1f4d2b';

  // Conversation history
  const messages = [];

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    .ec-chat-button {
      position: fixed; bottom: 20px; right: 20px;
      width: 60px; height: 60px; border-radius: 50%;
      background: ${BRAND_COLOR}; color: white;
      border: none; cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      z-index: 999998;
      display: flex; align-items: center; justify-content: center;
      font-size: 28px; transition: transform 0.2s;
    }
    .ec-chat-button:hover { transform: scale(1.05); }
    .ec-chat-window {
      position: fixed; bottom: 90px; right: 20px;
      width: 360px; max-width: calc(100vw - 40px);
      height: 520px; max-height: calc(100vh - 120px);
      background: white; border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      z-index: 999999; display: none;
      flex-direction: column; overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    .ec-chat-window.open { display: flex; }
    .ec-chat-header {
      background: ${BRAND_COLOR}; color: white;
      padding: 14px 16px; font-weight: 600;
      display: flex; justify-content: space-between; align-items: center;
    }
    .ec-chat-close {
      background: none; border: none; color: white;
      font-size: 22px; cursor: pointer; line-height: 1;
    }
    .ec-chat-messages {
      flex: 1; overflow-y: auto; padding: 16px;
      background: #f7f7f7;
    }
    .ec-msg {
      margin-bottom: 10px; padding: 10px 14px;
      border-radius: 14px; max-width: 85%;
      font-size: 14px; line-height: 1.4;
      word-wrap: break-word;
    }
    .ec-msg.user {
      background: ${BRAND_COLOR}; color: white;
      margin-left: auto; border-bottom-right-radius: 4px;
    }
    .ec-msg.bot {
      background: white; color: #222;
      border: 1px solid #e0e0e0;
      border-bottom-left-radius: 4px;
    }
    .ec-msg.typing { font-style: italic; opacity: 0.7; }
    .ec-chat-input-wrap {
      display: flex; padding: 12px; gap: 8px;
      border-top: 1px solid #e0e0e0; background: white;
    }
    .ec-chat-input {
      flex: 1; padding: 10px 12px;
      border: 1px solid #ccc; border-radius: 20px;
      font-size: 14px; outline: none;
      font-family: inherit;
    }
    .ec-chat-input:focus { border-color: ${BRAND_COLOR}; }
    .ec-chat-send {
      background: ${BRAND_COLOR}; color: white;
      border: none; border-radius: 20px;
      padding: 0 16px; cursor: pointer;
      font-size: 14px; font-weight: 600;
    }
    .ec-chat-send:hover { background: ${BRAND_DARK}; }
    .ec-chat-send:disabled { opacity: 0.5; cursor: not-allowed; }
  `;
  document.head.appendChild(style);

  // Build DOM
  const btn = document.createElement('button');
  btn.className = 'ec-chat-button';
  btn.setAttribute('aria-label', 'Open chat');
  btn.innerHTML = '&#128172;';

  const win = document.createElement('div');
  win.className = 'ec-chat-window';
  win.innerHTML = `
    <div class="ec-chat-header">
      <span>EnviroCare Assistant</span>
      <button class="ec-chat-close" aria-label="Close chat">&times;</button>
    </div>
    <div class="ec-chat-messages" id="ec-messages"></div>
    <div class="ec-chat-input-wrap">
      <input type="text" class="ec-chat-input" placeholder="Ask about pest control..." />
      <button class="ec-chat-send">Send</button>
    </div>
  `;

  document.body.appendChild(btn);
  document.body.appendChild(win);

  const msgsEl = win.querySelector('#ec-messages');
  const inputEl = win.querySelector('.ec-chat-input');
  const sendBtn = win.querySelector('.ec-chat-send');
  const closeBtn = win.querySelector('.ec-chat-close');

  function addMessage(role, text, isTyping) {
    const el = document.createElement('div');
    el.className = 'ec-msg ' + (role === 'user' ? 'user' : 'bot') + (isTyping ? ' typing' : '');
    el.textContent = text;
    msgsEl.appendChild(el);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return el;
  }

  function openChat() {
    win.classList.add('open');
    if (messages.length === 0) {
      addMessage('assistant', "Hi! I'm the EnviroCare assistant. How can I help you with pest control today?");
    }
    setTimeout(() => inputEl.focus(), 100);
  }

  function closeChat() {
    win.classList.remove('open');
  }

  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;

    addMessage('user', text);
    messages.push({ role: 'user', content: text });
    inputEl.value = '';
    sendBtn.disabled = true;

    const typingEl = addMessage('assistant', 'Typing...', true);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages })
      });
      const data = await res.json();
      typingEl.remove();
      if (data.reply) {
        addMessage('assistant', data.reply);
        messages.push({ role: 'assistant', content: data.reply });
      } else {
        addMessage('assistant', "Sorry, I had a problem. Please call us at (205) 685-9293 for immediate help.");
      }
    } catch (err) {
      typingEl.remove();
      addMessage('assistant', "Sorry, I couldn't connect. Please call us at (205) 685-9293.");
    }
    sendBtn.disabled = false;
    inputEl.focus();
  }

  btn.addEventListener('click', openChat);
  closeBtn.addEventListener('click', closeChat);
  sendBtn.addEventListener('click', sendMessage);
  inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendMessage();
  });
})();
