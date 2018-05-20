
document.getElementById("btnAdicionar").addEventListener('click', function(e){    
    
    e.preventDefault();
    var novaTarefa = document.getElementById("txt").value;  
    var corpoTabela = document.getElementById("corpoTabela");    
    var tr = document.createElement('tr');
    var td = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    td.innerHTML = novaTarefa;
    td2.innerHTML = "<a class='button is-danger is-small' onclick='Excluir(this)'>Excluir</a>";
    corpoTabela.appendChild(tr);
    document.getElementById("txt").value = "";
    

});


function Excluir(btn)
{
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);    
}