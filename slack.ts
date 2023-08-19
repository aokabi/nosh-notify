function postSlack(message: string) {
    const url = getSlackHookURL();
    if (url == null) {
        return
    }

    const data = {
        'text' : message + '\nhttps://nosh.jp/mypage/dashboard'
    }
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
        'method' : 'post',
        'contentType': 'application/json',
        'payload' : JSON.stringify(data)
    };
    UrlFetchApp.fetch(url, options)
}

const key = "SLACK_HOOK_URL";

function setSlackHookURL() {
  const url = "*****"
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty(key, url);
}

function getSlackHookURL() {
  const userProperties = PropertiesService.getUserProperties();
  return userProperties.getProperty(key)
}