const puppeteer = require('puppeteer');
const colors = require('colors');

async function getPic(url,path,name) {
  console.log(colors.magenta("Working..."));
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({width: 1000, height: 500})
  await page.screenshot({path: path + name + '.png'});
  await browser.close();
  console.log(colors.green("All done!\n"));
};

var argv = require('minimist')(process.argv.slice(2)); 
if(argv.u == undefined || argv.p == undefined || argv.n == undefined) {
  console.log('');
  if(Object.keys(argv).length > 1) {
    console.log(colors.red('Incorrect Usage!'));
  }
  console.log(colors.bold('Usage: screenshot -u <url> -p <folder path> -n <filename without extension>\n'));
}
else {
  if(argv.p.split('')[argv.p.split('').length - 1] != '/') {
    argv.p = argv.p + '/';
  }
  
  console.log('');
  console.log('Creating screenshot of ' + colors.yellow(argv.u) + ' called ' + colors.yellow(argv.n + '.png') + ' in folder ' + colors.yellow(argv.p));
  console.log('');
  
  getPic(argv.u,argv.p,argv.n);
}
