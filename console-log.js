const sdk = window.ExtensionScriptsSDK['1.0'];
const data = await sdk.page.getDetails();

console.log(`Hi to ${data.website.id} from console-log.js`);
