import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionContainerComponent } from './components/description-container/description-container.component';
import { HeaderComponent } from './components/header/header.component';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { ListDisplayComponent } from './components/list-container/list-display/list-display.component';
import { ListFormComponent } from './components/list-container/list-form/list-form.component';
import { ListItemComponent } from './components/shared/list-item/list-item.component';
import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionContainerComponent,
    HeaderComponent,
    ListContainerComponent,
    ListFormComponent,
    ListDisplayComponent,
    ListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
