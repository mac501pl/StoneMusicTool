let scaleSelect = document.getElementById("scaleSelect");
let noteSelect = document.getElementById("noteSelect");
function change_image() {
  let imagePath = "Scales/"
    .concat(
      scaleSelect.options[scaleSelect.selectedIndex].text.replace(/\s/g, "")
    )
    .concat(".png");
  document.getElementById("background").src = imagePath;
}

function change_notes(note) {
  let notesPath = "Notes/".concat(note.concat(".png")).replace("#", "Sharp");
  document.getElementById("foreground").src = notesPath;
}
