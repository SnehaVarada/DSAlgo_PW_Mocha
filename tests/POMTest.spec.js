import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage.js";
import { RegisterPage } from "../pages/RegisterPage.js";
import { SigninPage } from "../pages/SigninPage.js";

test('Test', async({page})=>{ 
     
  /  //HomePage
     const home = new HomePage(page);
     await home.gotoUrl();
     await home.getStart(); 
     await expect(page).toHaveTitle("NumpyNinja");

     //RegisterPage
     const register = new RegisterPage(page);
     await register.registerBtn();
     await register.registerInfo();
     await register.logout();
     const a=await page.locator("//div[@role='alert']");
     await expect(a).toContainText('New Account Created');

     //SigninPage
     const signin = new SigninPage(page);
     await signin.signinBtn();
     await signin.signin();
    
 })

   

