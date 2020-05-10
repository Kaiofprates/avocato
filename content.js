// hash
const md5 = document.createElement('script')
md5.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js'
// document.getElementsByTagName('head')[0].appendChild(md5)

// metadados

function getMedata() {
  const user = document.cookie.split(';').filter((s) => s.indexOf('c_user') > -1)
  const userId = user[0].trim()
  const page = document.location.href
  const date = Date.now()
  const selection = document.getSelection().toString()
  // imagens
  const imgs = document.getElementsByTagName('img')
  const imgsSources = []
  for (var i = 0; i < imgs.length - 1; i++) {
    imgsSources.push(imgs[i].src)
  }
  // var hash = CryptoJS.MD5("lula livre");
  // console.log(hash.toString());

  const metaData = {
    userId,
    page,
    date,
    selection,
    imgsSources
  }
  return metaData
}

chrome.runtime.onMessage.addListener(receiver)

// Handle the message
function receiver(request, sender, sendResponse) {
  // Now if the message matches "browser action"
  if (request.message === 'request') {
    chrome.runtime.sendMessage({ 'message': getMedata() })
  }
}
