import { NgModule } from '@angular/core';
import { AppToolbarComponent } from './app-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AppToolbarComponent],
  imports: [
    MatToolbarModule,
  ],
  exports: [AppToolbarComponent]
})
export class CommonModule { }
