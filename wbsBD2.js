import puppeteer from "puppeteer";

const pageURL = "https://bulkexpress.linde.com/Home/login.aspx";
const user = "miguel.carrizo@harman.com"
const pswd = "Harman.2024"

const kg = 160
const M3 = 0.8414

async function OpenPage() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 40,
    })
    const openpage = await browser.newPage()

    //seteo de la pagina 
    await openpage.setViewport({ width: 1280, height: 800 })
    await openpage.goto(pageURL)

    //login con la cuenta
    await openpage.type('input[name="txtUserName"]', user)
    await openpage.type('input[name="txtPassword"]', pswd)

    //clickeo general 
    await openpage.click('a[id=btnlogin]')
    await openpage.click('span[id=ctl00_TopNavigationPanelInventoryManager1_lblInventory]')
    await openpage.click('span[id=ctl00_ContentPlaceHolder1_BtnHistory]')
    
    await openpage.evaluate (() => {
        const button = Array.from(document.querySelectorAll('a'));
        const targetbutton = button.find(button => button.innerText.includes('6013391'));
        if (targetbutton) {
            targetbutton.click();
        }else {
            console.log("Button not found");
        }
    }) 
   

    await new Promise(resolve => setTimeout(resolve, 5000))

    //solicitud al sistema para recoleción de in3 

    const r1 = await openpage.evaluate(() => {
        const data1 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(2) > td:nth-child(2)")
        return data1.innerText
    })

    const r2 = await openpage.evaluate(() => {
        const data2 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(3) > td:nth-child(2)")
        return data2.innerText
    })

    const r3 = await openpage.evaluate(() => {
        const data3 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(4) > td:nth-child(2)")
        return data3.innerText
    })

    const r4 = await openpage.evaluate(() => {
        const data4 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(5) > td:nth-child(2)")
        return data4.innerText
    })

    const r5 = await openpage.evaluate(() => {
        const data5 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(6) > td:nth-child(2)")
        return data5.innerText
    })

    const r6 = await openpage.evaluate(() => {
        const data6 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(7) > td:nth-child(2)")
        return data6.innerText
    })

    //Solicitud al sistema para recoleción de fechas

    const fecha1 = await openpage.evaluate(() => {
        const data1 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(2) > td:nth-child(1)")
        return data1.innerText
    })

    const fecha2 = await openpage.evaluate(() => {
        const data2 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(3) > td:nth-child(1)")
        return data2.innerText
    })

    const fecha3 = await openpage.evaluate(() => {
        const data3 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(4) > td:nth-child(1)")
        return data3.innerText
    })

    const fecha4 = await openpage.evaluate(() => {
        const data4 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(5) > td:nth-child(1)")
        return data4.innerText
    })

    const fecha5 = await openpage.evaluate(() => {
        const data5 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(6) > td:nth-child(1)")
        return data5.innerText
    })

    const fecha6 = await openpage.evaluate(() => {
        const data6 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(7) > td:nth-child(1)")
        return data6.innerText
    })
    await new Promise(resolve => setTimeout(resolve, 2000))

    //impresión de resultado de in3 y fechas

    console.log("PLANTA 1")


    //orden descendente 

    const C1 = r1 //*kg*M3
    const C2 = r2 //*kg*M3
    const C3 = r3 //*kg*M3
    const C4 = r4 //*kg*M3
    const C5 = r5 //*kg*M3
    const C6 = r6 //*kg*M3

    //Promedio de consumo

    const C65 = (C6-C5)
    const C54 = (C5-C4)
    const C43 = (C4-C3)
    const C32 = (C3-C2)
    const C21 = (C2-C1)

    const Promedio = (C65+C54+C43+C32+C21)/5


    console.log(fecha1, r1, "in H2O")
    console.log(fecha2, r2, "in H2O")
    console.log(fecha3, r3, "in H2O")
    console.log(fecha4, r4, "in H2O")
    console.log(fecha5, r5, "in H2O")
    console.log(fecha6, r6, "in H2O")

    console.log("promedio de consumo de 5h: ",Promedio)

    await browser.close()

}
OpenPage()
