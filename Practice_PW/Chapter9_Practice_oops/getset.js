class BankAccount {
    #balance = 0; // Private field

    // Getter: Executed when you run `acc.balance`
    get balance() {
        return `Your balance is: $${this.#balance}`;
    }

    // Setter: Executed when you run `acc.balance = value`
    set balance(amount) {
        if (amount >= 0) {
            this.#balance = amount;
        } else {
            console.log("Error: Balance cannot be negative!");
        }
    }
}

const acc = new BankAccount();

// 1. Using the Setter
acc.balance = 1000; // Calls the `set balance(1000)` method under the hood
acc.balance = -50;  // Output: Error: Balance cannot be negative! (Data validation)

// 2. Using the Getter
console.log(acc.balance); // Output: Your balance is: $1000