const SeleniumInfra = require("./SeleniumInfra");

class ImdbPage {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    constructor(selenium) {
        this.selenium = new SeleniumInfra()
    }
//this Function Navigate to Imdb Page
    async navigateToImdbPage() {
        await this.selenium.getURL("https://www.imdb.com/") // Navigate to Imdb Page
        await this.selenium.sleepFunction(2000)
        await this.selenium.clickButton("id" , "imdbHeader-navDrawerOpen--desktop") // # click on Menu
        await this.selenium.sleepFunction(2000)
        //await this.selenium.clickButton("xpath" , "//div[@class='_1IQgIe3JwGh2arzItRgYN3']//span[text()='Most Popular Movies']")
        await this.selenium.clickButton("xpath" , "/html/body/div[2]/nav/div[2]/aside/div/div[2]/div/div[1]/span/div/div/ul/a[4]") //click on Most popular link link


        let top_movies = []

        let i = 1;

        const moviesDIVs = await this.selenium.findElementListBy("className", "titleColumn");
        console.log(moviesDIVs)

        for (let movie of moviesDIVs) {

            const name = await this.selenium.getTextFromElement("css" , "#main > div > span > div > div > div.lister > table > tbody > tr:nth-child("+i+") > td.titleColumn > a");
            console.log(name)

            if(i == 7){
                break
            }
            else{
                i++
            }
            const movieObj = {
                name

            }

            top_movies.push(movieObj)

        }
        console.table(top_movies) // Print All 6 top movies

    }

}

module.exports = ImdbPage


let ImdbPageTest = new ImdbPage();

ImdbPageTest.navigateToImdbPage()




