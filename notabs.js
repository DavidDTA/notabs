(function() {
  chrome.tabs.onCreated.addListener(function (tab) {
    chrome.windows.get(tab.windowId, {}, function(window) {
      if (window.type == "normal") {
        chrome.windows.create({tabId: tab.id, type: "popup"});
      }
    });
  });
})();
