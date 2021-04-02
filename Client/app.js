// (function($){
//     function processForm( e ){
//         var dict = {
//         	Title : this["title"].value,
//             Genre : this["genre"].value,
//         	Director: this["director"].value

//         };

//         $.ajax({
//             url: 'https://localhost:44325/api/movie',
//             dataType: 'json',
//             type: 'post',
//             contentType: 'application/json',
//             data: JSON.stringify(dict),
//             success: function( data, textStatus, jQxhr ){
//                 $('#response pre').html( data );
//             },
//             error: function( jqXhr, textStatus, errorThrown ){
//                 console.log( errorThrown );
//             }
//         });

//         e.preventDefault();
//     }

//     $('#my-form').submit( processForm );
// })(jQuery); 

//         // .then(function(data){
//         //     $.each(data, function(index, value){
//         //         $("#movieData").append(
//         //             "<tr>"+
//         //             "<td>"+ value.Title + "</td>" +
//         //             "<td>"+ value.Genre + "</td>" +
//         //             "<td>"+ value.Director + "</td>" +
//         //             "</tr>"
//         //         )

//             console.log(data);
            
//         $(document).ready(function(){
//             $("button").click(function(){
//               $("body").css("background-color", "yellow");
//             });
//           });

//         e.preventDefault();




    $(function(){
        // $.ajax({
        //     url: "https://localhost:44325/api/movie",
        //     type: "GET",
        //     dataType:"JSON",
        //     success: function(data){
        //         console.log(data);
        //     },
        //     error: function(err){
        //         console.log(err)
        //     }
        // })
        populateTable()
       
    })
    
    
    function populateTable(){
        $("#movieData").html("")
        $.get("https://localhost:44325/api/movie", function(data){
            console.log(data);
    
            // $.each(data, function(el){
            //     $("#movieData").append(`<div>
            //         <div>${index}</div>

            //         "<tr>"+
            //         "<td>"+ ${el.Title} + "</td>" +
            //         "<td>"+ ${el.Genre} + "</td>" +
            //         "<td>"+ ${el.Director} + "</td>" +
            //         "</tr>"

            //         Title: ${el.Title}</div>
            //         <div>Genre: ${el.Genre}</div>
            //         <div>Director: ${el.Director}</div>

            //         <button onClick="editMovie(${el.movieId})">CLick me!</button>
            //         </div><br>`)
            // })
            // for(let i = 0; i < data.length;i++){
            //     $("#movieData").append(`<div><div>Title: ${data[i].Title}</div>
            //     <div>Director: ${data[i].Director}</div>
            //     <div>Genre: ${data[i].Genre}</div>
            //     </div><br>`)
            // }
    
            //$("#movies").html(JSON.stringify(data))
        }).fail(function(err){
            console.log(err)
        })
    }
    
    
//     function editMovie(id){
//      console.log(id);
//     }
// (jquery);





let people = [
    {
        firstName: "David",
        lastName: "Lagrange",
        gender: "Male"
    },
    {
        firstName: "Harper",
        lastName: "Lee",
        gender: "Female"
    },
    {
        firstName: "John",
        lastName: "Doe",
        gender: "Male"
    }
]


function putDataInTable(){
    for(let i = 0; i < people.length; i++){
        $("#davids-table").append(`<tr><td>${people[i].firstName}</td><td>${people[i].lastName}</td><td>${people[i].gender}</td></tr>`)
    }
    
}

putDataInTable();