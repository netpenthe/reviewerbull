//= require prettyphoto-rails
//= require jquery.fileupload/vendor/jquery.ui.widget
//= require jquery.fileupload/jquery.iframe-transport
//= require jquery.fileupload/jquery.fileupload
//= require jquery.fileupload/jquery.fileupload-process
//= require jquery.fileupload/jquery.fileupload-image
//= require jquery.fileupload/jquery.fileupload-validate
//= require jquery.fileupload/jquery.fileupload-ui
//= require jquery.BlackAndWhite

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
    $('#submit_button').val("I'm an Expert");
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

$('.field').focus(function(){
  if(!this.clicked){
     $(this).attr('value', '');
     $(this).val('');    
     this.clicked = true;
   }
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
    /*$('#fileupload').fileupload({
dataType: 'json',
done: function (e, data) {
$.each(data.result.files, function (index, file) {
  $('<p/>').text(file.name).appendTo(document.body);
  });
}
}); */
/*
$(window).load(function(){
    $('.bwWrapper').BlackAndWhite({
        hoverEffect : true, // default true
        // set the path to BnWWorker.js for a superfast implementation
        webworkerPath : false,
        // for the images with a fluid width and height 
        responsive:true,
        speed: { //this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 200, // 200ms for fadeIn animations
            fadeOut: 800 // 800ms for fadeOut animations
        }
    });
    $('.experts').click(function(e){
      $('.experts').addClass('bwWrapper');
      $(this).removeClass('bwWrapper');
    });
    
}); */

  // pre load the usebutton rollover so it doesn't flash
  jQuery.get("/assets/use-button-rollover.png");
/*
    preload(images);
    setTimeout('nextImage()', 5000);
*/
     $("a[rel^='prettyPhoto']").prettyPhoto({
      social_tools: false,
      deeplinking: false,
     });

      $("#find_reviewer_button, #change_reviewer_button").prettyPhoto({
      social_tools: false,
      deeplinking: false,
      default_width: '850px'
     });
      
    $(".qa_questions").click(function() {
      $(".qa_answers").hide();
      var id = "#qa_"+this.id.replace('qa_q_','');
      $(id).fadeIn();
      $(".qa_q_selected").removeClass('qa_q_selected');
      $(this).addClass('qa_q_selected');
    });
});


/** tool tip */
$(function()
{
  var hideDelay = 500;  
  var currentID;
  var hideTimer = null;
  var expertPopup = null;
  var expertCache = [];

  // One instance that's reused to show info for the current person
  var container = $('<div id="personPopupContainer">'
      + '<table width="" border="0" cellspacing="0" cellpadding="0" align="center" class="personPopupPopup">'
      + '<tr>'
      + '   <td class="corner topLeft"></td>'
      + '   <td class="top"></td>'
      + '   <td class="corner topRight"></td>'
      + '</tr>'
      + '<tr>'
      + '   <td class="left">&nbsp;</td>'
      + '   <td><div id="personPopupContent"></div></td>'
      + '   <td class="right">&nbsp;</td>'
      + '</tr>'
      + '<tr>'
      + '   <td class="corner bottomLeft">&nbsp;</td>'
      + '   <td class="bottom">&nbsp;</td>'
      + '   <td class="corner bottomRight"></td>'
      + '</tr>'
      + '</table>'
      + '</div>');

  $('body').append(container);

  $('.personPopupTrigger').on('mouseover', function()
  {
      var expert = $(this).attr("id");
      if (expertPopup == expert) {
        return;
      }
      // format of 'rel' tag: pageid,personguid
      var settings = $(this).attr('rel').split(',');
      var pageID = settings[0];
      currentID = settings[1];

      // If no guid in url rel tag, don't popup blank
      if (currentID == '')
          return;

      if (hideTimer)
          clearTimeout(hideTimer);

      var pos = $(this).offset();
      var width = $(this).width();
      container.css({
          left: (pos.left + width - 70) + 'px',
          top: pos.top + 60 + 'px'
      });

      if (typeof expertCache[expert] !== "undefined") //check cache first
      {
        $('#personPopupContent').html(expertCache[expert]);
      } else {
        $('#personPopupContent').html('<img src="/assets/spinner.gif">');
        $.ajax({
            type: 'GET',
            url: '/expert_mini_profile/-1',
            data: 'expert=' + pageID,
            success: function(data)
            {
                if (data.indexOf('h3') < 0)
                {
                    $('#personPopupContent').html('<span >Page ' + pageID + ' did not return a valid result for person ' + currentID + '.<br />Please have your administrator check the error log.</span>');
                }

                    //var text = $(data).find('.personPopupResult').html();
                    //text = $(data).html();
                    $('#personPopupContent').html(data);
                    expertPopup = expert;
                    expertCache[expert] = data;
            }
        });
      }

      //container.css('display', 'block');
      container.fadeIn();
  });

  $('.personPopupTrigger').on('mouseout', function()
  {
      if (hideTimer) {
          clearTimeout(hideTimer);
      }
      hideTimer = setTimeout(function()
      {
          //container.css('display', 'none');
        expertPopup = null;
        container.fadeOut();
      }, hideDelay);
  });

  // Allow mouse over of details without hiding details
  $('#personPopupContainer').mouseover(function()
  {
      if (hideTimer)
          clearTimeout(hideTimer);
  });

  // Hide after mouseout
  $('#personPopupContainer').mouseout(function()
  {
      if (hideTimer)
          clearTimeout(hideTimer);
      hideTimer = setTimeout(function()
      {
          container.css('display', 'none');
      }, hideDelay);
  });

  // Load up the Experts
   //function ExpertProfile(id, name, city, num_of_reviews, main_url, about, response_time, portfolio1, portfolio2, portfolio3 ) {
  view_expert = 0;
  showExpert(0);
});

