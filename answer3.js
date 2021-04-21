function appendChildren() {
  var allDivs = document.getElementsByTagName('div');
  for (let i = allDivs.length - 1; i > -1; i--) {
    var newDiv = document.createElement('div');
    allDivs[i].appendChild(newDiv);
  }
}

document.body.innerHTML = `
<div id="a">
    <div id="b">
    </div>
</div>`;
appendChildren();
console.log(document.body.innerHTML);
