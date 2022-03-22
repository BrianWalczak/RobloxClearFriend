## Clear your Roblox friends


## What's this?
With this code, you can remove all of your Roblox friends at once, at the touch of some buttons

## Installation/Usage [3 Ways]

Step 1:
Install the "Roblox Friend Removal Button" chrome extension
https://chrome.google.com/webstore/detail/roblox-friend-removal-but/jgllchbkhjeiaombmpkapalbmpolmelp

Step 2:
Go to your friend's page. You should now see a red icon something like this: (-)

Step 3:
Open Developer Tools
You can do this by clicking Ctrl + Shift + I, or clicking the 3 dots on the top right, more tools > developer tools

Step 4:
Switch to the console by clicking "Console" in the tab

Step 5:

Paste and run this code. You can also find it in console.js:

```javascript
setInterval(function () {
try {
  document.getElementsByClassName("icon-alert")[0].click()
} catch(err) {
	  document.getElementsByClassName("icon-right")[0].click()
	setTimeout(function() {
		document.getElementsByClassName("icon-alert")[0].click()
	}, 1000);
}
}, 10);
```
