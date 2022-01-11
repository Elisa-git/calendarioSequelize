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
