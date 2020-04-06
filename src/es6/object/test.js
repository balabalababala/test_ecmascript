let person = {
    getGreeting(){
        console.log(this === person)
        return "Hello";
    }
}

let friend = {
    getGreeting(){
        console.log(this === friend);
        return Object.getPrototypeOf(this).getGreeting.call(this)+', hi!';
    }
}

Object.setPrototypeOf(friend,person);

let relative = Object.create(friend);

console.log(relative.getGreeting());