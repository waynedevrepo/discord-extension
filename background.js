chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    for (let header of details.requestHeaders) {
      if (header.name.toLowerCase() === 'authorization') {
        console.log('Authorization header:', header.value);
        // You can also store this information or send it to your extension's UI
        chrome.storage.local.set({ authHeader: header.value });
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ['https://discord.com/api*'] },
  ['requestHeaders']
);
