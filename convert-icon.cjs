const fs = require('fs');
const pngToIcoModule = require('png-to-ico');

// Handle potential ESM/CJS interop issues
const pngToIco = typeof pngToIcoModule === 'function' ? pngToIcoModule : pngToIcoModule.default;

if (typeof pngToIco !== 'function') {
    console.error('png-to-ico is not a function. Export:', pngToIcoModule);
    process.exit(1);
}

pngToIco('assets/img/icon.png')
    .then(buf => {
        fs.writeFileSync('assets/img/icon.ico', buf);
        console.log('Icon converted successfully to assets/img/icon.ico');
    })
    .catch(console.error);
