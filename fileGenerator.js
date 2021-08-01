const puppeteer = require('puppeteer');
const fs = require('fs');
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a url: ', res => {
    scrapeKata(res);
    rl.close();
})

async function scrapeKata(url){
    let kyuLevel, kataName, kataDescription, kataFolder;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    
    const [kyu] = await page.$x('//*[@id="shell_content"]/div[3]/div/div[1]/div[1]/div/div/span');
    const kyuText = await kyu.getProperty('textContent');
    kyuLevel = await kyuText.jsonValue();

    const [kata] = await page.$x('//*[@id="shell_content"]/div[3]/div/div[1]/div[1]/h4');
    const kataText = await kata.getProperty('textContent');
    kataName = await kataText.jsonValue();
    kataName = kataName.replace(/[^a-zA-Z- ]/g, '');
    
    const [problem] = await page.$x('//*[@id="description"]');
    const problemText = await problem.getProperty('textContent');
    kataDescription = await problemText.jsonValue();
    let kataArray = kataDescription.split('\n');

    kataArray.pop();

    let infoBlock = ``;
    infoBlock += `/**\n`;
    infoBlock += `* Kata Name : ${kataName}\n`;
    infoBlock += `* Kyu Level : ${kyuLevel}\n`;
    for(let i = 0; i < kataArray.length; i++){
        if(i == 0){
            infoBlock += `* Kata Description : ${kataArray[i]}\n`
        } else {
            infoBlock += `*                    ${kataArray[i]}\n`
        }
    }
    infoBlock += `*/\n`;

    switch(kyuLevel){
        case '8 kyu':
            kataFolder = '/8 Kyu';
            break;
        case '7 kyu':
            kataFolder = '/7 Kyu';
            break;
        case '6 kyu':
            kataFolder = '/6 Kyu';
            break;
        case '5 kyu':
            kataFolder = '/5 Kyu';
            break;
        case '4 kyu':
            kataFolder = '/4 Kyu';
            break;
        case '3 kyu':
            kataFolder = '/3 Kyu';
            break;
        case '2 kyu':
            kataFolder = '/2 Kyu';
            break;
        case '1 kyu':
            kataFolder = '/1 Kyu';
            break;
    }
    
    fs.appendFile(`./${kataFolder}/${kataName}.js`, infoBlock, err => {
        if(err) throw err;
        console.log(`Created file "${kataFolder}/${kataName}.js"`);
    })

    browser.close();
}
