import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule {
}
