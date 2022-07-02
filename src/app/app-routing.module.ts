import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './downloads/downloads.component';
import { FriendComponent } from './friends-module/friend/friend.component';
import { FriendsComponent } from './friends-module/friends/friends.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'downloads', component: DownloadsComponent},
  {path: 'friends', loadChildren: () => import('./friends-module/friends-module.module').then(m => m.FriendsModuleModule)},
  {path: 'friends/:id', loadChildren: () => import('./friends-module/friends-module.module').then(m => m.FriendsModuleModule)},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
