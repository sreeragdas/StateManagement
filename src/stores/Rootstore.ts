import { AuthStore } from "./AuthStore";

export class Rootstore{
    public AuthStore:AuthStore
    
public constructor(){
    this.AuthStore=new AuthStore();
}
}