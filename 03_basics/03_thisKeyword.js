const user = {
    userName: "Hitesh",
    price: 299,
    welcomeMessage: function() {
        console.log(`Welcome to website, ${this.userName}!`);
    }
}

user.welcomeMessage();
user.userName = "Aman";
user.welcomeMessage();

console.log(this);