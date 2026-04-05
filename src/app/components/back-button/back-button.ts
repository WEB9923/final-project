import { Component, inject } from '@angular/core';
import { LucideChevronLeft } from '@lucide/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  imports: [LucideChevronLeft],
  template: `
    <button
      (click)="handleBack()"
      class="px-3 py-1.5 rounded-radius font-medium absolute border-2 border-border top-5 left-5 flex items-center justify-center gap-1 cursor-pointer hover:bg-secondary transition-colors duration-200"
    >
      <svg
        lucideChevronLeft
        [size]="20"
      ></svg>
      Back
    </button>
  `,
})
export class BackButton {
  private location = inject(Location);

  handleBack(): void {
    this.location.back();
  }
}
