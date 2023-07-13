import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="main">
    <div id="calculator">
      <div id="head">
        <p>Calc</p>
      </div>
      <div id="screen"></div>
      <div id="key-board">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="func">DEL</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
        <button class="span func">Reset</button>
        <button class="span equal">=</button>
      </div>
    </div>
  </div>
`;
