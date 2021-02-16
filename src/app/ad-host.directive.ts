import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAddHost]',
})
export class AdHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
