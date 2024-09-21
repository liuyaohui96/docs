1. 判断用户是否存在，存在则提示，不存在则新建 doc，并保存

   ```JS
   Admin.findOne({
   username: 'dafanshu'
   }).then(admin => {
   if (admin) console.log('admin is exist');
   else
       new Admin({
       username: 'dafanshu',
       password: '123'
       }).save();
   });

   ```
