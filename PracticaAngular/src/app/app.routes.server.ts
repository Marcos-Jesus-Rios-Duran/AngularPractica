import { RenderMode, ServerRoute } from '@angular/ssr';
import { Page1Component } from './components/page-container/pages/page1/page1.component';
import { Page2Component } from './components/page-container/pages/page2/page2.component';
import { Page3Component } from './components/page-container/pages/page3/page3.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'page1',
    component: Page1Component,
    renderMode: RenderMode.Prerender
  },
  {
    path: 'page2',
    component: Page2Component,
    renderMode: RenderMode.Prerender
  },
  {
    path: 'page3',
    component: Page3Component,
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    redirectTo: '/page1', // Redirección con ruta válida
    renderMode: RenderMode.Prerender
  }
];
