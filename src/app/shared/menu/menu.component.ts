import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  
  items: MenuItem[] = []
  private excludedRoutes = ['/login', '/register'];

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.items = this._addItems();
  }

  shouldShowMenu(): boolean {
    return !this.excludedRoutes.some(route => this._router.url.includes(route));
  }

  private _addItems():MenuItem[]{
    return [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Configuracion',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Perfil de Negocio',
            icon: 'pi pi-briefcase',
          },
          {
            label: 'Empleados',
            icon: 'pi pi-users',
            items: [
              {
                label: 'Añadir',
                routerLink: 'add-employee'
              },
              {
                label: 'Ver',
                routerLink: 'view-employees'
              }
            ],
          },
          {
            label: 'Horarios',
            icon: 'pi pi-hourglass',
            items: [
              {
                label: 'Configurar horarios',
                routerLink: 'add-employee'
              },
              {
                label: 'Tipos de horarios',
                routerLink: 'view-employees'
              }
            ],
          }
        ]
      },
      {
        label: 'Asignar horarios',
        icon: 'pi pi-history',
        routerLink: 'home'
      },
      {
        label: 'Informacion',
        icon: 'pi pi-chart-line',        
      }
  ];
    }
  }
