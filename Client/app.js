(function($){
   
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Genre : this["genre"].value,
        	Director: this["director"].value

        };

        $.ajax({
            url: 'https://localhost:44325/api/movie', //+ movieId,
            dataType: 'json',
            type: "POST",
            contentType: 'application/json',
            data: data ,//JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#movieData').html( '' );
                $.each(data, function(index, el){
                    $('#movieData').append(`<tr><td>${el.title}
                                            </td><td>${el.genre}
                                            </td><td>${el.director}
                                            </td></tr>`)
                });
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
        
            // $("button").click(function(){
            //   $("body").css("background-color", "yellow");
            // });
          

        e.preventDefault();
    }


    $('#my-form').submit( processForm);
})(jQuery);  
      
 

$.ajax({
    url: "https://localhost:44325/api/movie",
    type: "GET",
    dataType:"JSON",
    success: function(data){
        $('#movieData').html('');
        
        $.each(data, function(index, el){
           $('#movieData').append(`<tr><td>${el.title}
                                   </td><td>${el.genre}
                                   </td><td>${el.director}
                                   </td></tr>`)
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


