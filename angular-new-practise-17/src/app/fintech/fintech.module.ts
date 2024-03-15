import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RootFintechComponent} from "./container/root-fintech/root-fintech.component";
import {FintechRoutingModule} from "./fintech-routing.module";
import {RootPlatformComponent} from "../platform/components/root-platform/root-platform.component";
import {PlatformModule} from '../platform/platform.module'



@NgModule({
  declarations: [
    RootFintechComponent
  ],
  exports: [
    RootFintechComponent
  ],
  imports: [
    CommonModule,
    FintechRoutingModule,
    RootPlatformComponent
  ]
})
export class FintechModule { }
