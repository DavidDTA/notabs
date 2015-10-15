chrome.tabs.onCreated.addListener(function (tab) {
  console.log('created!');
  chrome.windows.create({tabId: tab.id});
});
