$(document).ready(function () {
    $('form').submit(function () {
        var name = $('#first_name').val() + ' ' + $('#last_name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var dscr = $('#comment').val();
        $("#new_contact").append('<div class="contact"><h1 class="card">' + name + '</h1><h3 class="descr">' + dscr + '</h3><h3 class="email">' + email + '</h3><h3 class="phone">' + phone + '</h3><h3 class="card">Click for description!</h3></div>');
        $('.card').show();
        $('.descr').hide();
        $('.email').hide();
        $('.phone').hide();
        return false;
    });
    
    $('#new_contact').on('click', '.contact', function () {
        var front = $(this).children('h3').attr('style');
        var back;
        if (front == 'display: none;') {
            front = '.card';
            back = '.descr';
        } else {
            front = '.descr';
            back = '.card';
        };
        $(this).children(front).hide();
        $(this).children(back).show();
    });

    $('.contact').click(function (e) {
        $('.card').toggleClass('active');
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