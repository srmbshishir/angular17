import {Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RootPlatformComponent} from "./platform/components/root-platform/root-platform.component";
import {VehicleListComponent} from "./vehicles/vehicle-list/vehicle-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RootPlatformComponent,VehicleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'angular-new-practise-17';
  count = 17;
}
