export interface IsPlayer{
    readonly name: string;
    age: number;
    country: string;

    play(): void;
}