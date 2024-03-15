import { ITermSet } from "./ITermSet";

export interface ITermSetGroup {
  name?: string;
  id?: string;
  termSets?: Array<ITermSet>;
}