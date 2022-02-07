function main() {
  const query = 'subject:("メニュー変更受付中") from:no-reply@nosh.jp newer_than:1d';
  const threads = GmailApp.search(query);
  if (threads.length == 0) {
    return;
  }
  postSlack(threads[0].getFirstMessageSubject());
}

function postSlack(message) {
  const url = getSlackHookURL();
  const data = {
    'text' : message + '\nhttps://nosh.jp/mypage/dashboard'
  }
  const options = {
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(data)
  };
  UrlFetchApp.fetch(url, options)
}

function testPostSlack() {
  const text = 'test text';
  postSlack(text)
}
