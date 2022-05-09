chrome.storage.sync.set({1: "value"});
chrome.storage.sync.get(['1'])
.then(function(response)
{
    console.log(response.data);
})

// this is a test