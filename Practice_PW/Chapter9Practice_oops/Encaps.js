class bankAccount{
#balance=0;

deposit(amount){
    if (amount>0)
        this.#balance+=amount;

}
getbalance()
{
    return this.#balance
}

}

const acc=new bankAccount()
acc.deposit(1000)
console.log(acc.getbalance())
console.log(acc.balance) //By declaring #balance = 0; with the # prefix, you explicitly tell JavaScript that this property is private and strictly hidden from the outside world. It can only be read or modified inside the bankAccount class methods (like your deposit and getbalance).


/*Same ex but with proper explaination

class BankAccount {
    // 1. Hide the data from the outside world (Private field)
    #balance = 0; 

    // 2. Provide controlled ways to modify the data
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Invalid deposit amount!");
        }
    }

    // 3. Provide a controlled way to read the data
    getBalance() {
        return this.#balance;
    }
}

// --- Using the Class ---
const myAccount = new BankAccount();

myAccount.deposit(500);      // Output: Deposited: $500
console.log(myAccount.getBalance()); // Output: 500

// ❌ Trying to break encapsulation:
myAccount.#balance = 1000000; // 🛑 SyntaxError! JavaScript won't allow this.
console.log(myAccount.balance); // 🛑 undefined (The public property 'balance' doesn't exist)

Why is Encapsulation Useful?
Security & Protection: Nobody can accidentally (or maliciously) overwrite your data from the outside (e.g., setting your #balance to a negative number or a string).

Validation (Data Integrity): Because modifications must go through methods like deposit(), you can add rules (like if (amount > 0)) to make sure the data stays clean.

Flexibility: If you decide to change how the balance is stored tomorrow (e.g., tracking it in cents instead of dollars), you only have to update the code inside the class. The rest of your program using .getBalance() won't break.



// */