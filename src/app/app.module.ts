import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { FriendsComponent } from './friends-module/friends/friends.component';
import { FriendComponent } from './friends-module/friend/friend.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendsComponent,
    DownloadsComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
