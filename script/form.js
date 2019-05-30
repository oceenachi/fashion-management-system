import { Http2SecureServer } from "http2";

//create event liatener
// document.getElementById("login").addEventListener("click", loadText);
//   function loadText(){
//       let loginData={
//           username:getElementById("username").val(),
//           password:getElementById("password").val()
//       };
//       alert(data);
//   }


$(document).ready(function () {

    // $.post(url, data, call func)
    $("#submit").click(function (e) {
        e.preventDefault();

        const designname = $("#designname").val();
        const fabric = $("#fabric").val();
        const color= $("#color").val();
        const size= $("#size").val();
        const cost=$("#cost").val();
        const imageurl=$("#imageurl").val();

        const design={ designname, fabric, color, size, cost, imageurl };
        const url ="http://localhost:3000/design"
        $.post(url,design).done(function(data){
            console.log(data);
        })
    })
    $("#register").click(function(e){
        e.preventDefault();
        
           const fullname = $("#fullname").val();
            const brandname= $("#brandname").val();
            const phone= $("#phone").val();
            const email= $("#email").val();
            const address= $("#address").val();

            const designers={fullname,brandname,phone,email,address};
            console.log(designers);
            const url ="http://localhost:3000/designers"
            $.post(url, designers).done(function(peacock){
                console.log(peacock);
            })            
        })
        $("#users").click(function(e){
            e.preventDefault();
        const username=$("#username").val();
        const password=$("#password").val();

        const users={username,password};
        console.log(users);
        const url= "http://localhost:3000/users"
        $.post(url, users).done(function(big){
            console.log(big)
        })
        })

    });



function getdesigns(){
    //like creating an object
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/design",
        dataType: "Json"
    })
    .done(function(data){
        console.log(data);
        for(i in data){

 }

        $map(data, function(post, i){
            $("#result").append("<h3>" + post.title + "</h3><p>" + post.body  + "</p>");
        });
    });
}
        
