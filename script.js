$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            givenName:{
                required:true,
                minlength:4
            },
            givenPlace:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            mobileNumber:{
                required:true,
                number:true
            },
            typeMessage:{
                required:true,
            }
        },
        submitHandler: function(form) {
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbxBMVY7c2YzdpZUVBmKKrP16Tzr0J5ybW7P8bd28A/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function(response){
                    alert("Form submitted successfully")
                    window.location.reload()
                },
                error:function (err){
                    alert("Something Error")
                }
            })
        }
    })
})

 