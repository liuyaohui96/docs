let template = require('art-template');
let fs = require('fs');

fs.readFile('./tpl.html', (err, data) => {
  if (err) return console.log('fail to get tpl.html');

  let ret = template.render(data.toString(), {
    name: 'liuyaohui',
    age: 24,
    province: '广东',
    hobbies: ['basketball', 'football']
  });
  console.log(ret);
});
