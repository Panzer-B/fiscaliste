import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersModule } from '@fiscaliste/users';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, StoreModule.forRoot({}), EffectsModule.forRoot(), UsersModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
