import { NgModule } from '@angular/core';
import { MaterialModule } from './angular-material/material.module';
import { SanitizeImagePipe } from './pipes/sanitize-image-pipe';
import { FilterPipe } from './pipes/filter-name-pipe';
import { CommonModule } from '@angular/common';
import { AreYouSureComponent } from './components/are-you-sure/are-you-sure.component';
import { ImagePreviewDialogComponent } from './components/image-preview-dialog/image-preview-dialog.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatInputCounterComponent } from './components/mat-input-counter/mat-input-counter.component';
import { ReviewStarsComponent } from './components/review-stars/review-stars.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoadingComponent,
    ImagePreviewComponent,
    ImagePreviewDialogComponent,
    SanitizeImagePipe,
    MatInputCounterComponent,
    ReviewStarsComponent,
    AreYouSureComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoadingComponent,
    ImagePreviewComponent,
    ImagePreviewDialogComponent,
    SanitizeImagePipe,
    MatInputCounterComponent,
    ReviewStarsComponent,
    AreYouSureComponent,
    FilterPipe,
    MaterialModule
  ]
})
export class SharedModule { }
