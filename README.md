# Horror Cloud SDK ( by fear.io )

![npm](https://img.shields.io/npm/dw/@fear-io/horrorcloud-sdk)

### Introduction

Javascript package that help integrate FEAR NFT products into other websites

### Current Supported Products

- World Of Whack It

### Installation

You can install the SDK in 2 ways:

- via package manager by running `yarn add @fear-io/horrorcloud-sdk` then `import HorrorCloudSDK from "@fear-io/horrorcloud-sdk";`
- via JS CDN by adding [bundle.js](https://cdn.jsdelivr.net/gh/fear-io/horrorcloud-sdk/dist/bundle.js) to your web page


### Referral Code

You need to get the **Referral Code** by going to https://whackit.co, login with your Google account then goto `Account > Affiliate` tab, press the copy button on the right of "Referral Code"

This document will assume your referral code is `TEST123`, please replace it with your.

### Integration using the SDK

Initialize the SDK by using: 

```javascript
const sdk = new HorrorCloudSDK('TEST123');
```

Plug the purchase/play game widget to your specified html element:

```javascript
sdk.play('world-of-whack-it', {
    style: {
        width: "100%",
        height: '900px',
    },
    containerId: 'horrorcloud-container-test',
});
```

`style` and `containerId` are optional.

If `containerId` is not supplied, new div with id `horrorcloud-container` will be appended to document.body of web page;

### Integration **without** using the SDK

In case it is hard to add an external JS script to your website, you can integrate World Of Whack It to your website without installing the SDK, by adding an iframe to `https://whackit.co/widget?partner=TEST123`

```html
<iframe allowfullscreen src="https://www.whackit.co/widget?partner=TEST123" style="width: 100%; height: 900px; border: none"></iframe>
```

### Example

[index.html](https://github.com/fear-io/horrorcloud-sdk/blob/main/index.html)

