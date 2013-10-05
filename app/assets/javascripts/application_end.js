//= require prettyphoto-rails
//= require jquery.fileupload/vendor/jquery.ui.widget
//= require jquery.fileupload/jquery.iframe-transport
//= require jquery.fileupload/jquery.fileupload
//= require jquery.fileupload/jquery.fileupload-process
//= require jquery.fileupload/jquery.fileupload-image
//= require jquery.fileupload/jquery.fileupload-validate
//= require jquery.fileupload/jquery.fileupload-ui

/*
   $('#classification_general').click(function(){
   $('#contact').css('height','440px');
   fields = " \
   <p><input class='field' id='name' name='name' type='text' value='Name' /></p> \
   <p><input class='field' id='email' name='email' type='text' value='Email' /></p> \
   <p><textarea class='field area' id='message' name='message'>Message</textarea></p> \
   <p><input name='commit' src='assets/submit.png' style='padding-left:280px' type='image' value='' /><br /></p>";

   $('#fieldss').html(fields);
   $(function(){
   $(':input').focus(function(){
   if (!this.clicked) {
   $(this).attr('value', '');
   $(this).val('');    
   this.clicked = true;
   }
   }); 
   });
   });

   $('#classification_helpee').click(function(){
   $('#contact').css('height','740px');
   fields = " \
   <p><input class='field' id='name' name='name' type='text' value='Name' /></p> \
   <p><input class='field' id='email' name='email' type='text' value='Email' /></p> \
   <p><input class='field' id='url' name='url' type='text' value='Site URL'></p> \
   <p><input id='upload' multiple='multiple' name='upload[]' type='file'></p> \
   <p><textarea class='field area' id='fivethings' name='fivethings'>Five main things to focus on</textarea></p> \
   <p><textarea class='field area' id='message' name='message'>Other things we need to know</textarea></p> \
   <p><input name='commit' src='assets/submit.png' style='padding-left:280px' type='image' value='' /><br /></p>";

   $('#fieldss').html(fields);

   $(function(){
   $(':input').focus(function(){
   if (!this.clicked) {
   $(this).attr('value', '');
   $(this).val('');    
   this.clicked = true;
   }
   }); 
   });
   });

   $('#classification_helper').click(function(){
   $('#contact').css('height','520px');

   fields = " \
   <p><input class='field' id='name' name='name' type='text' value='Name' /></p> \
   <p><input class='field' id='email' name='email' type='text' value='Email' /></p> \
   <p><input class='field' id='url' name='url' type='text' value='Portfolio URL'></p> \
   <p><textarea class='field area' id='message' name='message'>Message</textarea></p> \
   <p><input name='commit' src='assets/submit.png' style='padding-left:280px' type='image' value='' /><br /></p>";

   $('#fieldss').html(fields);

   $(function(){
   $(':input').focus(function(){
   if (!this.clicked) {
   $(this).attr('value', '');
   $(this).val('');    
   this.clicked = true;
   }
   }); 
   });
   });
   */
$('#classification_general, #classification_helpee, #classification_helper').click(function() {
    $('.contact_form_field').hide();
    $('.'+$(this).attr("id")+'_field').show().fadeOut().fadeIn();
    switch ($(this).attr("id")) 
    {
    case "classification_general":
    $('#submit_button').val("Send Message");
    break; 
    case "classification_helpee":
    $('#submit_button').val("Get Reviewed");
    break; 
    case "classification_helper":
    $('#submit_button').val("Apply to be an Expert");
    break; 
    }
    });

$('#expert_left').click(function() {

    left = "<div id='profile'> \
    <h2>MATTHEW B</h2> \
    It has been placed here solely to demonstrate the look and feel of finished, typeset text. \
    Only for show. He who searches for meaning here will be sorely disappointed.  \
    </div> \
    \
    <div id='clients'> \
    <h3 class='title'>CLIENTS</h3> \
    news.com.au<br> \
    digg.com \
    </div>\
    \
    <div id='specialties'>\
    <h3 class='title'>SPECIALTIES</h3>\
    UX design\
    Colours<br>\
    Computers<br>\
    </div>\
    \
    <div style='clear:both'></div>\
    ";

$('#right_expert').html(left);

return false;
});


