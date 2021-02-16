import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';

import { OneComponent } from './application/one/one.component';
import { TwoComponent } from './application/two/two.component';
import { ThreeComponent } from './application/three/three.component';
import { AdHostDirective } from './ad-host.directive';

enum Target {
  ONE = 'one',
  TWO = 'two',
  THREE = 'three',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(AdHostDirective, { static: true }) adHost: AdHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  toggle(target: string): void {
    let componentFactory: any;

    switch (target) {
      case Target.ONE:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          OneComponent
        );
        break;
      case Target.TWO:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          TwoComponent
        );
        break;
      case Target.THREE:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          ThreeComponent
        );
        break;
      default:
        break;
    }

    const viewContainerRef = this.adHost.viewContainerRef;

    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }

  greet(): void {
    alert('Hi');
  }
}
