# HTML

## Alter the content
```JavaScript
// set or reutrn the content of selected element(including HTML markup)
$('selector').html();

// set or return the text of selected element
// set or return the text of selected element
$('selector').text();

// insert content at the end of the selected element(元素内的结尾)
$('selector').append(string);

// insert content an the front of the selected element(元素内的开头)
$('selector').prepend(string);


// allows you to select HTML elements and append them to another element
$('selector').appendTo(string);

// insert content before the seleced element(元素外的后面)
$('selector').before(string);
$('selector').after(string);

// remove the selected element
$('selector').remove();
// remvoe the child elements of the selected element
$('selector').empty();

// repalce with the selected element
$('selector').repalceWith(string);

// clone an element
$('selector').clone();

// parent element
$('selector').parent();

// child element
$('selector').children();
```

## alter class
```JavaScript
// Adds one or more classes to the selected elements
$('selector').addClass(string);
$('selector').removeClass([string]);

// toggle between adding/removing classes from selected element
$('selector').toggleClass(string)

// set or return one or more style properties of the selected element
$('selector').css('property');
$('selector').css('property', 'value');
$('selector').css({'property1':'value1', 'property2':'value2', ...});
```

# alter attribute
```JavaScript
// get or set attribute of the selected element
$('selector').attr('attribute');
$('selector').attr('attribute', 'value');
$('selector').attr(object);
```