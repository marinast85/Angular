import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InformacaoRoutes } from "./informacao/informacao-routing.module";
import { InstalacaoRoutes } from "./instalacao/instalacao-routing.module";
import { PrincipalRoutes } from "./principal/principal-routing.module";
import { SobreRoutes } from "./sobre/sobre-routing.module";

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/principal",
        pathMatch: "full"
    },

    //puxando as rotas de links href que estão 
    ...PrincipalRoutes,
    ...SobreRoutes,
    ...InstalacaoRoutes,
    ...InformacaoRoutes
]

@NgModule({
    imports: [

      RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
  })

export class AppRoutingModule{}

