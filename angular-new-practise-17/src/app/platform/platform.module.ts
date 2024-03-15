import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FintechModule} from "../fintech/fintech.module";
import {RootFintechComponent} from "../fintech/container/root-fintech/root-fintech.component";
import {PlatformRoutingModule} from "./platform-routing.module";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule
  ]
})
export class PlatformModule { }
