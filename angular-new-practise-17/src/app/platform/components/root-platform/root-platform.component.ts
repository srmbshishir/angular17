import {Component, computed, effect, signal, untracked, ViewEncapsulation} from '@angular/core';
import {FintechModule} from "../../../fintech/fintech.module";
import {VehicleListComponent} from "../../../vehicles/vehicle-list/vehicle-list.component";

@Component({
  selector: 'app-root-platform',
  standalone: true,
  imports: [VehicleListComponent],
  templateUrl: './root-platform.component.html',
  styleUrl: './root-platform.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RootPlatformComponent{


  // platformService = inject(PlatformService);

  x = signal(5)
  y = signal(7)
  z = signal(this.x() + this.y())
  b = this.x() + this.y()
  a = computed(()=>(this.x() + this.y()))


  list = signal([
    "Hello",
    "World"
  ]);

  object = signal({
    id: 1,
    title: "Angular For Beginners"
  });

  constructor() {
    this.x.set(9)
    this.x.set(15)
    this.x.set(22)
    console.log(this.z())
    console.log(this.a())
    console.log(this.b)
    this.untrack()

    this.list().push("Again");

    this.object().title = "overwriting title";
  }


  effectDem = effect(()=>{
    console.log("latest value", this.x())
  })

  derivedCounter = computed(() => {
    // console.log(this.count)
    return untracked(this.x) * 10;
  })

  untrack() {
    console.log(this.derivedCounter())
  }
  // vehicles = this.platformService.vehicles;


}
