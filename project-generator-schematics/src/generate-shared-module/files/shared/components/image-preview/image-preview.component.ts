import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImagePreviewDialogComponent } from '../image-preview-dialog/image-preview-dialog.component';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
  @Input() image = '';
  @Output() imageChange = new EventEmitter<string>();
  @Input() imageType = '';
  @Output() imageTypeChange = new EventEmitter<string>();

  @Input() customTitle = '';
  @Input() disabled = false;
  @Input() mode: 'view' | 'edit' = 'view';
  @Input() bigger = false;
  @Input() smaller = false;
  @Input() direct = false;
  //#endregion

  constructor(protected dialog: MatDialog) {}

  ngOnInit() {}

  viewImage() {
    this.dialog.open(ImagePreviewDialogComponent, {
      data: {
        image: this.image ? `${this.image}` : '',
        imageType: this.imageType ? `${this.imageType}` : '',
        viewOnly: true,
        title: this.customTitle
          ? this.customTitle
          : 'View image'
      }
    });
  }

  imageClick(event: Event) {
    if (this.disabled) {
      return;
    }

    if (this.mode === 'edit') {
      this.editImage();
    }

    if (this.mode === 'view') {
      this.viewImage();
    }

    event.stopPropagation();
  }

  async editImage() {
    if (this.disabled) {
      return;
    }
    const result = await this.dialog
      .open(ImagePreviewDialogComponent, {
        data: {
          image: this.image ? `${this.image}` : '',
          imageType: this.imageType ? `${this.imageType}` : '',
          title: this.customTitle
            ? this.customTitle
            : 'Edit image'
        }
      })
      .afterClosed()
      .toPromise();
    if (result) {
      this.image = result.image;
      this.imageType = result.imageType;

      this.imageChange.emit(this.image);
      this.imageTypeChange.emit(this.imageType);
    }
  }
}

