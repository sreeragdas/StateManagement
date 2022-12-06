import { makeAutoObservable } from "mobx";

export class AuthStore{
    public name : string | null;

    public constructor(){
        this.name=null
        makeAutoObservable(this)
    }

    public setName(name:string):void{
        this.name=name;
    }

    public async printFunctionDetails(): Promise<void> {

        console.log('hi from store')

    }
}