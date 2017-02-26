$(function(){
   $('#thum a').click(function(){
       $("#main img").after("src",$(this).after("href")+"' alt=''>");
            $("#main img:last").fadeOut("fast",function(){
                $(this).remove();
            });
       return false;
   }) ;
});