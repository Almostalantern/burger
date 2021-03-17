$(document).ready(function(){
    $(".devour_burger").on("click", function(e){
        e.preventDefault();
        var id = $(this).val();
        console.log(id);
        $.ajax({
            method:"PUT", 
            url: "/burgers/" + id,

        }).then(function(data){
            location.reload();
            console.log(data);
        })
    })
 
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
         var newBurger = {
           name: $("#newBurger").val().trim(),
          
        
        };
        // var newBurger = $("#newBurger").val().trim();
      console.log(newBurger)
        // Send the POST request.
        $.ajax({
          type: "POST",
          url: "/api/burgers",
          data: newBurger,
          dataType: "json"
        }).then(
          function() {
            console.log("created new Burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

})