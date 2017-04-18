var message = $$({
	model: {},
	view: {
		format: $('#my-format').html()
	},
	controller: {}
});

$$.document.append(message);

var message2 = $$({txt: 'It is data from model'},
	'<div data-bind="txt"></div>');
$$.document.append(message2);

var url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492514226357&di=a67c7493578e8afd540859590d8984f5&imgtype=0&src=http%3A%2F%2Fnode-os.com%2Fimages%2Fnodejs.png';
var icon = $$({
	path: url
}, '<div>JS Img from model: <img data-bind="src=path"></div>');
$$.document.append(icon);

var checkbox = $$(
	{a: false, b: true},
	$('#my-checkbox').html()
);
$$.document.append(checkbox);

