class LoginPage{
    constructor(page){

        this.page = page;

        this.usernameInput = page.getByLabel('Username');
        this.passwordInput = page.getByRole('textbox', {name:'Password'});
        this.loginButton = page.getByRole('button', {name:'Login'});
        

    }

    async login(username, password){
            
            await this.usernameInput.fill(username);
            await this.passwordInput.fill(password);
            await this.loginButton.click();
            
        }

    async logout(){
       await this.page.getByRole('link', {name:'Logout'}).click();//logout is created as <a> in html when we inspect
    }
}

module.exports = LoginPage;