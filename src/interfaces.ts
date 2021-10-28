export interface UserSignupInterface extends LoginInterface{
    firstName:string,
    lastName:string,
    email:string,
    hobbies:string,
    interests:string,
    zipCode:string,
    image:string, 
}

export interface LoginInterface{
    username:string,
    password:string, 
}