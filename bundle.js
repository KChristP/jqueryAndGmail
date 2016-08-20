/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);
	const Sent = __webpack_require__(4);
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	const Router = function (node, routes) {
	  this.node = node;
	  this.routes = routes;
	};

	Router.prototype.start = function () {
	  this.render();
	  window.addEventListener('hashchange', () => {
	    this.render();
	  });
	};

	Router.prototype.activeRoute = function () {
	  let hashString = window.location.hash;
	  let routerName =  hashString.slice(hashString.indexOf("#") + 1);
	  return this.routes[routerName];
	  // return hashString.slice(hashString.indexOf("#") + 1);
	};

	Router.prototype.render = function () {
	  this.node.innerHTML = "";
	  let component = this.activeRoute();
	  let p = document.createElement('p');
	  if (!component) {
	    this.node.innerHTML ="";
	  } else {
	    this.node.innerHTML ="";
	    this.node.appendChild(component.render());
	  }

	};

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

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


/***/ },
/* 3 */
/***/ function(module, exports) {

	let messages = {
	  sent: [
	    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
	    {to: "person@mail.com", subject: "zzz", body: "so booring"},
	    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
	    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
	    {to: "person@mail.com", subject: "zzz", body: "so booring"},
	    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
	    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
	    {to: "person@mail.com", subject: "zzz", body: "so booring"},
	    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
	    {to: "person@mail.com", subject: "zzz", body: "so booring"}
	  ],
	  inbox: [
	    {from: "grandma@mail.com", subject: "Fwd: Fwd: Fwd: Check this out", body:
	"Stay at home mom discovers cure for leg cramps. Doctors hate her"},
	  {from: "person@mail.com", subject: "Questionnaire", body: "Take this free quiz win $1000 dollars"},
	  {from: "grandma@mail.com", subject: "Fwd: Fwd: Fwd: Check this out", body:
	"Stay at home mom discovers cure for leg cramps. Doctors hate her"},
	{from: "grandma@mail.com", subject: "Fwd: Fwd: Fwd: Check this out", body:
	"Stay at home mom discovers cure for leg cramps. Doctors hate her"},
	{from: "person@mail.com", subject: "Questionnaire", body: "Take this free quiz win $1000 dollars"},
	{from: "grandma@mail.com", subject: "Fwd: Fwd: Fwd: Check this out", body:
	"Stay at home mom discovers cure for leg cramps. Doctors hate her"},
	{from: "person@mail.com", subject: "Questionnaire", body: "Take this free quiz win $1000 dollars"}
	]
	};

	const MessageStore = {
	  getInboxMessages: () => {
	    return messages.inbox;
	  },
	  getSentMessages: () => {
	    return messages.sent;
	  }
	};


	module.exports = MessageStore;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

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


/***/ }
/******/ ]);