if($('seccode_cSp7ZfxH')) {
	if(!$('vseccode_cSp7ZfxH')) {
		var sectpl = seccheck_tpl['cSp7ZfxH'] != '' ? seccheck_tpl['cSp7ZfxH'].replace(/<hash>/g, 'codecSp7ZfxH') : '';
		var sectplcode = sectpl != '' ? sectpl.split('<sec>') : Array('<br />',': ','<br />','');
		var string = '<input name="seccodehash" type="hidden" value="cSp7ZfxH" /><input name="seccodemodid" type="hidden" value="portal::view" />' + sectplcode[0] + '验证码' + sectplcode[1] + '<input name="seccodeverify" id="seccodeverify_cSp7ZfxH" type="text" autocomplete="off" style="ime-mode:disabled;width:100px" class="txt px vm" onblur="checksec(\'code\', \'cSp7ZfxH\', 0, null, \'portal::view\')" />' +
			' <a href="javascript:;" onclick="updateseccode(\'cSp7ZfxH\');doane(event);" class="xi2">换一个</a>' +
			'<span id="checkseccodeverify_cSp7ZfxH"><img id="checksec_none_cSp7ZfxH" src="' + STATICURL + 'image/common/none.gif" width="16" height="16" class="vm" /></span>' +
			sectplcode[2] + '<span id="vseccode_cSp7ZfxH">输入下图中的字符<br /><img onclick="updateseccode(\'cSp7ZfxH\')" width="100" height="40" src="misc.php?mod=seccode&update=28447&idhash=cSp7ZfxH" class="vm" alt="" /></span>' + sectplcode[3];
		evalscript(string);
		$('seccode_cSp7ZfxH').innerHTML = string;
	} else {
		var string = '输入下图中的字符<br /><img onclick="updateseccode(\'cSp7ZfxH\')" width="100" height="40" src="misc.php?mod=seccode&update=28447&idhash=cSp7ZfxH" class="vm" alt="" />';
		evalscript(string);
		$('vseccode_cSp7ZfxH').innerHTML = string;
	}
	
}