function showExpert(num) {
  var ep = expert_profiles[num];
  $('#pp_full_res #ep_name, #ep_name').html(ep.name);
  $('#pp_full_res #ep_city, #ep_city').html(ep.city);
  $('#pp_full_res #ep_profile, #ep_profile').html(ep.num_of_reviews + " reviews<br />" + ep.response_time + " avg. response time<br /><a href='http://" + ep.main_url +"' target='_blank' class='dark_green_hover'>http://"+ep.main_url+"</a>");
  $('#pp_full_res #ep_about, #ep_about').html(ep.about);
  $('#pp_full_res #ep_image, #ep_image').attr("src", "/assets/experts/"+ep.id+"/"+ep.id+".jpg");

  $('#pp_full_res #ep_feedbacks, #ep_feedbacks').empty();
  for (var i=0; i < ep.feedbacks.length; i++) { 
    var fb = ep.feedbacks[i];
    var e = $("<div class='ep_feedback'><div style='float:right'>"+fb.txt+"</div><div style='float:right'>- "+fb.from+" of <em>"+fb.site+"</em><br /><br></div><br /><br /></div>");
    e.appendTo($('#pp_full_res #ep_feedbacks, #ep_feedbacks'));
  }

  $('#pp_full_res #ep_portfolio, #ep_portfolio').empty();
  for (var i=0; i < ep.portfolios.length; i++) {
    var p = ep.portfolios[i];
    var padding = (i == 0) ? 0 :"13px";
    var e = $("<a href='http://"+p.url+"' target=_blank><img class='ep_portfolio_image' src='"+p.image_url+"' width='70' style='margin-left:"+padding+"'/></a>");
    e.appendTo($('#pp_full_res #ep_portfolio, #ep_portfolio'));
  }
}

function rotate(position){
  //position is the last one we saw
  rand = position;

  var quotes = new Array();
  quotes[1] = "Often the difference between a good and great design is a matter of refining a few elements <span class='quote_author'> - Sun Tzu</span>";
  quotes[2] = "A fanatic is one who can't change his mind and won't change the subject <span class='quote_author'> - Winston Churchill</span>";
  quotes[3] = "An eye for an eye only ends up making the whole world blind <span class='quote_author'> - Ghandi</span>";
  quotes[4] = "Intelligence is the ability to adapt to change. <span class='quote_author'> - Stephen Hawking</span>";
  quotes[5] = "To improve is to change; to be perfect is to change often <span class='quote_author'> - Winston Churchill</span>";
  quotes[6] = "To save one from a mistake is a gift of paradise. <span class='quote_author'> - Stilgar</span>";
  quotes[7] = "Those who initiate change will have a better opportunity to manage the change that is inevitable... <span class='quote_author'> - William Pollard</span>";
  quotes[8] = "Change is such hard work. <span class='quote_author'> - Billy Crystal</span>";
  
  //dont load the same one we just loaded :)
  while(position==rand){
    rand = Math.floor((Math.random()*quotes.length)+1);
  }
  //console.log(rand);

  $("#quotes").fadeOut(function() {
    $(this).html(quotes[rand]).fadeIn();
  });

  return rand;
}

