// import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';

// import * as strings from 'ExtensionApplicationCustomizerStrings';

// const LOG_SOURCE: string = 'ExtensionApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IExtensionApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ExtensionApplicationCustomizer
  extends BaseApplicationCustomizer<IExtensionApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    const absoluteUrl = this.context.pageContext.site.absoluteUrl;
    // const headers = { headers: { 'Accept': 'application/json; odata=verbose;' } };

    // Tras o CSS personalizado para o SharePoint
    let css: HTMLLinkElement = document.createElement("link");
    css.rel = 'stylesheet';
    css.href = absoluteUrl + '/SiteAssets/css/spstyle.css';
    document.head.append(css);
// let gamb: HTMLInputElement = document.createElement("input");
    // gamb.type = "hidden";
    // gamb.id = "gamb";
    // gamb.value = window

    // $(document).ready(() => {
    // });
    // $("#spSiteHeader").on("change", () => {
    // });

    // let target = document.getElementsByClassName('ms-HorizontalNavItems')[0];
    // let observer = new MutationObserver(mutation => {
    //   console.log("AAAAAAAAAAA");
    // });

    // observer.observe(target, { childList: true });

    // axios.get(`${absoluteUrl}/_api/web/currentUser`, headers).then(currentUser => {
    //   axios.get(`${absoluteUrl}/_api/Web/SiteGroups/GetByName('Avaliadores')/users`, headers).then(r => {

    //     // Esconde a central de aprovações no menu para não aprovadores
    //     var users: number[] = [];
    //     r.data.d.results.forEach(element => { users.push(element.Id); });
    //     if (users.indexOf(currentUser.data.d.Id) > -1) {
    //       var navLinks = document.getElementsByClassName("ms-HorizontalNavItem-link");
    //       for (let i = 0; i < navLinks.length; i++) {
    //         if (navLinks[i].innerHTML == "Central de Aprovações") {
    //           navLinks[i].parentElement.setAttribute("style", "display:none;");
    //           break;
    //         }
    //       }
    //     }

        // Esconde a barra de busca quando usuario estiver na home
        // var atualUrl = window.location.href;
        // if (absoluteUrl == atualUrl || `${absoluteUrl}/` == atualUrl) {
        //   setTimeout(() => {
        //     var searchBar = document.getElementById("O365_SearchBoxContainer_container");
        //     searchBar?.setAttribute("style", `display:none;`);
        //   }, 1000);
        // }
    //   });
    // });


    // //Trocar o target dos link
    // absoluteUrl.split("/").map(resp => {
    //   if (resp == "Forms") {
    //     setTimeout(() => {
    //       this.changeTarget();
    //     }, 1600);
    //   }
    // });

    // alert("a");
    return Promise.resolve();
  }

  // private changeTarget(): void {
  //   var links: any = document.getElementsByClassName("ms-Link");
  //   for (let i = 0; i < links.length; i++) {
  //     links[i].target = "_self";
  //   }
  // }
}
