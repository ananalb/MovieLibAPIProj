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
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#movieData').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        
            $("button").click(function(){
              $("body").css("background-color", "yellow");
            });
          

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);  

    function populateTable(){
        $("#movieData").html("")
        $.get("https://localhost:44325/api/movie", function(data){
            console.log(data);
        }).fail(function(err){
            console.log(err)
        })
    }
    
    
//     function editMovie(id){
//      console.log(id);
//     }
// (jquery);  

 $.ajax({
 url: "https://localhost:44325/api/movie",
 type: "GET",
 dataType:"JSON",
 success: function(data){
     $('#movieData').html('');
     
     $.each(data, function(index, el){
        $('#movieData').append(`<tr><td>${el.title}</td><td>${el.genre}</td><td>${el.director}</td></tr>`)
    });
    console.log(data);
 },
 error: function(){
    console.log('Error in the request');
}

});