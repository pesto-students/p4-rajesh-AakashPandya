const user = {
  firstName: "Aakash",
  lastName: "Pandya",
  email: "aakashkpandya@gmail.com",
};

function greeting(text, text2) {
  console.log(`${text}, ${text2} ${this.firstName} ${this.lastName}`);
}

// Call
greeting.call(user, "Hi", "Good morning"); // Hi, Good morning Aakash Pandya

// Bind

let helloAakash = greeting.bind(user);

helloAakash("Hello", "Good afternoon"); // Hello, Good afternoon Aakash Pandya

//Apply

greeting.apply(user, ["Hello", "Good evening"]); // Hello, Good evening Aakash Pandya
