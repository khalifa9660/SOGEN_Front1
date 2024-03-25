import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LayoutModule } from "@angular/cdk/layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { PlayersComponent } from "./foot-view/players/players.component";
import { CountriesComponent } from "./foot-view/countries/countries.component";
import { RegisterComponent } from "./register/register.component";
import { ConfirmedSignUpComponent } from "./confirmed-sign-up/confirmed-sign-up.component";
import { HistoryTeamMembersComponent } from "./foot-view/history-team-members/history-team-members.component";
import { DreamTeamComponent } from "./foot-view/dream-team/dream-team.component";
import { AddPlayerComponent } from "./foot-view/add-player/add-player.component";
import { LeaguesComponent } from "./foot-view/leagues/leagues.component";
import { DataGridModule } from "./data-grid/data-grid.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationInterceptor } from "./services/interceptor";


@NgModule({
  declarations: [AppComponent, LoginComponent, HeaderComponent, SidenavComponent, PlayersComponent, CountriesComponent, RegisterComponent, ConfirmedSignUpComponent, HistoryTeamMembersComponent, DreamTeamComponent, AddPlayerComponent, LeaguesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    DataGridModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true //Able to have many request
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
