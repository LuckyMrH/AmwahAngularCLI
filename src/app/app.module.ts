import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AmwahMenuComponent } from './amwah-menu/amwah-menu.component';
import { AmwahPageNotFoundComponent } from './components/amwah-page-not-found/amwah-page-not-found.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SecureUserComponent } from './components/secure-user/secure-user.component';
import { StateComponent } from './components/state/state.component';
import { UsCountiesComponent } from './components/us-counties/us-counties.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { UsStatesComponent } from './components/us-states/us-states.component';

@NgModule({
  declarations: [
    AppComponent,
    AmwahMenuComponent,
    AmwahPageNotFoundComponent,
    AuthComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SecureUserComponent,
    StateComponent,
    UsCountiesComponent,
    UserAuthComponent,
    UsStatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
