$(document).ready(function () {
    getdesigns();
        

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
               window.location.href="newdesign.html";
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
            window.location.href="newdesign.html"
        })
        })

    });

function getdesigns(){
    //like creating an object
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/design",
        dataType: "Json",
        success: function(response){
            AllDesigns(response);
        }
    });
}

function AllDesigns(designs){
    var parent = $(".parent");
    var child = $(".child");
    designs.forEach((design) => {
        var newDesign = child.clone();
        newDesign.removeClass("hide");
        newDesign.removeClass("child");
        var id = design["id"];
        var imgUrl = "../fashionImages/design"+id+".jpg";
        newDesign.find(".design-img").attr("src", imgUrl);
        newDesign.find(".design-name").text(design["designname"]);
        newDesign.find(".design-size").text(design["size"]);
        newDesign.find(".designer-cos").text(design["cost"]);
        newDesign.find(".designer-name").text(design["designer-name"]);
        var viewButton = newDesign.find(".view");
        var deleteButton = newDesign.find(".delete");
        viewButton.click(function(){

        });
        deleteButton.click(function(){
            deleteDesign(id);
        });
        newDesign.appendTo(parent).show();
    })
}

function deleteDesign(designId){
    $.ajax({  
        method: "DELETE",
        url: "http://localhost:3000/design/"+ designId,
        dataType: "Json",
        success: function(response){
            alert("Deleted");
            window.location.reload();
        }
    });



    function updateDesign(designId){
        $.ajax({
            method: "PUT",
            url: "http://localhost:3000/design/",
            dataType: "json",
            succes: function()
        });

 $("#search").click(function(){
    var searchindex = $("#searchinput").val();
    console.log(searchindex)
});
function searchDesign(designId){
    $.ajax({
        method: "GET/designId",
        url: "http://localhost:3000/design/" + designId,
        dataType: "json",
        success: function(found){
            alert("image found");
            window.location.href
            window.location.reload();
        }
    })
}
}