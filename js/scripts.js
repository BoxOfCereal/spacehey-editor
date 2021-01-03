const BORDER_SIZE = 4;
const panel = document.querySelector(".editor-snippets-container");
console.log(editor)

let m_pos;
function resizeY(e) {
  document.documentElement.className = 'reflow_' + (new Date()).getTime();
  const dy = m_pos - e.y;
  m_pos = e.y;
  const height = parseInt(getComputedStyle(panel, "").height);
  const h = window.innerHeight;
  const innerHeightOffset = 35;
  if (height + dy < 30 || height + dy > h - innerHeightOffset) {
    panel.style.height = parseInt(getComputedStyle(panel, "").height) + "px";
    // update editor to correct size
    editor.resize();
    editor.renderer.updateFull();
  } else {
    console.log(h, height);
    panel.style.height =
      parseInt(getComputedStyle(panel, "").height) + dy + "px";
    // update editor to correct size
    editor.resize();
    editor.renderer.updateFull();
  }
}

panel.addEventListener(
  "mousedown",
  function (e) {
    console.log(e.offsetY);
    if (e.offsetY < BORDER_SIZE) {
      m_pos = e.y;
      document.addEventListener("mousemove", resizeY, false);
    }
  },
  false
);

document.addEventListener(
  "mouseup",
  function () {
    document.removeEventListener("mousemove", resizeY, false);
  },
  false
);
