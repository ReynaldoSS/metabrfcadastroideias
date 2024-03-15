import { ILocalizedName } from "./ILocalizedName";
import { ITerm } from "./ITerm";

export interface ITermSet{
	id?:string;
	description?:string;
	grupo?:string;
	ordem?:number;
    localizedNames?:Array<ILocalizedName>;
	terms?:Array<ITerm>;
	columnName?:string;
}