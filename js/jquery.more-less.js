(function($){
	$.fn.moreless	=	function(options){
		
		var defaults	=	{
			wordlimit	:	150,
			lessText	:	"less",
			moreText	:	"more",
			limitChars	:	"..."
		}
		
		var options		=	$.extend(defaults,options);
		
		var	wordlimit	=	options.wordlimit;
		var lessText	=	options.lessText;
		var moreText	=	options.moreText;
		var limitChars	=	options.limitChars;
		var content		=	$(this).html();
		var contentLength	=	content!=undefined ? content.length	:	0;
		var stripString	=	contentLength>wordlimit	?	true	:	false;
		
		var html1			=	"";
		var html2			=	"";
		var html3			=	"";
		var html_action		=	'<a class="ml_more_less more" href="#"> '+moreText+'</a>';
			
		if(stripString){
			var contentFirst	=	content.substring(0,wordlimit);
			var contentSecond	=	content.substring(wordlimit);
			html1			=	'<span>'+contentFirst+'</span>';
			html2			=	'<span class="ml_limit_text">'+limitChars+'</span>';
			html3			=	'<span class="ml_remain_text" style="display:none">'+contentSecond+'</span>';
			$(this).html('<span class="ml_content">'+html1+html2+html3+'</span>'+html_action);	
			
			
			$('.ml_more_less').on('click',function(e){
				e.preventDefault();
				if($(this).hasClass('more')){
				$(this).prevAll('.ml_content').html(content);
				$(this).removeClass('more').addClass('less');
				$(this).html(lessText);
				}else if($(this).hasClass('less')){
				$(this).prevAll('.ml_content').html(html1+html2+html3);
				$(this).removeClass('less').addClass('more');
				$(this).html(moreText);	
				}
			});
			
		}
		
	}
	

}(jQuery))
