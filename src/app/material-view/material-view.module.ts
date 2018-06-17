import { NgModule } from '@angular/core';
import { MaterialViewComponent } from './material-view.component';
import { MatCardModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MatCardModule
  ],
  declarations: [MaterialViewComponent],
})
export class MaterialViewModule {
}
