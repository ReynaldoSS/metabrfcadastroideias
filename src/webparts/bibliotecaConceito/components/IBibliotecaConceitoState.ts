import { ITermOld } from "../../../interfaces/ITermOld";
import { ITermSetGroupOld } from "../../../interfaces/ITermSetGroupOld";

export interface IBibliotecaConceitoState {
  callout: ISurfacesControl;
  panelHide: boolean;
  termSetGroup: ITermSetGroupOld;
  contentType: string;
  bibliotecaConceito: any[];
  bibliotecaConceitoAllItems: any[];
  metadados: IMetadados[];
  order: boolean;
  bibliotecaCarregada:boolean;
}

interface ISurfacesControl {
  hide: boolean;
  id: string;
  filter: ITermOld[];
}

export interface IMetadados{
  column: string;
  order: number;
  value: ITermOld[];
  show: boolean;
  collapse: boolean;
}