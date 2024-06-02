exports.HomePage = 
class HomePage{

    constructor(page)
    {
        this.page = page;
       this.getStartBtn = "//button[normalize-space()='Get Started']" ;
    } 

    async gotoUrl(){
        await this.page.goto("https://dsportalapp.herokuapp.com/");
    }

    async getStart(){
     await this.page.click("//button[normalize-space()='Get Started']");
    }
}
  
