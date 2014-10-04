(function($){
    $.fn.moreless	=	function(options){
		
        var defaults	=	{
            wordlimit	:	150,
            lessText	:	"less",
            moreText	:	"more",
            limitChars	:	"..."
        }
		
        var options		=	$.extend(defaults,options);
		
        var wordlimit	=	options.wordlimit;
        var lessText	=	options.lessText;
        var moreText	=	options.moreText;
        var limitChars	=	options.limitChars;
        
        var fcontentskel		=	$('<span class="ml_first_text"></span>');
        var scontentskel		=	$('<span class="ml_remain_text" style="display:none"></span>');
        var limit_text                  =       '<span class="ml_limit_text">'+limitChars+'</span>';
        var html_action                 =	'<a class="ml_more_less more" href="#"> '+moreText+'</a>';
        
        $(this).each(function(){ 
            var content		=	$(this).html(); 
            var contentLength	=	content!=undefined ? $.trim(content).length	:	0;
            var stripString	=	contentLength>wordlimit	?	true	:	false;
            
            if(stripString){
                var contentFirst	=	content.substring(0,wordlimit);
                var contentSecond	=	content.substring(wordlimit);
                var html1			=	'<span class="ml_first_text">'+contentFirst+'</span>';
                var html2			=	'<span class="ml_remain_text" style="display:none">'+contentSecond+'</span>';
                $(this).html('<span class="ml_content">'+html1+limit_text+html2+'</span>'+html_action);	
            }
        });
        		
			
        $('.ml_more_less').on('click',function(e){
            e.preventDefault();
            var parent =   $(this).parent();
            var contentFirst=parent.find('.ml_first_text').html();
            var contentSecond=parent.find('.ml_remain_text').html(); 
            var content=contentFirst+contentSecond;
            if($(this).hasClass('more')){
                parent.find('.ml_content').html(content);
                parent.find('.ml_content').data("fcontent",contentFirst);
                parent.find('.ml_content').data("scontent",contentSecond);
                $(this).removeClass('more').addClass('less');
                $(this).html(lessText);
            }else if($(this).hasClass('less')){
                var a=parent.find('.ml_content').data("fcontent"); 
                var b=parent.find('.ml_content').data("scontent");
                var html1			=	'<span class="ml_first_text">'+a+'</span>'; 
                var html2			=	'<span class="ml_remain_text" style="display:none">'+b+'</span>';
                parent.find('.ml_content').html(html1+limit_text+html2);
                $(this).removeClass('less').addClass('more');
                $(this).html(moreText);	
            }
        });
					
    }
	

}(jQuery))
