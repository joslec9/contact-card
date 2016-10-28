$(document).ready(function () {
    $('form').submit(function () {
        var name = $('#first_name').val() + ' ' + $('#last_name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var dscr = $('#comment').val();
        $("#new_contact").append('<div class="new_contact"><h1 class="card">' + name + '</h1><h3 class="email">' + email + '</h3><h3 class="phone">' + phone + '</h3><h3 class="descr">' + dscr + '</h3><h3 class="card">Click for additional details</h3></div>');
        $('.card').show();
        $('.descr, .email, .phone').hide();
        return false;
    });
    
    $('#new_contact').on('click', '.new_contact', function () {
        var self = $(this);
        var front = $(this).children('h3').attr('style');
        var back;
        if (front == 'display: none;') {
            front = '.card';
            back = '.email, .phone, .descr';
        } else {
            front = '.email, .phone, .descr';
            back = '.card';
        };
        
        self.children(front).fadeOut(800,function(){
            self.children(back).fadeIn(800).animate("bounce");
        });
        
    });

    $('.contact').click(function () {
        $('#card').toggleClass('active');
        $('.banner').toggleClass('active');
        $('.photo').toggleClass('active');
        $('.email-form').toggleClass('active');
        var buttonText = $('button.contact#main-button').text();
        if (buttonText === 'back') {
            buttonText = 'click to get in touch';
            $('button.contact#main-button').text(buttonText);
        } else {
            buttonText = 'back';
            $('.contact').text(buttonText);
        }
    });
});