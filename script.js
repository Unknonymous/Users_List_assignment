$(document).ready(function(){
    $('#infos').submit(function(){
        var fname = $('#first').val();
        var lname = $('#last').val();
        var email = $('#email').val();
        var numbe = $('#numb').val();
        $('#idtable').append(
            "<tr>"+
            "<td class='data'>"+fname+"</td>"+
            "<td class='data'>"+lname+"</td>"+
            "<td class='data'>"+email+"</td>"+
            "<td class='data'>"+numbe+"</td>"+
            "</tr>"
        );
        return false;
    })
});