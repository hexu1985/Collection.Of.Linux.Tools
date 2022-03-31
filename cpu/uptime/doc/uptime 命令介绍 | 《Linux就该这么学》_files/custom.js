/**
 * 在这里自定义你的JS代码
 */
jQuery(document).ready(function(){
	jQuery('.textwidget a').each(function(){
		var title = jQuery(this).text();		
		jQuery(this).attr('title',title);		
    })
})