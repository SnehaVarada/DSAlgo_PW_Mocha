exports.SigninPage =
class SigninPage{

    constructor(page)
    {
        this.page = page;
        this.signoutBtn = "//a[normalize-space()='Sign out']";
        this.signInBtn = "a[href='/login']";
        this.signInusername = "//input[@id='id_username']";
        this.signInpassword = "//input[@id='id_password']";
        this.loginBtn = "//input[@value='Login']";
    }

    async logout(){
        await this.page.locator(this.signoutBtn).click();
    }

    async signinBtn(){
        await this.page.locator(this.signInBtn).click();
    }

    async signin(){
        await this.page.locator(this.signInusername).fill("srs2003@yopmail.com");
        await this.page.locator(this.signInusername).fill("numpyninja1");
        await this.page.locator(this.loginBtn).click();
    }
}

//module.exports= {SigninPage};