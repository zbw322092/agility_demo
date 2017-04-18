var message = $$({
	model: {},
	view: {
		format: $('#my-format').html()
	},
	controller: {}
});

$$.document.append(message);


// model-view binding
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


// controller-event bindings
var person = $$({},
	'<p><input type="text" data-bind="name"/><span id="msg"/></p>',
	{
		'create': function() {
			this.view.$('#msg').text('Enter name');
		},
		'change': function() {
			this.view.$('#msg').text('Name changed to: ' + this.model.get('name'));
		},
		'focus input': function() {
			this.view.$('#msg').text('Focused on input!');
		}
	}
);

$$.document.append(person);


// inheritance and containers
var proto = $$({}, '<p data-bind="name" style="color: red" />');
$$.document.append(proto);
var obj1 = $$(proto, {name: 'Joe Doe'});
var obj2 = $$(proto, {name: 'Foo Bar'});
$$.document.append(obj1);
$$.document.append(obj2);

var counter = 0;
var item = $$({}, '<p>I\'m item #<span data-bind="id"></span></p>');
var list = $$({}, '<div><button>Click me to add item</button><ul></ul></div>', {
	'click button': function() {
		var newItem = $$(item, {id: counter});
		this.prepend(newItem, 'ul');
		++counter;
	}
});
$$.document.append(list);
































