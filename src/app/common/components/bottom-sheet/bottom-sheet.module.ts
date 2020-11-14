import { BottomSheetComponent } from './bottom-sheet.component';
import { BottomSheetService } from './bottom-sheet.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BottomSheetComponent],
  imports: [
    CommonModule
  ], providers: [BottomSheetService],
  exports:[BottomSheetComponent],
  entryComponents:[BottomSheetComponent]
})
export class BottomSheetModule { }
