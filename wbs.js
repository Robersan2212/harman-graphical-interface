import puppeteer from "puppeteer";

const pageURL = "https://bulkexpress.linde.com/Home/login.aspx"
const user = "miguel.carrizo@harman.com"
const pswd = "Harman.2024"

async function OpenPage() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200
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

    await browser.close()
}
// que show
OpenPage()