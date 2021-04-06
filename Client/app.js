$(document).ready(function(){
    $.ajax({
        url: "https://localhost:44325/api/movie",
        type: "GET",
        dataType:"JSON",
        success: function(data){
            $('#movieData').html('');
            
            $.each(data, function(index, el){               
               $('#movieData')
               .append(`<tr>
               <td>${el.title}</td>
               <td>${el.genre}</td>
               <td>${el.director}</td>
               <td><button onclick='deleteMovie(${el.movieId})'>Delete</button></td>
               <td><button onclick='editMovie(${el.movieId})'>Edit</button></td>
               </tr>`)
             
           });
        },
        error: function(){
           console.log('Error in the request');
       }
       });
    });

(jQuery);

function deleteMovie(id){

        $.ajax({
            url: 'https://localhost:44325/api/movie/' + id,
            type: "DELETE",
            success: function(id){
                $('#movieData').remove(id);
                location.reload()
            },
            error: function( jqXhr, textStatus, errorThrown ){
                alert( errorThrown );              
            }            
        });
    }

function processForm( e ){
    var dict = {
        Title : this["title"].value,
        Genre : this["genre"].value,
        Director: this["director"].value
    };
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(dict),
        success: function( data, textStatus, jQxhr ){
            $('#movieData').html(data);
            location.reload()
        },
        error: function( jqXhr, textStatus, errorThrown ){
            alert( errorThrown );
            refresh();
        }
        
    });
    e.preventDefault();
}
$('#my-form').submit( processForm);

    
function editMovie(id){
    var dict = {
        Title : this["title"].value,
        Genre : this["genre"].value,
        Director: this["director"].value
    };
    $.ajax({
        url: 'https://localhost:44325/api/movie/' + id,
        dataType: 'json',
        type: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(dict),
        success: function(id){            
                    $('#movieData').update(id);
                    $('td',id).each(function() {
    $(this).html('<input type="text" value="' + $(this).html() + '" />');
    addRow();
})
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
            refresh();
        }
        
    });
    id.preventDefault();
}
$('#my-form').submit( editMovie);



// $(document.createElement('table'))
// function createTable{
//     tb = document.createElement("tbody")  
//     var tbody  = document.createElement('tbody'); 
//     table.appendChild(tbody);
//     var table_row  = document.createElement('tr'); 
//     tbody.appendChild(table_row)
// }


function addRow(tableID) {

    

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name="chkbox[]";
    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    cell2.innerHTML = rowCount + 1;

    var cell3 = row.insertCell(2);
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "txtbox[]";
    cell3.appendChild(element2);


}