$('#expert_right').click(function() {

    right = "<div id='profile'> \
    <h2>Boomer</h2> \
    This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. \
    Only for show. He who searches for meaning here will be sorely disappointed.  \
    </div> \
    \
    <div id='clients'> \
    <h3 class='title'>CLIENTS</h3> \
    theage.com.au<br> \
    ebay.com \
    </div>\
    \
    <div id='specialties'>\
    <h3 class='title'>SPECIALTIES</h3>\
    UX design\
    Colours<br>\
    Computers<br>\
    </div>\
    \
    <div style='clear:both'></div>";

$('#right_expert').html(right);

return false;
}); 


function resize_bg() {
  var height = $(window).height() - 70;
  height = height > 481 ? 481 : height;
  height = $(window).width() <= 1583 ? 456 : height;
  $('#big_image_div').css('height', height+"px");
  //:$('#bigimagediv').css('height','830px')
  var width = $('#big_image_div').width();
  if (width <= 1663) {
    $('#big_image_div').css('background-size', "1663px 481px");
  } else {
    $('#big_image_div').css('background-size', '100% auto');
  }
    
  // $('.usebutton').css('left', -1*width*0.75*0.5); 
  //$('.usebutton').css('top', height*0.75); 
  //$('.usebutton').css('left', 515/1200 * 1200 * -1 + 260)

  // the text + button is about 300px
  var topTxtPadding = $('#big_image_div').height();
  if (topTxtPadding < 600) {
    topTxtPadding =  topTxtPadding - 300; // on small screens text is 20px above bottom of image
  } else {
    topTxtPadding =  topTxtPadding / 2; // on big screens text is half way down image
  }
  $('#top_text_and_button').css('padding-top',topTxtPadding);
 
  console.log("height is: "+height+", width is: "+width);
}

$(window).resize(function() {
    setTimeout(resize_bg,20);
    }); 

$('.classification').click(function(){
     $(this).attr('value', '');
     $(this).val('');    
     this.clicked = true;
     alert("hello");
});

/* control the image rotation..*/
var images = [{'img':'blue_shirt.jpg','txt':'#fff'}, {'img':'brunette.jpg','txt':'#222'}, {'img':'overhead.jpg','txt':'#efefef'}, {'img':'green_chairs.jpg','txt':'#333'} ];
function preload(sources)
{
  jQuery.each(sources, function(i,source) { jQuery.get("/assets/main_bg/"+source['img']); });
}
var idx = 0;
function nextImage() {
  idx = (idx == (images.length -1)) ? 0 : idx + 1; 
  $('#big_image_div').fadeOut(10);
  $('#big_image_div').css('background-image',"url(/assets/main_bg/"+images[idx]['img']+")").fadeIn();
  $('#top_text').css('color', images[idx]['txt']);
  setTimeout('nextImage()', 5000);
}

$(function() {
    setTimeout(resize_bg,20);
    $('#fileupload').fileupload({
dataType: 'json',
done: function (e, data) {
$.each(data.result.files, function (index, file) {
  $('<p/>').text(file.name).appendTo(document.body);
  });
}
});
/*
    preload(images);
    setTimeout('nextImage()', 5000);
*/
     $("a[rel^='prettyPhoto']").prettyPhoto({
      social_tools: false,
      deeplinking: false,
      default_height: '222px'
     });
      
    $(".qa_questions").click(function() {
      $(".qa_answers").hide();
      var id = "#qa_"+this.id.replace('qa_q_','');
      $(id).fadeIn();
      $(".qa_q_selected").removeClass('qa_q_selected');
      $(this).addClass('qa_q_selected');
    });
});

