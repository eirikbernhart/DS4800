import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ToplistPage } from '../pages/top-list/top-list';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details-page/details-page';
import { MockedDishes } from '../pages/details-page/mocked-dishes';

import { ToDecimal } from "../pipes/to-decimal";
import { OrderBy } from "../pipes/order-by";



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ToplistPage,
    HomePage,
    TabsPage,
    DetailsPage,
    ToDecimal,
    OrderBy
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ToplistPage,
    HomePage,
    TabsPage,
    DetailsPage
  ],
  providers: [MockedDishes, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
