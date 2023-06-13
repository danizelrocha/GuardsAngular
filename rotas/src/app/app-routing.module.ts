import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components Pages
import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/account/account.component';

// Guards
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CandeactiveGuard } from './shared/guards/candeactive.guard';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
