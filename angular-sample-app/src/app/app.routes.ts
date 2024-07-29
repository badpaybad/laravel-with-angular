import { Routes } from '@angular/router';
import { TestquerystringComponent } from './testquerystring/testquerystring.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    { path: '',redirectTo: '/angularsample', pathMatch: 'full'  },
    { path: 'angularsample', component: AppComponent },
    { path: 'testquerystring', component: TestquerystringComponent },
    { path: 'testmodule', loadChildren: () => import('./testmodule/testmodule.module').then(m => m.TestmoduleModule) },
];
