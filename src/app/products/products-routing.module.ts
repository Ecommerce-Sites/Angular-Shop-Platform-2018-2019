import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule} from '@angular/router';

const routes = [
    {path: '', component: ProductsComponent},
    {path: 'create', loadChildren: './product-create/product-create.module#ProductCreateModule'},
    {path: ':id', component: ProductDetailComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}