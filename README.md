[![first-timers-friendly](http://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat)](#contributing)
# screenshot-cli
Screenshot websites via a command-line-interface
## Install
```bash
git clone https://github.com/Booligoosh/screenshot-cli.git
cd screenshot-cli
npm install
```
Once this is done, add this to your bash preferences file (in this example I am using `~/.bashrc`) and source it:
```bash
echo "alias screenshot='<path-to-screenshot-folder>/pic-simple.js'" >> ~/.bashrc
source ~/.bashrc
```
## Usage
```bash
screenshot -u <url> -p <folder-path> -n <filename-without-extension>
```

You can also supply a custom resolution for the screenshot by providing the -w
and -h flags
```bash
screenshot -u <url> -p <folder-path> -n <filename-without-extension> -h <height> -w <width>
```


## Contributing
[![first-timers-friendly](http://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat)](http://www.firsttimersonly.com/)

Contributions are welcome. Please see the [issues](https://github.com/Booligoosh/screenshot-cli/issues), or add anything that your brain can conjure up!
## Credits
This project was based on [A Guide to Automating & Scraping the Web with JavaScript (Chrome + Puppeteer + Node JS)](https://codeburst.io/a-guide-to-automating-scraping-the-web-with-javascript-chrome-puppeteer-node-js-b18efb9e9921), a really awesome article that you should check out.
