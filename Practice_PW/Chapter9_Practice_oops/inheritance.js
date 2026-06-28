// 1. The Parent Class (BasePage)
class BasePage {
    constructor() {
        this.browserName = "Chrome";
    }

    open(url) {
        console.log(`Opening browser (${this.browserName}) and navigating to: ${url}`);
    }

    close() {
        console.log("Closing the browser window.");
    }
}

// 2. The Child Class (LoginPage) inheriting using 'extends'
class LoginPage extends BasePage {
    
    // Unique method just for the login page
    login(username, password) {
        // We can access 'open' from the parent implicitly!
        this.open("https://example.com/login"); 
        console.log(`Typing username: ${username} and password: *******`);
        console.log("Clicking the submit button.");
    }
}

// --- Using the Classes ---
const loginPage = new LoginPage();

// Calling the unique child method
loginPage.login("admin", "secret123");

// Calling a method inherited directly from the parent
loginPage.close();


/*Key Takeaways
The extends Keyword: This tells JavaScript that a class should inherit from another class (class Child extends Parent).

Code Reusability: You don't have to duplicate the open() and close() code across dozens of files. If the logic for closing a browser changes later, you only fix it once in BasePage.

The super Keyword (Optional but common): If the child class needs its own constructor, it must call super() first to initialize the parent's constructor before adding its own properties.*/