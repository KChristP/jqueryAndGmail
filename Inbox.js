const MessageStore = require('./message_store.js');

const Inbox = {
  render: () => {
    const ul = document.createElement('ul');
    ul.className = "messages";
    let messages = MessageStore.getInboxMessages();
    messages.forEach((message) => {
      let messageLi = Inbox.renderMessage(message);
      ul.appendChild(messageLi);
    });
    return ul;
  },

  renderMessage: (message) => {
    const li = document.createElement('li');
    li.className = 'message';
    li.innerHTML = `
    <span class="from">${message.from}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>
    `;
    return li;
  }
};

module.exports = Inbox;
