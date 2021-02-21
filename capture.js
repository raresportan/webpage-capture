const { performance } = require('perf_hooks');
const captureWebsite = require('capture-website');

(async () => {
    const start = performance.now();
    const site = 'https://livejs.netlify.com';
    const pic = site.split('://')[1] + '.jpg';
    await captureWebsite.file(site, pic, {
        type: "jpeg",
        overwrite: true,
        quality: 0.8,
        fullPage: true,
        timeout: 10,
        scaleFactor: 1,
    });

    console.log('Done in', ((performance.now() - start) / 1000).toPrecision(2) + 's');
})();