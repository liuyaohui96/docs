// 业务需求：
// 发送ajax请求获取新闻内容
// 新闻内容获取成功后再次发送请求，获取对应的新闻评论内容
// 新闻内容获取失败则不需要再次发送请求。

function* sendXml() {
  // url为next传参进来的数据
  let url = yield getNews('http://localhost:3000/news?newsId=2'); //获取新闻内容
  yield getNews(url); //获取对应的新闻评论内容，只有先获取新闻的数据拼凑成url,才能向后台请求
}
function getNews(url) {
  $.get(url, function(data) {
    console.log(data);
    let commentsUrl = data.commentsUrl;
    let url = 'http://localhost:3000' + commentsUrl;
    // 当获取新闻内容成功，发送请求获取对应的评论内容
    // 调用next传参会作为上次暂停是yield的返回值
    sx.next(url);
  });
}
let sx = sendXml(); // 发送请求获取新闻内容
sx.next();
