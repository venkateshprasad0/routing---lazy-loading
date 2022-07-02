import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { friendsRoutingModule } from './friends/friendsRoutingModule';
import { friendRoutingModule } from './friend/friendRoutingModule';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    friendsRoutingModule,
    friendRoutingModule
  ]
})
export class FriendsModuleModule { }
