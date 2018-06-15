import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, 
  MatIconModule, MatAutocomplete, MatAutocompleteModule, MatFormFieldModule,
  MatInputModule  } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatMenuModule, MatButtonModule, 
    MatCheckboxModule, MatIconModule, MatAutocompleteModule,
    ReactiveFormsModule, MatFormFieldModule, MatInputModule 
  ],
  exports: [CommonModule, MatMenuModule, MatButtonModule, 
    MatCheckboxModule, MatIconModule, MatAutocompleteModule,
    ReactiveFormsModule, MatFormFieldModule, MatInputModule 
  ],
  declarations: []
})
export class MyMaterialModuleModule { }
