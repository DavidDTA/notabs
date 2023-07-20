(function() {
  chrome.tabs.onCreated.addListener(function (tab) {
    if (tab.index != 0) {
      chrome.windows.create({tabId: tab.id, focused: tab.active});
    }
  });
})();
