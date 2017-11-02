let printHello = () =>console.log("hello");

printHello();



var  client  = require ('cheerio-httpcli') ; 
 
//  Google에서 "node.js"에 대한 검색한다.
var  word  = 'node.js'; 
 
client . fetch ('http://www.google.com/search', {q:word}, function (err, $, res, body) {       
  //  응답 헤더를 참조
  console.log(res.headers);
 
  //  HTML 제목을 표시
  console.log($('title').text());
 
  //  링크 목록을 표시
  $('a').each(function(idx) { 
    console.log ($(this).attr('href'));
  });
});