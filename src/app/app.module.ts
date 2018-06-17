import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SassViewModule } from './sass-view/sass-view.module';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapViewModule } from './bootstrap-view/bootstrap-view.module';
import { MaterialViewModule } from './material-view/material-view.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    SassViewModule,
    BootstrapViewModule,
    MaterialViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
