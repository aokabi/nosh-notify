function main() {
  const query = 'subject:("各種変更受付中") from:no-reply@nosh.jp newer_than:1d';
  const threads = GmailApp.search(query);
  if (threads.length == 0) {
    return;
  }
  postSlack(threads[0].getFirstMessageSubject());
}

function testPostSlack() {
  const text = 'test text';
  postSlack(text)
}