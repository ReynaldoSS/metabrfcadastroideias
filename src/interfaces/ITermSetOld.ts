import { ITermOld } from "./ITermOld";

export interface ITermSetOld{
	nome?:string;
	id?:string;
	descricao?:string;
	grupo?:string;
	ordem?:number;
	terms?:Array<ITermOld>;
}