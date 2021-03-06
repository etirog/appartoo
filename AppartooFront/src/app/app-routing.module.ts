import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { MyFriendsComponent } from './my-friends/my-friends.component';
import { MyInfoComponent } from './my-info/my-info.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
    }, {
        path: 'signin',
        component: SignInComponent,
    }, {
        path: 'login',
        component: LogInComponent,
    }, {
        path: 'me',
        component: MyInfoComponent,
    }, {
        path: 'friends',
        component: MyFriendsComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
