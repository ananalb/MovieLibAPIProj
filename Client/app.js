$(document).ready(function(){
    $.ajax({
        url: "https://localhost:44325/api/movie",
        type: "GET",
        dataType:"JSON",
        success: function(data){
            $('#movieData').html('');
            
            $.each(data, function(index, el){
                console.log(el)
               $('#movieData')
               .append(`<tr><td>${el.title}</td>q
               <td>${el.genre}</td>
               <td>${el.director}</td>
               <td><button onclick='deleteMovie(${el.movieId})'>Delete</button></td>
               <td><button onclick="edit">Edit</button></td>
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
    console.log(id)
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


 /*    
function processFormEdit( movieId ){
    var dict = {
        Title : this["title"].val(),
        Genre : this["genre"].val(),
        Director: this["director"].val()
    };
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(dict),
        success: function( data, textStatus, jQxhr ){                  
                    $('#movieData').update(data);
                    $('td',movieId).each(function() {
    $(this).html('<input type="text" value="' + $(this).html() + '" />');
})
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
            refresh();
        }
        
    });
    movieId.preventDefault();
}
$('#my-edit-form').submit( processFormEdit);
 
    
  

  */
 




// function deleteMovie(id) {
//     $.ajax({
//         url: 'https://localhost:44325/api/movie/' + id,
//         type: 'DELETE',
//         success: function () {
//             alert ("record has been deleted");
          
//         },
//         error:function (err) {
//             alert(err);
//         }
        
//     });
// }

