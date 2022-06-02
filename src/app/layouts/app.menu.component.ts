import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from '../pages/app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Favorites', icon: 'pi pi-home',
                items: [
                    {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]
            },
            {separator: true},
            {
                label: 'Menu Group 1', icon: 'pi pi-fw pi-star-fill', routerLink: ['/uikit'],
                items: [
                    {label: 'Link 1', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                    {label: 'Link 2', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                ]
            },
            {separator: true},
            {
                label: 'Menu Group 2', icon: 'pi pi-fw pi-star-fill', routerLink: ['/uikit'],
                items: [
                    {label: 'Link 1', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                    {label: 'Link 2', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                ]
            },
            {separator: true},
            {
                label: 'Menu Group 3', icon: 'pi pi-fw pi-star-fill', routerLink: ['/uikit'],
                items: [
                    {label: 'Link 1', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                    {label: 'Link 2', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                ]
            },
        ];
    }
}
