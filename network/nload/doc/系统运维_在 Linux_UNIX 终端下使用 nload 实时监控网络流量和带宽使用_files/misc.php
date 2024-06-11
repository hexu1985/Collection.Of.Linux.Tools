if($('seccode_cSXCiilG')) {
	if(!$('vseccode_cSXCiilG')) {
		var sectpl = seccheck_tpl['cSXCiilG'] != '' ? seccheck_tpl['cSXCiilG'].replace(/<hash>/g, 'codecSXCiilG') : '';
		var sectplcode = sectpl != '' ? sectpl.split('<sec>') : Array('<br />',': ','<br />','');
		var string = '<input name="seccodehash" type="hidden" value="cSXCiilG" /><input name="seccodemodid" type="hidden" value="portal::view" />' + sectplcode[0] + '验证码' + sectplcode[1] + '<input name="seccodeverify" id="seccodeverify_cSXCiilG" type="text" autocomplete="off" style="ime-mode:disabled;width:100px" class="txt px vm" onblur="checksec(\'code\', \'cSXCiilG\', 0, null, \'portal::view\')" />' +
			' <a href="javascript:;" onclick="updateseccode(\'cSXCiilG\');doane(event);" class="xi2">换一个</a>' +
			'<span id="checkseccodeverify_cSXCiilG"><img id="checksec_none_cSXCiilG" src="' + STATICURL + 'image/common/none.gif" width="16" height="16" class="vm" /></span>' +
			sectplcode[2] + '<span id="vseccode_cSXCiilG">输入下图中的字符<br /><img onclick="updateseccode(\'cSXCiilG\')" width="100" height="40" src="misc.php?mod=seccode&update=83660&idhash=cSXCiilG" class="vm" alt="" /></span>' + sectplcode[3];
		evalscript(string);
		$('seccode_cSXCiilG').innerHTML = string;
	} else {
		var string = '输入下图中的字符<br /><img onclick="updateseccode(\'cSXCiilG\')" width="100" height="40" src="misc.php?mod=seccode&update=83660&idhash=cSXCiilG" class="vm" alt="" />';
		evalscript(string);
		$('vseccode_cSXCiilG').innerHTML = string;
	}
	
}