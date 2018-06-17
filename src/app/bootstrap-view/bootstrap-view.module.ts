import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapViewComponent } from './bootstrap-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [BootstrapViewComponent]
})
export class BootstrapViewModule {
}
