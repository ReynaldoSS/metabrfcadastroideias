import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'BibliotecaConceitoWebPartStrings';
import BibliotecaConceito from './components/BibliotecaConceito';
import { IBibliotecaConceitoProps } from './components/IBibliotecaConceitoProps';
import { IGuideTermSet } from '../../interfaces/IGuideTermSet';

const opcoesMetadadosSelecionaveis = Array<IGuideTermSet>();
opcoesMetadadosSelecionaveis.push({ nome: 'Negócio', nomeInterno: 'ConceitoNegocio', selecionavel: true, ordem: 1, descricao: 'Negócio que o produto pertence.', grupo: 'Classificação Produto' });
opcoesMetadadosSelecionaveis.push({ nome: 'Categoria', nomeInterno: 'ConceitoCategoria', selecionavel: true, ordem: 2, descricao: 'Categoria que o produto pertence.', grupo: 'Classificação Produto' });
opcoesMetadadosSelecionaveis.push({ nome: 'Família', nomeInterno: 'ConceitoFamilia', selecionavel: true, ordem: 3, descricao: 'Família que o produto pertence.', grupo: 'Classificação Produto' });
opcoesMetadadosSelecionaveis.push({ nome: 'Marca', nomeInterno: 'ConceitoMarca', selecionavel: true, ordem: 4, descricao: 'Marca do produto.', grupo: 'Classificação Marca' });
opcoesMetadadosSelecionaveis.push({ nome: 'Submarca', nomeInterno: 'ConceitoSubMarca', selecionavel: true, ordem: 5, descricao: 'Submarca do produto.', grupo: 'Classificação Marca' });
opcoesMetadadosSelecionaveis.push({ nome: 'Mercado', nomeInterno: 'ConceitoMercado', selecionavel: true, ordem: 6, descricao: 'Mercado alvo.', grupo: 'Classificação Produto' });
opcoesMetadadosSelecionaveis.push({ nome: 'Inovação', nomeInterno: 'ConceitoInovacao', selecionavel: true, ordem: 7, descricao: 'Inovação em Produto, na Embalagem ou em ambos.', grupo: 'Inovação de produto e/ou embalagem' });
opcoesMetadadosSelecionaveis.push({ nome: 'Status do Produto', nomeInterno: 'ConceitoStatusProduto', selecionavel: true, ordem: 8, descricao: 'Se é um produto atual no portfolio, novo ou histórico.', grupo: 'Status Produto' });
opcoesMetadadosSelecionaveis.push({ nome: 'Ano', nomeInterno: 'ConceitoAno', selecionavel: true, ordem: 9, descricao: 'Ano do teste.', grupo: 'Origem da Ideia' });
opcoesMetadadosSelecionaveis.push({ nome: 'Origem da Inovação', nomeInterno: 'ConceitoOrigemInovacao', selecionavel: true, ordem: 10, descricao: 'Origem da ideia cadastrada.', grupo: 'Origem da Ideia' });
opcoesMetadadosSelecionaveis.push({ nome: 'Resultado do Teste', nomeInterno: 'ConceitoResultadoTeste', selecionavel: true, ordem: 11, descricao: 'Resultado do Teste.', grupo: 'Origem da Ideia' });
opcoesMetadadosSelecionaveis.push({ nome: 'Status Aprovação', nomeInterno: 'ConceitoStatusAprovacao', selecionavel: false, ordem: 12, descricao: 'Status do fluxo de aprovação.', grupo: 'Aprovação' });
// opcoesMetadadosSelecionaveis.push({ nome: 'Tipo de Teste', nomeInterno: 'ConceitoTipoTeste', selecionavel: true, ordem: 11, descricao: 'Tipo de pesquisa realizada', grupo: 'Origem da Ideia' });
// opcoesMetadadosSelecionaveis.push({ nome: 'Olheiros', nomeInterno: 'ConceitoOlheiros', selecionavel: true, ordem: 7, descricao: 'Ideia do Olheiros BRF', grupo: 'Status Produto' });

export interface IBibliotecaConceitoWebPartProps {
  description: string;
}

export default class BibliotecaConceitoWebPart extends BaseClientSideWebPart<IBibliotecaConceitoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IBibliotecaConceitoProps> = React.createElement(
      BibliotecaConceito,
      {
        description: this.properties.description,
        context: this.context,
        siteUrl: this.context.pageContext.web.absoluteUrl,
        libraryTitle: 'Biblioteca de Conceitos',
        libraryInternalTitle: 'BibliotecaConceitos',
        ideiaContentTypeName:'Ideia',
        opcoesMetadados: opcoesMetadadosSelecionaveis
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
