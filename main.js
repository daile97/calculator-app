import main from "./app";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="main">
    <div id="calculator">
      <div id="head">
        <p>Calc</p>
      </div>
      <div id="screen">
        <div id="upper-screen"></div>
        <div id="lower-screen">0</div>
      </div>
      <div id="keyboard">
        <button class="num" data-value="7">7</button>
        <button class="num" data-value="8">8</button>
        <button class="num" data-value="9">9</button>
        <button class="func" id="del">DEL</button>
        <button class="num" data-value="4">4</button>
        <button class="num" data-value="5">5</button>
        <button class="num" data-value="6">6</button>
        <button class="operator" data-value="+">+</button>
        <button class="num" data-value="1">1</button>
        <button class="num" data-value="2">2</button>
        <button class="num" data-value="3">3</button>
        <button class="operator" data-value="-">-</button>
        <button data-value="." class="num">.</button>
        <button class="num" data-value="0">0</button>
        <button class="operator" data-value="/">/</button>
        <button class="operator" data-value="x">x</button>
        <button id="reset" class="span func">Reset</button>
        <button id="equal" class="span equal">=</button>
      </div>
    </div>
  </div>
`;

main();