var view_expert = 0;
var selected_expert = 0;
function changeExpert(dir) {
  if (dir == 1) { // show next
    view_expert = ( view_expert == (expert_profiles.length - 1)) ? 0 : ( view_expert + 1);
  } else {
    view_expert = ( view_expert == 0) ? (expert_profiles.length - 1) : ( view_expert - 1);
  }
  showExpert(view_expert); 
  return false;
}

function selectExpert() {
  var e = expert_profiles[selected_expert];
  $('#expert_name').val(e.name);
  $('#selected_expert_image').attr("src", "/assets/experts/"+e.id+"/"+e.id+".jpg");
  $('#selected_expert_name').html("<strong>Your expert:</strong> "+e.name); 
  $('#found_reviewer_wrapper').fadeIn();
  $('#find_reviewer_wrapper').fadeOut();
}


// this is called when you hit "submit"
function getDetails(){
  if($('#url').val() != "Site URL"){
    $('#sf_site').attr("value", $('#url').val());
    //$('#pp_full_res #sf_site_span').html($('#url').val());
    document.getElementById("sf_site_span").innerHTML = $('#url').val();
  }
  if($('#email').val()!="Email"){
    $('#sf_email').attr("value", $('#email').val());
    //$('#pp_full_res #sf_email_span').html($('#email').val());
    document.getElementById("sf_email_span").innerHTML = $('#email').val();
  }
  //console.log($('#expert_name').val());
  //$('#pp_full_res #sf_expert').attr("text",$('#expert_name').val());

  // not sure why .text doesnt work. 
  span = document.getElementById("sf_expert")
  span.innerHTML = $('#expert_name').val();

  $('#pp_full_res #save-task, #save-task').show();
};

  $('#save-task').submit(function() {
    var site = $('#sf_site').attr("value");
    var email = $('#sf_email').attr("value");
    var expert = $('#sf_expert').text();

    //#fuuuuuuuuu
    var notes = $('#pp_full_res #sf_notes').val();

    $('#save-task').hide();
    $('#pp_full_res').toggle();
    $('#pp_full_res').toggle();
       
    $.ajax({
        url: '/task/create', //sumbits it to the given url of the form
        data: {sf_email: email, sf_site: site, sf_expert: expert, sf_notes: notes},
        type: "POST",
        dataType: 'JSON'
    }).success(function(json){
        //console.log(json["id"]);
        //console.log("success")
        $("#pp_full_res #submit-task-wrapper").hide(); 
        $("#pp_full_res #paypal").show();
        $("#pp_full_res #paypal_item_number").val(json["id"]);
    });
    return false; // prevents normal behaviour
});


$('#expert1').click(function(){
    $('#expert_name').val("James McNaught");
});


$('#expert2').click(function(){
    $('#expert_name').val("Stephen Grace");
    console.log("grace");
});

$('#expert3').click(function(){
    $('#expert_name').val("Robin Mather");
});

function ExpertProfile(id, name, city, num_of_reviews, main_url, about, response_time, portfolio1, portfolio2, portfolio3 ) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.num_of_reviews = num_of_reviews;
    this.main_url = main_url;
    this.about = about;
    this.response_time = response_time;
    this.portfolios = [];
    this.feedbacks = [];  
    this.foo = function() { // one function per User instance, can access 'name' variable
    };
}

function Feedback(from, site, txt) {
  this.from = from;
  this.site = site;
  this.txt = txt;
}

function Portfolio(url, image_url, title, txt) {
  this.url = url;
  this.image_url = image_url;
  this.title = title;
  this.txt = txt;
}

/* random quotes */
var randy = 0;
//load one randomly at first
setTimeout(function(){randy = rotate(randy);},500);

//load a new one every 20 secs
setInterval(function(){randy = rotate(randy);},20000);


