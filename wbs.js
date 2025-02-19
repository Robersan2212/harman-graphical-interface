import puppeteer from "puppeteer";

const pageURL = "https://bulkexpress.linde.com/Home/login.aspx"
const user = "miguel.carrizo@harman.com"
const pswd = "Harman.2024"

async function OpenPage() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 20,
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
    await openpage.click('a[id=ctl00_ContentPlaceHolder1_DeliveryHistoryGrid_ctl03_LinkBtnPraxairNo]')
    await new Promise(resolve => setTimeout(resolve, 5000))

    //solicitud al sistema para recoleción de datos 

    const resultado1 = await openpage.evaluate(() => {
        const data1 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(2) > td:nth-child(2)")
        return data1.innerText
    })

    const resultado2 = await openpage.evaluate(() => {
        const data2 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(3) > td:nth-child(2)")
        return data2.innerText
    })

    const resultado3 = await openpage.evaluate(() => {
        const data3 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(4) > td:nth-child(2)")
        return data3.innerText
    })

    const resultado4 = await openpage.evaluate(() => {
        const data4 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(5) > td:nth-child(2)")
        return data4.innerText
    })

    const resultado5 = await openpage.evaluate(() => {
        const data5 = document.querySelector("#ctl00_ContentPlaceHolder1_ReadingHistoryGrid > tbody > tr:nth-child(6) > td:nth-child(2)")
        return data5.innerText
    })

    const resultado6 = await openpage.evaluate(() => {
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
    console.log(fecha1)
    console.log(resultado1)
    console.log(fecha2)
    console.log(resultado2)
    console.log(fecha3)
    console.log(resultado3)
    console.log(fecha4)
    console.log(resultado4)
    console.log(fecha5)
    console.log(resultado5)
    console.log(fecha6)
    console.log(resultado6)

    await browser.close()
}
// que show
OpenPage()