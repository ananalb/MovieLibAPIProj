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
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            
            }
        });
        e.preventDefault();

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'get',
        }).then(function(data){{
            $.each(data, function(index, value){
                $("#response pre").append(
                    "<tr>"+
                    "<td>"+ value.Title + "<td>" +
                    "<td>"+ value.Genre + "<td>" +
                    "<td>"+ value.Director + "<td>" +
            )
            });
        }
            console.log(data);
        })                        }
        });      
        $(document).ready(function(){
            $("button").click(function(){
              $("body").css("background-color", "yellow","green");
            });
          });

        e.preventDefault();

    }

    $('#my-form').submit( processForm );

})(jQuery);

