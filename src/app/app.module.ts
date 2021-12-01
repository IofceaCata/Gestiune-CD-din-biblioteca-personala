import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdsComponent } from './cds/cds.component';
import { CdService } from 'src/app/service/cds.service';
import { GenerateService } from 'src/app/service/generate.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ToolbarModule,
    DropdownModule,
    ButtonModule,
    FileUploadModule,
    ConfirmDialogModule,
    DialogModule,
    FormsModule
  ],
  providers: [CdService,GenerateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
