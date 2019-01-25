import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MenubarComponent } from "./menubar/menubar.component";
import { AccordionModule } from "primeng/accordion";
import { MegaMenuModule } from "primeng/megamenu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";

import { PanelMenuModule } from "primeng/panelmenu";
import { LoginformComponent } from "./loginform/loginform.component";
import { NewuserformComponent } from "./newuserform/newuserform.component";
import { ServerService } from './server.service';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    SidebarComponent,
    LoginformComponent,
    NewuserformComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    MegaMenuModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelMenuModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatToolbarModule,
    MatExpansionModule,
    RouterModule.forRoot([
      {
        path: "login-cmp",
        component: LoginformComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: "newuserform-cmp",
        component: NewuserformComponent
      }
    ])
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
