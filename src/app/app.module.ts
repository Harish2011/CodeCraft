import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { FirstdirectiveDirective } from './firstdirective.directive';
import { PipesComponent } from './pipes/pipes.component';
import { ReactWithRxjsComponent } from './react-with-rxjs/react-with-rxjs.component';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { ModelDrivenFormsValidationComponent } from './model-driven-forms-validation/model-driven-forms-validation.component';
import { SubmitRestFormComponent } from './submit-rest-form/submit-rest-form.component';
import { HttpAPIComponent } from './http-api/http-api.component';
import { HttpPromisesComponent } from './http-promises/http-promises.component';
import { InjectorComponent } from './injector/injector.component';
import { HttpexampleComponent } from './httpexample/httpexample.component';
import { DependencyInjectionProvidersComponent } from './dependency-injection-providers/dependency-injection-providers.component';
import { RoutingComponent } from './routing/routing.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AboutComponent } from './about/about.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentsComponent } from './departments/departments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveComponent,
    FirstdirectiveDirective,
    PipesComponent,
    ReactWithRxjsComponent,
    ReactFormsComponent,
    ModelDrivenFormsComponent,
    ModelDrivenFormsValidationComponent,
    SubmitRestFormComponent,
    HttpAPIComponent,
    HttpPromisesComponent,
    InjectorComponent,
    HttpexampleComponent,
    DependencyInjectionProvidersComponent,
    RoutingComponent,
    ParentComponent,
    ChildComponent,
    AboutComponent,
    DepartmentContactComponent,
    DepartmentListComponent,
    DepartmentOverviewComponent,
    DepartmentsComponent,
    GalleryComponent,
    HomeComponent,
    SearchComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [HttpClientModule,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
