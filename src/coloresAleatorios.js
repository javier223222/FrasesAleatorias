import randomItem from "./randomItem";

var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
    '#A31471',
    '#F0D11D',
    '#F0059D',
    '#1DE6F0',
  ];
  function randomColor() {
    let color=colors[randomItem(colors)]
    document.body.style.backgroundColor=color;
    document.getElementById('new-quote').style.backgroundColor=color;
    document.getElementById('text').style.color=color;
    document.getElementById('author').style.color=color;
  

  }
  export default randomColor;
