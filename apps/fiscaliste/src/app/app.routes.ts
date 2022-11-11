import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'true-cost', pathMatch: 'full' },
    {
        path: 'true-cost',
        loadChildren: () =>
            loadRemoteModule('true-cost', './Module').then(
                (m) => m.RemoteEntryModule
            ),
    },
];
