import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatFormFieldModule, MatInputModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatFormFieldModule, MatInputModule
  ]
})
export class MaterialModule { }
