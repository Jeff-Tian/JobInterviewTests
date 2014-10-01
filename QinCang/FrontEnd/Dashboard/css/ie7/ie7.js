/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-plus': '&#x2b;',
		'icon-googleplus': '&#xe601;',
		'icon-twitter': '&#x1f426;',
		'icon-facebook': '&#x66;',
		'icon-download': '&#x2193;',
		'icon-search': '&#x1f50d;',
		'icon-chart': '&#xe606;',
		'icon-dashboard': '&#x263c;',
		'icon-email': '&#x2709;',
		'icon-setting': '&#x2638;',
		'icon-star': '&#x2606;',
		'icon-upload': '&#x2191;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
