/**
* api to send mail to enventnagri support team.
*
* @author Rishu Kumar
*/


$(document).ready(function(){
    $("#contactForm").submit(function(e){
        e.preventDefault();
        var name = $("#name").val();
        var mob = $("#mob").val();
        var email = $("#email").val();
        var message = $("#message").val();
        if(name.length!=0 && email.length!=0 && mob.length!=0 && message.length!=0)
        {
            $.ajax({
                type: 'POST',
                url: 'https://rishukr06.000webhostapp.com/code/sendgrid/code/index.php',
                data: {
                    'name':name,
                    'mobile':mob,
                    'email':email,
                    'message':message
                },
                cache: false,
                success: function(response)
                {
                    if(response['status']===500)
                    {
                        alert("mail not sent")
                    }
                    else if(response['status']===200)
                    {
                        alert("mail sent");
                    }
                    else{
                        alert("something went wrong!"); 
                    } 
                },
                error: function (jqXHR, exception) 
                {
                    var msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Not connect.\n Verify Network.';
                    } else if (jqXHR.status == 404) {
                        msg = 'Requested page not found. [404]';
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error [500].';
                    } else if (exception === 'parsererror') {
                        msg = 'Requested parse failed.';
                    } else if (exception === 'timeout') {
                        msg = 'Time out error.';
                    } else if (exception === 'abort') {
                        msg = 'Ajax request aborted.';
                    } else {
                        msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    }
                    alert(msg);
                }
            });
        }
        else{
            alert ('****sorry! required field not set *** ')
        }
    
    });
});