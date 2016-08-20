const Router = require('./router.js');
const Inbox = require('./Inbox.js');
const Sent = require('./Sent.js');
const routes = {
  inbox: Inbox,
  sent: Sent
};

document.addEventListener('DOMContentLoaded', function () {
  console.log('loaded');

  const elements = Array.from(document.querySelectorAll('.sidebar-nav li'));
  console.log(elements);
  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      let text = event.currentTarget.innerText.toLowerCase();
      window.location.hash = text;
    });
  });

  const domNode = document.querySelector('.content');
  const router = new Router(domNode, routes);
  router.start();

});
