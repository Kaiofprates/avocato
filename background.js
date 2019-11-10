

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    chrome.tabs.sendMessage(tab.id, {"message": "request"});

}

chrome.runtime.onMessage.addListener(receiver);
function receiver(request, sender, sendResponse) {
  alert(`
  userId: ${request.message.userId} 
  page: ${request.message.page}
  date: ${request.message.date}
  text: ${request.message.selection}
----------------------------------------
images links: 
       ${request.message.imgsSources}
  `);

  console.log(`
  userId: ${request.message.userId} 
  page: ${request.message.page}
  date: ${request.message.date}
  text: ${request.message.selection}
----------------------------------------
images links: 
       ${request.message.imgsSources}
  `)
}