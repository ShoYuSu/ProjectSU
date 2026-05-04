import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { StaffComponent } from './pages/staff/staff';
import { AddStaffComponent } from './pages/staff/add-staff/add-staff';
import { ResearchComponent } from './pages/research/research';
import { ResearchArticleComponent } from './pages/research/research-article/research-article';
import { TrainingComponent } from './pages/training/training';
import { PlansComponent } from './pages/plans/plans/plans';
import { AddPlansComponent } from './pages/plans/add-plans/add-plans';
import { ProfileComponent } from './pages/staff/profile/profile';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'staff/add', component: AddStaffComponent },
      { path: 'staff/profile', component: ProfileComponent },
      { path: 'research', component: ResearchComponent },
      { path: 'research/article', component: ResearchArticleComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'plans', component: PlansComponent },
      { path: 'plans/add', component: AddPlansComponent } 
    ]
  }
];