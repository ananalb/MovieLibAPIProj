$(document).ready(function (){
    var movie = {};
    
    getAllMovies();
    $('#buttonGetMovie').click(function(){
        movie.title = $('#title').val();
        movie.genre = $('#genre').val();
        movie.director = $('#director').val();
        var id = $('#id').val();
        var movieElement = JSON.stringify(movie);
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        method: "POST",
        data: movieElement,
        contentType: 'application/json',
        success: function(){
           alert('saved successfully');
           getAllMovies();
           refresh();
        },
        error: function(error){
            console.log( error);
    }
    })
  })
})
function getAllMovies(){
    $.ajax({
        url:'https://localhost:44325/api/movie',
        method: "GET",
        dataType: "json",
        success: function (data){
           var tableBody = $('#movieData tbody');
           tableBody.empty();
           $(data).each(function name(index, el){
               tableBody.append('<tr><td>'+el.title+'</td><td>'
               +el.genre+'</td><td>'+el.director
               +'</td><td><button id="edit" onclick="editMovie('+el.id+')">Edit</button></td><td><button onclick= "deleteMovie('+el.id+')">Delete</button></td></tr>');
           })
    },
    error: function (error) {
        alert(error);
       }
    })
}




function deleteMovie(id){       
        $.ajax({
            url: 'https://localhost:44325/api/movie/'+id,
            method: 'DELETE',
            success: function (){
                alert ("record has been deleted");
                getAllMovies();
            },
            error: function (error){
                alert(error);
            }
        });
    }

    function editMovie(id){
        $.ajax({
            url: 'https://localhost:44325/api/movie/'+id,
            method: 'GET',
            dataType: 'json',
            success: function(data){
                $('#title').val(data.title);
                $('#genre').val(data.genre);
                $('#director').val(data.director);
                $('#id').val(data.id);
                getAllMovies();
            },
            error: function(error){
                alert(error);
            }
        })  
    }

function refresh(){
    $('#title').val('');
    $('#genre').val('');
    $('#director').val('');
    $('#id').val('');
}

/*
(function($){
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
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
                refresh();
            }
            
        });
        e.preventDefault();
    }
    $('#my-form').submit( processForm);
})
(jQuery);  
    $.ajax({
        url: "https://localhost:44325/api/movie",
        type: "GET",
        dataType:"JSON",
        success: function(data){
            $('#movieData').html('');
            
            $.each(data, function(index, el){
               $('#movieData').append(`<tr><td>${el.title}</td>
               <td>${el.genre}</td>
               <td>${el.director}</td>
               <td><button onclick = "deleteMovie(el.id)">Delete</button></td>
               <td><button onclick = "editMovie(el.id)">Edit</button></td>
               </tr>`)
             
           });
        },
        error: function(){
           console.log('Error in the request');
       }
       });

//    function editMovie(id){
//     $.ajax({
//     url: "https://localhost:44325/api/movie",
//     type: "PUT",
//     dataType: "JSON",
//     success: function(data){
//         $('#movieData').append(data.id)


// (jquery); 

function deleteMovie(id) {
    $.ajax({
        url: 'https://localhost:44325/api/movie/' + id,
        type: 'DELETE',
        success: function () {
            alert ("record has been deleted");
          
        },
        error:function (err) {
            alert(err);
        }
        
    });
}


function editMovie(id){
    $.ajax({
        url: 'https://localhost:44325/api/movie' + id,
        method: 'GET',
        dataType: 'json',
        type: "PUT",
        success: function(data){
            $('#Title').value(data.title);
            $('#Genre').value(data.genre);
            $('#Director').value(data.director);
            $('#Id').value(data.id);
        },
        error: function(err){
            console.log( err );
        }
    });   
}

       
function refresh(){
    $('#Title').value('');
    $('#Genre').value('');
    $('#Director').value('');
    
}
*/