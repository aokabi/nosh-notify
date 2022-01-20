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
