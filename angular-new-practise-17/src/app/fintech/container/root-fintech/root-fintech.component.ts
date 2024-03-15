import {Component, Input} from '@angular/core';
import {changeValue} from "../../../platform/services/platform.service";
import {RootPlatformComponent} from "../../../platform/components/root-platform/root-platform.component";

@Component({
  selector: 'app-root-fintech',
  templateUrl: './root-fintech.component.html',
  styleUrl: './root-fintech.component.css'
})
export class RootFintechComponent {
  @Input({required: true, transform: changeValue, alias: 'dummy'})
  count: number = 0;
}
