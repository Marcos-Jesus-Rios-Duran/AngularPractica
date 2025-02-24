import { RenderMode, ServerRoute } from '@angular/ssr';
import { Page1Component } from './components/pages/page1/page1.component';
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];