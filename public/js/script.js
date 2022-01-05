// function adicionaLinha(tabela) {

//     var tabela = document.getElementById(tbl);
//     var numeroLinhas = tabela.rows.length;
//     var linha = tabela.insertRow(numeroLinhas);
//     var celula1 = linha.insertCell(0);
//     var celula2 = linha.insertCell(1);   
//     var celula3 = linha.insertCell(2); 
//     celula1.innerHTML = 'setor '+ Math.floor((Math.random() * 100) + 1); 
//     celula2.innerHTML =  Math.floor((Math.random() * 100) + 1); 
//     celula3.innerHTML =  "<button class='crud' id='botaoApagar' onclick='removeLinha(this)'>Apagar</button>";
// }


function addAula() {
  var table = document.getElementById("tbl");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  cell1.innerHTML = document.getElementById('turma').value;
  cell2.innerHTML = document.getElementById('professor').value;
  cell3.innerHTML = document.getElementById('local').value;
  cell4.innerHTML = document.getElementById('disciplina').value;
  cell5.innerHTML = document.getElementById('dataInicio').value;
  cell6.innerHTML = document.getElementById('horarioInicio' + 'horarioFim').value;
  cell8.innerHTML = `<button class="crud" id="botaoEditar"><img src="img/edit.png"  width="16px" height="16px"></button> `+` <button class="crud" id="botaoApagar" onclick='removeLinha(this)'><img src="img/delete.png" width="17px" height="17px"></button>`;
}

function addCategoria() {
  var table = document.getElementById("tbl");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = document.getElementById('categoria').value;
  cell2.innerHTML = document.getElementById('setor').value;
  cell3.innerHTML = `<button class="crud" id="botaoEditar"><img src="img/edit.png"  width="16px" height="16px"></button> `+` <button class="crud" id="botaoApagar" onclick='removeLinha(this)'><img src="img/delete.png" width="17px" height="17px"></button>`;
}

function addDisciplina() {
  var table = document.getElementById("tbl");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = document.getElementById('disciplina').value;
  cell2.innerHTML = document.getElementById('setor').value;
  cell3.innerHTML = document.getElementById('turma').value;
  cell4.innerHTML = `<button class="crud" id="botaoEditar"><img src="img/edit.png"  width="16px" height="16px"></button> `+` <button class="crud" id="botaoApagar" onclick='removeLinha(this)'><img src="img/delete.png" width="17px" height="17px"></button>`;
}

function addArea() {
  var table = document.getElementById("tbl");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = document.getElementById('local').value;
  cell2.innerHTML = document.getElementById('capacidade').value;
  cell3.innerHTML = document.getElementById('possuiSis').value;
  cell4.innerHTML =  `<button class="crud" id="botaoEditar"><img src="img/edit.png"  width="16px" height="16px"></button> `+` <button class="crud" id="botaoApagar" onclick='removeLinha(this)'><img src="img/delete.png" width="17px" height="17px"></button>`;
}

// funcao remove uma linha da tabela
/* function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').deleteRow(i);
  } */
  
  
  


// funcao exporta a tabela da tela em que você esta para um arquivo excel
function ExportToExcel() {
  var htmltable = document.getElementById('tbl');

  var html = htmltable.outerHTML;
  window.open('data:application/vnd.ms-excel, ' + encodeURIComponent(html));
}

// funcao pesquisar
var $rows = $('.tableRow');
$('#botaoPesquisar').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});
