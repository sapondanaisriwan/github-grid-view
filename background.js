chrome.runtime.onInstalled.addListener(({ reason }) => {
  // match the github domain and reload all of them
  if (reason === "install") {
    chrome.tabs.query({ url: "*://github.com/*" }, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.reload(tab.id);
      });
    });
  }
});
