import { Routes } from '@angular/router';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: StartscreenComponent },
    { path: 'imprint', component: ImprintComponent },
];

