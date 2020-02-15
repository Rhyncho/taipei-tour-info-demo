import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

// Component
import { LoadingComponent } from './loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  /**
   * Loading View 的實體參考
   *
   */
  dialogRef: MatDialogRef<LoadingComponent> = null;

  constructor(private dialog: MatDialog) {}

  /**
   * 顯示 Loading View
   *
   */
  show(): void {

    // 避免重複呼叫
    if (this.dialogRef) {
      return;
    }

    this.dialogRef = this.dialog.open(LoadingComponent, {
      width: '250px',
      autoFocus: true,
      disableClose: true,
      panelClass: 'loading-dialog'
    });

  }

  /**
   * 關閉 Loading View
   *
   */
  hide(): void {

    // 避免 null exception
    if (!this.dialogRef) {
      return;
    }

    this.dialogRef.close();
    this.dialogRef = null;

  }

}
