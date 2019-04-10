import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {NavComponent} from './nav/nav.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {AngularFireModule} from '@angular/fire';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CoreModule} from './core.module';
import {LoginComponent} from './login/login.component';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {SettingsModule} from './settings/settings.module';
import {TestComponent} from './test/test.component';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        LoginComponent,
        TestComponent,
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase, 'ShopPlatform'),
        NgxAuthFirebaseUIModule.forRoot(environment.firebase),
        MatPasswordStrengthModule.forRoot(),
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        NgxAuthFirebaseUIModule.forRoot(environment.firebase),
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        FormsModule,
        ScrollingModule,
        CoreModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatPasswordStrengthModule,
        SettingsModule,
        LayoutModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
