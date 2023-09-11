import {IsPlayer} from '../interfaces/IsPlayer.js'

export class Player implements IsPlayer {
    constructor(readonly name: string,public age: number,public country: string,abc: string){}

    play(){
       console.log(`${this.name} is playing`) 
    }
}