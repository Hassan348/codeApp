import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'list-all', loadChildren: './list-all/list-all.module#ListAllPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'categorie', loadChildren: './categorie/categorie.module#CategoriePageModule' },
  { path: 'list-by-categorie', loadChildren: './list-by-categorie/list-by-categorie.module#ListByCategoriePageModule' },
  { path: 'quizhome', loadChildren: './quizhome/quizhome.module#QuizhomePageModule' },
  { path: 'quizresult', loadChildren: './quizresult/quizresult.module#QuizresultPageModule' },
  { path: 'quizquestion', loadChildren: './quizquestion/quizquestion.module#QuizquestionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
