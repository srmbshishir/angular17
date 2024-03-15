import { Routes } from '@angular/router';
import {RootPlatformComponent} from "./components/root-platform/root-platform.component";
import {RouterModule} from '@angular/router'
import {NgModule} from '@angular/core'

const routes: Routes = [
    {
        path: '',
        component: RootPlatformComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule{

}
