(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Genre : this["genre"].value,
        	Director: this["director"].value
        };
    }
        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
        e.preventDefault();
        $(document).ready(function(){
        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'get',
            success: function(){
                $('.movieData').html('');
            }
        })
    })
        .then(function(data){
            $.each(data, function(index, value){
                console.log(index);
                $(".movieData").append(
                    "<tr>"+
                    "<td>"+ value.Title + "<td>" +
                    "<td>"+ value.Genre + "<td>" +
                    "<td>"+ value.Director + "<td>" +
                    "</tr>"
                );
            });
        });
        
    
    function getAllMovies(){
        $(document).ready(function() {
            $.ajax({
                type:'get',
                url: 'https://localhost:44325/api/movie',
                dataType:'jason',
                success: function(){
                    $('.movieData').html('');
                }
            })
            .then(function(data) {
                $.each(data, function(index, value){
                    $('.movieData').append(
                        "<tr>"+
                    "<td>"+ value.Title + "<td>" +
                    "<td>"+ value.Genre + "<td>" +
                    "<td>"+ value.Director + "<td>" +
                    "</tr>"
                );
            });
        });
    });

                             
    function getColor(){
        $(document).ready(function(){
            $("button").click(function(){
              $("body").css("background-color", "yellow","green");
        });
     });
    };
        e.preventDefault();
    $('#my-form').submit( processForm );
}(jQuery)
