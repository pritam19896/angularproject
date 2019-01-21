
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import {AccordionModule} from 'primeng/accordion';
import {MegaMenuModule} from 'primeng/megamenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { SidebarComponent } from './sidebar/sidebar.component';



import {PanelMenuModule} from 'primeng/panelmenu';
import { ApplicationformComponent } from './applicationform/applicationform.component';
import { FormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    SidebarComponent,
    ApplicationformComponent,
    LoginformComponent,
    ],
  imports: [
    BrowserModule,
    AccordionModule,
    MegaMenuModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
