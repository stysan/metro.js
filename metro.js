isLeftbarActive = false;

document.head.innerHTML += `<style>body {
  font-family: "Segoe UI", sans-serif;
  font-weight: 300;
  margin: 0;
  padding: 0;
}
h1, h2, h3, h4, h5, h6 {
  padding: 0;
  margin: 0 0 0.5em 0;
  font-weight: 300;
}
.leftbar {
  position: fixed;
  background: #0078d7;
  color: #fff;
  padding: 2em;
  width: 10em;
  height: 100vw;
  transition: 0.3s;
  z-index: -1;
  opacity: 0%;
}
.container {
  padding: 2em 3em 2em 3em;
  transition: 0.3s;
}
.leftbarButton {
  position: fixed;
  display: inline-block;
  transform: translateX(1em) translateY(1em);
  text-decoration: none;
  font-weight: 700;
  font-size: 1em;
  color: #000;
  transition: 0.3s;
  z-index: 1;
}
.button {
  display: block;
  padding: 1em 2em;
  background: #0078d7;
  margin: 0 0 0.5em 0;
  width: max-content;
  color: #fff;
  text-decoration: none;
  z-index: 2;
}
code, pre {
  background-color: #f5f5f5;
  font-family: 'Consolas', monospace;
  padding: 0 0.5em;
}
pre {
  white-space: pre-wrap;
}
a {
  color: #0078d7;
}
.leftbar a {
  color: #fff;
  z-index: 2;
}</style>`;

function leftbarActive(value) {
  if (value == false) {
    document.getElementsByClassName('leftbar')[0].style.opacity = '0%';
    document.getElementsByClassName('leftbar')[0].style.zIndex = '-1';
    document.getElementsByClassName('container')[0].style.padding = '2em 3em 2em 3em';
    document.getElementsByClassName('leftbarButton')[0].style.transform = 'translateX(1em) translateY(1em)';
    document.getElementsByClassName('leftbarButton')[0].style.color = '#000';
    isLeftbarActive = false;
  }
  if (value == true) {
    document.getElementsByClassName('leftbar')[0].style.transition = '0.3s';
    document.getElementsByClassName('container')[0].style.transition = '0.3s';
    document.getElementsByClassName('leftbarButton')[0].style.transition = '0.3s';

    document.getElementsByClassName('leftbar')[0].style.opacity = '100%';
    document.getElementsByClassName('leftbar')[0].style.zIndex = '1';
    document.getElementsByClassName('container')[0].style.padding = '2em 3em 2em 17em';
    document.getElementsByClassName('leftbarButton')[0].style.transform = 'translateX(12em) translateY(1em)';
    document.getElementsByClassName('leftbarButton')[0].style.color = '#fff';
    document.getElementsByClassName('leftbarButton')[0].style.zIndex = 4;
    isLeftbarActive = true;
  }
}

function changeLeftbar() {
  if (isLeftbarActive) {
    leftbarActive(false);
  } else {
    leftbarActive(true);
  }
}

document.getElementsByClassName('leftbar')[0].innerHTML +=
"<br><br>Powered by metro.js";

document.body.innerHTML =
"<a href='' class='leftbarButton' onclick='changeLeftbar(); return false;'>≡</a>"
+ document.body.innerHTML;