import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { AppMainComponent } from './pages/app.main.component';
import { AppRightmenuComponent } from './layouts/app.rightmenu.component';
import { AppMenuComponent } from './layouts/app.menu.component';
import { AppMenuitemComponent } from './shared/directives/app.menuitem.component';
import { AppTopBarComponent } from './layouts/app.topbar.component';
import { AppSearchComponent } from './shared/components/app.search.component';
import { AppFooterComponent } from './layouts/app.footer.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppLoginComponent } from './pages/app.login.component';
import { HomeComponent } from './pages/home.component';

import { BreadcrumbService } from './shared/services/app.breadcrumb.service';
import { MenuService } from './app.menu.service';
import { ConfigService } from './core/services/app.config.service';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';


FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
    declarations: [
        AppComponent,
        AppMainComponent,
        AppRightmenuComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppSearchComponent,
        AppFooterComponent,
        AppLoginComponent,
        AppNotfoundComponent,
        HomeComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MenubarModule,
        BreadcrumbModule,
        DropdownModule,
        RadioButtonModule,
        InputTextModule,
        ButtonModule,
        CardModule,
        PaginatorModule

    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MenuService, BreadcrumbService, ConfigService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
