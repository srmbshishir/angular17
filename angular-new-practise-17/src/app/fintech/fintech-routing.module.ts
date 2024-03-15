import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core'
import {RootFintechComponent} from "./container/root-fintech/root-fintech.component";

const routes: Routes = [
  {
    path: '',
    component: RootFintechComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FintechRoutingModule{

}
