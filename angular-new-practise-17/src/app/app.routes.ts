import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [{
            path: 'platform',
            loadChildren: ()=>
                import('./platform/platform.module')
                    .then((m=> m.PlatformModule))
        },{
          path: 'fintech',
          loadChildren: ()=>
            import('./fintech/fintech.module')
              .then((m=> m.FintechModule))
        }]
    }
];
