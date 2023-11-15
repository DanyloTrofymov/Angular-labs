import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sum]'
})
export class SumDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set sumFrom(firstNumber: number) {
    this.firstNumber = firstNumber;
    this.updateView();
  }

  @Input() set sumAnd(secondNumber: number) {
    this.secondNumber = secondNumber;
    this.updateView();
  }

  private firstNumber = 0;
  private secondNumber = 0;

  private updateView() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef, {
      $implicit: this.firstNumber + this.secondNumber
    });
  }
}
