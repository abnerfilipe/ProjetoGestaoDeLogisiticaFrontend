import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'ri-dashboard-line',
        // badge: {
        //     variant: 'success',
        //     text: 'MENUITEMS.DASHBOARDS.BADGE',
        // },
        link: '/'
    },
    {
        id: 3,
        label: 'MENUITEMS.OBRAS.TEXT',
        icon: 'ri-community-line',
        // badge: {
        //     variant: 'success',
        //     text: 'MENUITEMS.DASHBOARDS.BADGE',
        // },
        link: '/obras',
        // subItems: [
        //   {
        //       id: 4,
        //       label: 'MENUITEMS.OBRAS.LIST.ALMOXARIFADOS',
        //       link: '/obras/almoxarifados',
        //       parentId: 3
        //   }
        // ]
    },
    {
        id: 5,
        label: 'MENUITEMS.EQUIPAMENTOS.TEXT',
        icon: 'ri-truck-line',
        // badge: {
        //     variant: 'success',
        //     text: 'MENUITEMS.DASHBOARDS.BADGE',
        // },
        link: '/equipamentos',
        // subItems: [
        //   {
        //       id: 6,
        //       label: 'MENUITEMS.EQUIPAMENTOS.LIST.MODELOS',
        //       link: '/equipamentos/modelos',
        //       parentId: 5
        //   },
        //   {
        //       id: 7,
        //       label: 'MENUITEMS.EQUIPAMENTOS.LIST.CATEGORIA',
        //       link: '/equipamentos/categorias',
        //       parentId: 5
        //   },
        //   {
        //       id: 8,
        //       label: 'MENUITEMS.EQUIPAMENTOS.LIST.FABRICANTE',
        //       link: '/equipamentos/fabricantes',
        //       parentId: 5
        //   },
        //   {
        //       id: 9,
        //       label: 'MENUITEMS.EQUIPAMENTOS.LIST.MEDICAO',
        //       link: '/equipamentos/medicoes',
        //       parentId: 5
        //   },
        // ]
    },
    {
        id: 10,
        label: 'MENUITEMS.USUARIOS.TEXT',
        icon: 'ri-group-line',
        // badge: {
        //     variant: 'success',
        //     text: 'MENUITEMS.DASHBOARDS.BADGE',
        // },
        link: '/usuarios'
    },
    {
        id: 11,
        label: 'MENUITEMS.FUNCIONARIOS.TEXT',
        icon: 'ri-team-line',
        // badge: {
        //     variant: 'success',
        //     text: 'MENUITEMS.DASHBOARDS.BADGE',
        // },
        link: '/funcionarios',
        // subItems: [
        //     {
        //         id: 12,
        //         label: 'MENUITEMS.FUNCIONARIOS.LIST.ENDERECOS',
        //         link: '/funcionarios/enderecos',
        //         parentId: 11
        //     }
        // ]
    },

];
