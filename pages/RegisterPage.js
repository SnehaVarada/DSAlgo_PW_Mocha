export class RegisterPage{

    constructor(page)
    {
        this.page = page;
        this.dashboard_register = "//a[normalize-space()='Register']";
        this.username = "//input[@id='id_username']";
        this.password1 = "//input[@id='id_password1']";
        this.password2 = "//input[@id='id_password2']";
        this.registerButton = "//input[@value='Register']";
        this.signoutBtn = "//a[normalize-space()='Sign out']";
        
    }

    async registerBtn(){
        await this.page.locator(this.dashboard_register).click();
     }

    async registerInfo(){
        await this.page.locator(this.username).fill("srs2003@yopmail.com");
        await this.page.locator(this.password1).fill("numpyninja1");
        await this.page.locator(this.password2).fill("numpyninja1");
        await this.page.locator(this.registerButton).click();
    }

    async logout(){
        await this.page.locator(this.signoutBtn).click();
    }

}

//module.exports= {RegisterPage};