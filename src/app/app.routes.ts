import { Routes } from '@angular/router';
import { AdminLayout } from './components/admin-layout/admin-layout';
import { PublicLayout } from './components/public-layout/public-layout';

const SITE = 'Liga de Fútbol Mujeres Diversas MX';

export const routes: Routes = [
  // ------------------------------------------------------------------
  // Sitio público
  // ------------------------------------------------------------------
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        title: `Inicio · ${SITE}`,
        loadComponent: () => import('./pages/public/inicio/inicio').then((m) => m.Inicio),
      },
      {
        path: 'nosotras',
        title: `Nosotras · ${SITE}`,
        loadComponent: () => import('./pages/public/nosotras/nosotras').then((m) => m.Nosotras),
      },
      // ---- Registro: 1) crear cuenta  2) cómo te unes (código / crear equipo / agente libre)
      {
        path: 'unete',
        title: `Crea tu cuenta · ${SITE}`,
        loadComponent: () => import('./pages/public/unete/unete').then((m) => m.Unete),
      },
      {
        path: 'unete/equipo',
        title: `¿Cómo te unes? · ${SITE}`,
        loadComponent: () =>
          import('./pages/public/unete-equipo/unete-equipo').then((m) => m.UneteEquipo),
      },
      {
        path: 'unete/crear-equipo',
        title: `Crea tu equipo · ${SITE}`,
        loadComponent: () =>
          import('./pages/public/registro-equipo/registro-equipo').then((m) => m.RegistroEquipo),
      },
      {
        path: 'unete/listo',
        title: `¡Equipo creado! · ${SITE}`,
        loadComponent: () =>
          import('./pages/public/registro-listo/registro-listo').then((m) => m.RegistroListo),
      },

      // ---- Cuenta: login único; lo que se ve depende del rol (la sesión real llegará con la API)
      {
        path: 'entrar',
        title: `Entra a tu cuenta · ${SITE}`,
        loadComponent: () => import('./pages/cuenta/entrar/entrar').then((m) => m.Entrar),
      },
      {
        path: 'mi-cuenta',
        loadComponent: () =>
          import('./pages/cuenta/mi-cuenta/mi-cuenta').then((m) => m.MiCuenta),
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'resumen' },
          {
            path: 'resumen',
            title: `Mi cuenta · ${SITE}`,
            loadComponent: () => import('./pages/cuenta/resumen/resumen').then((m) => m.Resumen),
          },
          {
            path: 'privacidad',
            title: `Mi privacidad · ${SITE}`,
            loadComponent: () =>
              import('./pages/cuenta/privacidad/privacidad').then((m) => m.Privacidad),
          },
          {
            path: 'estadisticas',
            title: `Mis estadísticas · ${SITE}`,
            loadComponent: () =>
              import('./pages/cuenta/estadisticas/estadisticas').then((m) => m.MisEstadisticas),
          },
          {
            path: 'datos',
            title: `Mis datos · ${SITE}`,
            loadComponent: () =>
              import('./pages/cuenta/mis-datos/mis-datos').then((m) => m.MisDatos),
          },
          {
            path: 'equipo',
            title: `Mi equipo · ${SITE}`,
            loadComponent: () =>
              import('./pages/cuenta/mi-equipo/mi-equipo').then((m) => m.MiEquipo),
          },
        ],
      },
      // Rutas anteriores
      { path: 'mi-equipo/entrar', redirectTo: 'entrar' },
      { path: 'mi-equipo', redirectTo: 'mi-cuenta/equipo' },
      {
        path: 'jornadas',
        title: `Jornadas · ${SITE}`,
        loadComponent: () => import('./pages/public/jornadas/jornadas').then((m) => m.Jornadas),
      },
      {
        path: 'equipos',
        title: `Equipos · ${SITE}`,
        loadComponent: () => import('./pages/public/equipos/equipos').then((m) => m.Equipos),
      },
      {
        path: 'equipos/:id',
        title: `Equipo · ${SITE}`,
        loadComponent: () =>
          import('./pages/public/equipo-detalle/equipo-detalle').then((m) => m.EquipoDetalle),
      },
      {
        path: 'jugadoras/:id',
        title: `Jugadora · ${SITE}`,
        loadComponent: () =>
          import('./pages/public/perfil-jugadora/perfil-jugadora').then((m) => m.PerfilJugadora),
      },
      {
        path: 'galeria',
        title: `Galería · ${SITE}`,
        loadComponent: () => import('./pages/public/galeria/galeria').then((m) => m.Galeria),
      },
      {
        path: 'entrenamiento',
        title: `Entrenamiento personal · ${SITE}`,
        loadComponent: () =>
          import('./pages/public/entrenamiento/entrenamiento').then((m) => m.Entrenamiento),
      },
      {
        path: 'patrocinadores',
        title: `Patrocinadores · ${SITE}`,
        loadComponent: () =>
          import('./pages/public/patrocinadores/patrocinadores').then((m) => m.Patrocinadores),
      },
      {
        path: 'contacto',
        title: `Contacto · ${SITE}`,
        loadComponent: () => import('./pages/public/contacto/contacto').then((m) => m.Contacto),
      },
      {
        path: 'aviso-de-privacidad',
        title: `Aviso de privacidad · ${SITE}`,
        loadComponent: () =>
          import('./pages/public/aviso-privacidad/aviso-privacidad').then(
            (m) => m.AvisoPrivacidad,
          ),
      },
    ],
  },

  // ------------------------------------------------------------------
  // Panel de administración (solo rol staff; la protección se agregará con la API)
  // ------------------------------------------------------------------
  // El staff entra por el login único; su rol le da acceso al panel.
  { path: 'admin/login', redirectTo: 'entrar' },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        title: 'Dashboard · Panel',
        loadComponent: () => import('./pages/admin/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'equipos',
        title: 'Equipos y jugadoras · Panel',
        loadComponent: () =>
          import('./pages/admin/equipos-jugadoras/equipos-jugadoras').then(
            (m) => m.EquiposJugadoras,
          ),
      },
      {
        path: 'jornadas',
        title: 'Jornadas y partidos · Panel',
        loadComponent: () =>
          import('./pages/admin/jornadas-partidos/jornadas-partidos').then(
            (m) => m.JornadasPartidos,
          ),
      },
      {
        path: 'captura',
        title: 'Captura de partido · Panel',
        loadComponent: () =>
          import('./pages/admin/captura-partido/captura-partido').then((m) => m.CapturaPartido),
      },
      {
        path: 'estadisticas',
        title: 'Estadísticas · Panel',
        loadComponent: () =>
          import('./pages/admin/estadisticas/estadisticas').then((m) => m.Estadisticas),
      },
      {
        path: 'mvp',
        title: 'MVP y reconocimientos · Panel',
        loadComponent: () => import('./pages/admin/mvp/mvp').then((m) => m.Mvp),
      },
      {
        path: 'contenido',
        title: 'Contenido · Panel',
        loadComponent: () => import('./pages/admin/contenido/contenido').then((m) => m.Contenido),
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
