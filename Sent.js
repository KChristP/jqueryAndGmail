const MessageStore = require('./message_store.js');

const Sent = {
  render: () => {
    const ul = document.createElement('ul');
    ul.className = "messages";
    let messages = MessageStore.getSentMessages();
    messages.forEach((message) => {
      let messageLi = Sent.renderMessage(message);
      ul.appendChild(messageLi);
    });
    return ul;
  },

  renderMessage: (message) => {
    const li = document.createElement('li');
    li.className = 'message';
    li.innerHTML = `
    <span class="to">${message.to}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>
    `;
    return li;
  }
};

module.exports = Sent;
