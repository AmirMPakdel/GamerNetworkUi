import Realm from 'realm';


export default class User{

    constructor(id,token,username,password,email){

        this.id = id;
        this.token = token;
        this.username = username;
        this.password = password;
        this.email = email;

    }


    schema={

        id:"int",
        token:"sstring",
        username:"string",
        password:"string",
        email:"string",
    }

    createUser(User){

        Realm.open()
    }

}