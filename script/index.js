//new designer functions

$(function(){
    
    $("#submit").click(function(){
        let data = {
            name: $("#username").val(),
            gender: $("#password").val()
            email:$("#")
            phone:
            design0bject:[]
        };

        alert(data);

        $.ajax({
            type: 'GET',
            url: "http://localhost:3000/design",

            success: function(loginInfo){
                console.log(JSON.stringify(loginInfo));
            }
        });
    });
});