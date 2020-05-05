import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactWithRxjsComponent } from './react-with-rxjs/react-with-rxjs.component';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { ModelDrivenFormsValidationComponent } from './model-driven-forms-validation/model-driven-forms-validation.component';
import { SubmitRestFormComponent } from './submit-rest-form/submit-rest-form.component';
import { HttpAPIComponent } from './http-api/http-api.component';
import { HttpexampleComponent } from './httpexample/httpexample.component';
import { DependencyInjectionProvidersComponent } from './dependency-injection-providers/dependency-injection-providers.component';
import { RoutingComponent } from './routing/routing.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
    
  },
 
  {
    path:'navbar',
    component:NavbarComponent,
    canActivate :[AuthGuard] ,
    children:
    [
      
  {
    path:'customdirectives',
    component:CustomDirectiveComponent,
  },
 
  {
    path:'pipes',
    component:PipesComponent
  },
  {
    path:'ReactWithRxjs',
    component:ReactWithRxjsComponent
  },
  {
    path:'ReactForms',
    component:ReactFormsComponent
  },
  {
    path:'ModelDrivenForms',
    component:ModelDrivenFormsComponent
  
  },
  {
    path:'ModelDrivenFormsValidation',
    component:ModelDrivenFormsValidationComponent
  },
  {
    path:'SubmitRestForm',
    component:SubmitRestFormComponent
  },
  {
    path:'HttpAPI',
    component:HttpAPIComponent
  },
  {
    path:'Httpexample',
    component:HttpexampleComponent
  },
  {
    path:'dip',
    component:DependencyInjectionProvidersComponent
  },
  {
    path:'routing',
    component:RoutingComponent,
    children:[
      {
        path:'about',
        component:AboutComponent
      },
    
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:'gallery',
        component:GalleryComponent
      },
      {
        path:'departments',
        component:DepartmentsComponent
      },
      {
        path:'departmentlist',
        component:DepartmentListComponent
      },
      {
        path:'departments/:id',
        component:DepartmentListComponent,
        children:
        [
          {
            path:'overview',
            component:DepartmentOverviewComponent
          },
          {
            path:'contact',
            component:DepartmentContactComponent
          }
    
        ]
      },
      {
        path:'photo',
        redirectTo:"gallery"
      },
      {
        path:'**',
        component:PageNotFoundComponent
      }

    ]
  }
    ]
    
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
