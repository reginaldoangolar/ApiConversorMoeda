
const puppteer = require('puppeteer');
const express = require("express");
const router = express.Router();


router.post("/conversor", async (req, res) => {
   

    const {firstMoeda,secondMoeda} = req.body;

  
    try
    {
        const browser = await puppteer.launch({headless:'new'});
        const page = await browser.newPage();
        //const url = `https://www.google.com/search?q=${firstMoeda}+para+${secondMoeda}&sca_esv=550892363&rlz=1C1YTUH_pt-PTAO1019AO1019&sxsrf=AB5stBhojNGdeAseUsKsvgbE6y6sKpthfw%3A1690306168555&ei=eAbAZKCtIaSzwt0PlsGDkA8&oq=${firstMoeda}+para+${secondMoeda}&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIhBLd2FuemEgcGFyYSByZWFsMgoQABiABBhGGIICMgUQABiABDIFEAAYgAQyCBAAGIAEGMsBMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I3RxQkwlYshlwAXgBkAEAmAHbA6ABkhaqAQcyLTUuMy4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICChAAGIoFGLADGEPCAgwQIxiKBRgnGEYYggLCAggQABgWGB4YCuIDBBgAIEGIBgGQBgw&sclient=mobile-gws-wiz-serp`;
        const url = `https://www.google.com/search?q=${firstMoeda}+para+${secondMoeda}&sca_esv=550892363&rlz=1C1YTUH_pt-PTAO1019AO1019&sxsrf=AB5stBhojNGdeAseUsKsvgbE6y6sKpthfw%3A1690306168555&ei=eAbAZKCtIaSzwt0PlsGDkA8&oq=${firstMoeda}+para+${secondMoeda}&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIhBLd2FuemEgcGFyYSByZWFsMgoQABiABBhGGIICMgUQABiABDIFEAAYgAQyCBAAGIAEGMsBMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I3RxQkwlYshlwAXgBkAEAmAHbA6ABkhaqAQcyLTUuMy4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICChAAGIoFGLADGEPCAgwQIxiKBRgnGEYYggLCAggQABgWGB4YCuIDBBgAIEGIBgGQBgw&sclient=mobile-gws-wiz-serp`;
        
        await page.goto(url)
        const result = await page.evaluate(()=>
        {
            return document.querySelector('.lWzCpb.a61j6').value;
        })
       // await console.log(result)
     var dados = await {firstMoeda:`1 ${firstMoeda}`, secondMoeda:`1 ${secondMoeda}`, "equalsTo":`${result} ${secondMoeda}`}
    return res.json(dados)
      

    }
    catch(error)
    {
        console.log(error)
    } 
    
     
  
   
 
   // console.log(start())
    //browser.close()
    //return res.json(start())


    
});


module.exports = router;