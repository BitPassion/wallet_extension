/*global chrome*/
// If your extension doesn't need a background script, just leave this file empty

messageInBackground();

// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig
export function messageInBackground() {
  console.log('I can run your javascript like any other code in your project');
  console.log('just do not forget, I cannot render anything !');
}


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  console.log(message);
  switch(message.action){
    case "popupOpen":{
      console.log('popup is open');
      chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
      });
    }
    break;
  }
});

chrome.runtime.onInstalled.addListener((reason) => {
  console.log(reason)
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: 'onboarding.html'
    });
  }
});