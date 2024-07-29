import { Routes } from '@angular/router';
import { TestquerystringComponent } from './testquerystring/testquerystring.component';

export const routes: Routes = [
    { path: 'testquerystring', component: TestquerystringComponent },
    { path: 'testmodule', loadChildren: () => import('./testmodule/testmodule.module').then(m => m.TestmoduleModule) },
];
