$(document).ready(function(){
    $('.user-password').click(function(){
        if($('#new-user').is(':checked')){
            $(".user-signin").show();
            $(".user-signup").slideDown();
            $("#login").attr("action","/signup");
            $('#first-name').prop('required', true);
            $('#last-name').prop('required', true);
            $('#term').prop('required', true);
        } 
        if($('#exist-user').is(':checked')){
            $(".user-signin").show();
            $(".user-signup").slideUp();
            $("#login").attr("action","/signin");
            $('#first-name').prop('required', false);
            $('#last-name').prop('required', false);
            $('#term').prop('required', false);
        }
    });
});