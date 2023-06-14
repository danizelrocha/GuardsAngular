
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

//Components Pages
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';

// Guards
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CandeactiveGuard } from './shared/guards/candeactive.guard';
import { CanLoadGuard } from './shared/guards/can-load.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActiveGuard],
    canDeactivate: [CandeactiveGuard],
  },
  {
    path:'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canLoad: [CanLoadGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
