function createBoard(C = 8, R = 8, collWidth = 100, rowHeight = 100) {
  colors = ["#FAEBD", "#5F9EA0"];

  let box = document.createElement("div");

  let attr1_box = document.createAttribute("class");
  attr1_box.value = "gameBoard";
  box.attributes.setNamedItem(attr1_box);

  let attr2_box = document.createAttribute("id");
  attr2_box.value = "gameBoard";
  box.attributes.setNamedItem(attr2_box);

  document.body.appendChild(box);

  document.getElementById("gameBoard").style.width = (C*(collWidth+2)) + "px";
  document.getElementById("gameBoard").style.height = (R*(rowHeight+2)) + "px";

  for(cell = 0; cell < (C * R); cell++) {
    let miniBox = document.createElement("div");
    let attr1_miniBox = document.createAttribute("class");
    attr1_miniBox.value = "gameCell";
    miniBox.attributes.setNamedItem(attr1_miniBox);
    miniBox.style.width = collWidth + "px";
    miniBox.style.height = rowHeight + "px";
    document.getElementById("gameBoard").appendChild(miniBox);
  }
}
