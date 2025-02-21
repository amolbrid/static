const sdk = window.ExtensionScriptsSDK['1.0'];

sdk.page.getDetails().then(p => console.log(`Hi to ${p.website.id} from console-log.js`));
