import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { ProductsState } from './application/states/products/products.state';
import { ProductsService } from './infraestructure/services/products.service';
import { ProductRepository } from './domain/repositories/Product.repository';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      useClass : ProductsService,
      provide: ProductRepository
    },
    provideHttpClient(),
    provideStore([ProductsState]),
  ],
};
