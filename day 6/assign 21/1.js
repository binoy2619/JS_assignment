console.log(`create a class user with properties as name , age and email.
he can login and logout .
create another class moderator which has all the features of User , plus additional functionality to add coins and remove coins.
create one more class admin which has all the features of moderator plus additional features like add a course and delete a particular course for a user.`);

class User {
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.course = [];
    }
    login(){
        console.log(`${this.name} is logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} is logged out`);
        return this;
    }
    get_details(){
        console.log(`your name is ${this.name} \n age =  ${this.age} \n email = ${this.email} \n coins = ${this.coins} \n course = ${this.course}`);
        return this;
    }
}

class Moderator extends User{
    add_coins(){
        this.coins++;
        return this;
    }
    remove_coins(){
        this.coins--;
        return this;
    }
}

class Admin extends Moderator{
    add_course(user,course){
        user.course.push(course);
        console.log(user)
        return user;
    }
    remove_course(user, course){
        user.course.remove(course);
        console.log(user);
        return user;
    }

}

let user_1 = new User("boom",213,"boom@gmail.com");
let user_2 = new User("ichigo",223,"ichogo@gmail.com");
let mod = new Moderator("daki",23,"daki@gmail.com");
let admin = new Admin("rio",32,"rio@gmail.com");

admin.login().add_coins().add_coins().add_course(admin,"python").logout().get_details();



