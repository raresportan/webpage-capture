const { performance } = require('perf_hooks');
const captureWebsite = require('capture-website');

const usage = `
The URL was not provided or is incorrect

Example:
node capture https://livejs.netlify.app
`;


const url = process.argv[2];
if (!url) {
    console.log(usage);
} else {
    (async () => {
        const start = performance.now();
        let site = url;
        if (!url.startsWith('http')) {
            site = 'https://' + site;
        }
        if(url.endsWith('/')) {
            site = site.substring(0, site.length - 1);
        }
        const pic = site.split('://')[1] + '.jpg';
        try {
            await captureWebsite.file(site, pic, {
                type: "jpeg",
                overwrite: true,
                quality: 0.8,
                fullPage: true,
                timeout: 10,
                scaleFactor: 1,
            });

            console.log('Done in', ((performance.now() - start) / 1000).toPrecision(2) + 's');
        }
        catch (err) {
            console.log(usage);
            process.exit();
        }
    })();
}

