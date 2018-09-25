import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule],
  // imports: [
  //   CommonModule
  // ],
  declarations: []
})
export class MaterialModule { }
