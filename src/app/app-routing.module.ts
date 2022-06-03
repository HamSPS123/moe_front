import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './pages/app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import { HomeComponent } from './pages/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'module', component: AppMainComponent,
                children: [
                    { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
                    { path: 'demand', loadChildren: () => import('./modules/demand/demand.module').then(m => m.DemandModule) },
                    { path: 'hrd', loadChildren: () => import('./modules/hrd/hrd.module').then(m => m.HrdModule) },
                    { path: 'supply', loadChildren: () => import('./modules/supply/supply.module').then(m => m.SupplyModule) },
                ]
            },
            {path: '', component: HomeComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            // {path: 'login', component: AppLoginComponent},
            { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
