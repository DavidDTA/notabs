chrome.tabs.onCreated.addListener(function (tab) {
  chrome.windows.get(tab.windowId, {populate: true}, function(window) {
    if (window.tabs.length > 1) {
      chrome.windows.create({tabId: tab.id});
    }
  });
});
