$(document).ready(function()
{
    $('.contact').click(function (e) 
    {
        $('.card').toggleClass('active');
        $('.banner').toggleClass('active');
        $('.photo').toggleClass('active');
        $('.email-form').toggleClass('active');  
        var buttonText = $('button.contact#main-button').text();
        if (buttonText === 'back')
        {
            buttonText = 'click to get in touch';
            $('button.contact#main-button').text(buttonText);
        }
        else
        {
            buttonText = 'back';
            $('button.contact#main-button').text(buttonText);
		}

    });
});

$(document).ready(function() {
                var id = 0;
                $('.submit').on('click', function() {
                    console.log('button clicked');
                    console.log($('[name=first]').val());
                    var name = $('[name=first]').val() + " " + $(
                        '[name=last]').val();
                    var description = $('[name=description]').val();
                    $('.card').append('<li id=' + id  + '><h1>' + name +
                        '</h1><h2>Click for description</h2><h3>' + description + '</h3></li>'
                    );
                    $('.card').children('li#' + id).children('h3').hide();
                    id++;
                });

                $(document).on('click', 'h3', function(){
                    console.log($(this));
                    $(this).hide();
                    $(this).prevAll().show();
                })

                $(document).on('click', 'h2', function(){
                    $(this).prev().hide();
                    $(this).hide();
                    $(this).next().show();
                })


            });

//turn on to make the photo follow mouse
// $(document).ready(function()
// {
//     $(document).mousemove(function( event ) 
//     {
//         var docWidth = $(document).width();
//         var docHeight = $(document).height();
//         var xValue = (event.clientX/docWidth)*100;
//         var yValue = (event.clientY/docHeight)*100;
//         $('.photo').css('background-position', xValue+'%,'+yValue+'%');
//     });
// });


	/*	$(document).ready(function(){

			$('form').submit(function(){
				var name = $('input[name="first_name"]').val() + ' ' + $('input[name="last_name"]').val();
				var dscr = $('textarea[name="description"]').val();
				$("#new_contact").append('<div class="contact"><h1 class="card">' + name + '</h1><h3 class="descr">' + dscr + '<h3 class="card">Click for description!</h3></div>');
				$('.card').show();
				$('.descr').hide();
				return false;
			});
			$('#new_contact').on('click', '.contact', function(){
				var front = $(this).children('h3').attr('style');
				var back;
				if (front == 'display: none;'){
				front = '.card';
				back = '.descr';
				} else {
				front = '.descr';
				back = '.card';
				};
					$(this).children(front).hide();
					$(this).children(back).show();
			});

		});


var description = $('[name=description]').val();
                    $('.card').append('<li id=' + id  + '><h1>' + name +
                        '</h1><h2>Click for description</h2><h3>' + description + '</h3></li>'
                    );
                    $('.card').children('li#' + id).children('h3').hide();
                    id++;
                });

                $(document).on('click', 'h3', function(){
                    console.log($(this));
                    $(this).hide();
                    $(this).prevAll().show();
                })

                $(document).on('click', 'h2', function(){
                    $(this).prev().hide();
                    $(this).hide();
                    $(this).next().show();
                })*/
