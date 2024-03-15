import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IGuideTermSet } from "../../../interfaces/IGuideTermSet";

export interface IBibliotecaConceitoProps {
  description: string;
  context: WebPartContext;
  siteUrl: string;
  libraryTitle: string;
	libraryInternalTitle: string;
  ideiaContentTypeName:string;
  opcoesMetadados: Array<IGuideTermSet>;
}
