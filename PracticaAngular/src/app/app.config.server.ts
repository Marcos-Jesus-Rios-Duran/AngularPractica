// app.config.server.ts
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';  // Asegúrate de que app.config.ts esté correctamente importado
import { serverRoutes } from './app.routes.server';  // Importa las rutas del servidor

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes)  // Usamos serverRoutes aquí
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
