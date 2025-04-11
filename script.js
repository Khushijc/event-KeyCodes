const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
    <div class="key">
        ${event.key === " " ? "Space" : event.key}
        <small>Press Key</small>
      </div>
      <div class="key red">
        ${event.keyCode}
        <small>Askii code</small>
      </div>
      <div class="key green">
        ${event.code}
        <small>Key Name</small>
      </div>`;
});
