import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-preview-dialog',
  templateUrl: './image-preview-dialog.component.html',
  styleUrls: ['./image-preview-dialog.component.scss']
})
export class ImagePreviewDialogComponent implements OnInit {
  image = '';
  imageType = 'png';
  viewOnly = false;
  title = '';

  constructor(
    protected dialogRef: MatDialogRef<ImagePreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) protected data
  ) {
    this.image = this.data.image;
    this.viewOnly = this.data.viewOnly;
    this.title = this.data.title;
  }

  ngOnInit() {}

  removeImage() {
    this.image = null;
    this.imageType = null;
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file && !file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const image = e.target.result;
    const base64result = image.split(',')[1];
    const imageTypeWithData = image.split(';')[0];
    const imageType = imageTypeWithData.split(':')[1];
    this.image = base64result;
    this.imageType = imageType;
  }

  saveImage() {
    // check for min and max width/ height, keep aspect ratio
    this.checkResizing(
      `data: ${this.imageType};base64,${this.image}`,
      500,
      500
    );

    this.dialogRef.close({ image: this.image, imageType: this.imageType });
  }

  checkResizing(image, maxW, maxH) {
    const img = new Image();
    img.src = image;

    if (img.width > maxW || img.height > maxH) {
      const newImg = this.compressImage(
        image,
        this.calculateAspectRatioFit(img.width, img.height, maxW, maxH)
      );
      const base64result = newImg.split(',')[1];
      const imageTypeWithData = newImg.split(';')[0];
      const imageType = imageTypeWithData.split(':')[1];
      this.image = base64result;
      this.imageType = imageType;
    }
  }

  compressImage(src, size: { width: any; height: any }) {
    const img = new Image();
    img.src = src;
    const elem = document.createElement('canvas');
    elem.width = size.width;
    elem.height = size.height;
    const ctx = elem.getContext('2d');
    ctx.drawImage(img, 0, 0, size.width, size.height);
    return ctx.canvas.toDataURL();
  }

  calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: srcWidth * ratio, height: srcHeight * ratio };
  }

  onCancel() {
    this.dialogRef.close();
  }
}
