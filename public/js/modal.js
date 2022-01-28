// Get the modal

var modal = document.getElementById("myModal");
var modalEditar = document.getElementById("modalEditar")
var modalApagar = document.getElementById("modalApagar")


// Get the button that opens the modal

var btn = document.getElementById("botaoAdicionar");
var btnEditar = document.getElementById("botaoEditar");
var btnApagar = document.getElementById("apagar");

var btnFechar = document.getElementById("botaoCancelar")
var btnFecharEditar = document.getElementById("botaoCancelarEditar")
var btnFecharApagar = document.getElementById("botaoCancelarApagar")


// Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0];

var btnClose = document.getElementById("botaoCancelar")


// When the user clicks the button, open the modal 

btn.onclick = function() {
  modal.style.display = "block";
}

btnFechar.onclick = function() {
  modal.style.display = "none";
}

btnEditar.onclick = function() {
  modalEditar.style.display = "block";
}

btnFecharEditar.onclick = function() {
  modalEditar.style.display = "none";
}

btnApagar.onclick = function() {
  modalApagar.style.display = "block";
}

btnFecharApagar.onclick = function() {
  modalApagar.style.display = "none";
}


// When the user clicks on <span> (x), close the modal

span.onclick = function() {
  modal.style.display = "none";
}
btnClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}