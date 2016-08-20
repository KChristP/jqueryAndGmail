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
