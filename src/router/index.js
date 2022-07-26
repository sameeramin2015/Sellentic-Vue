import { createRouter, createWebHistory } from "vue-router";
import HomePagina from "../views/HomePagina.vue";
import BlastPagina from "../views/BlastPagina.vue";
import ConnectPagina from "../views/ConnectPagina.vue";
import OptimizePagina from "../views/OptimizePagina.vue";
import TrainingPagina from "../views/TrainingPagina.vue";
import SupportPagina from "../views/SupportPagina.vue";
import JobsPagina from "../views/JobsPagina.vue";
import AboutusPagina from "../views/AboutusPagina.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import AccountingPagina from "../views/AccountingPagina.vue";
import AdvertisePagina from "../views/AdvertisePagina.vue";
import AdvertisingChannels from "../views/AdvertisingChannels.vue";
import DispatchPagina from "../views/DispatchPagina.vue";
import FulfillmentPagina from "../views/FulfillmentPagina.vue";
import OnlineMarketplaces from "../views/OnlineMarketplaces.vue";
import OptimizeM from "../views/OptimizeM.vue";
import OrderPagina from "../views/OrderPagina.vue";
import RepricingPagina from "../views/RepricingPagina.vue";
import SellingPagina from "../views/SellingPagina.vue";
import StockPagina from "../views/StockPagina.vue";
import WebshopsPagina from "../views/WebshopsPagina.vue";
import WorkingPagina from "../views/WorkingPagina.vue";
import HomeNL from "../views/HomeNL";

const routes = [
  {
    path: "/",
    name: "HomePagina",
    component: HomePagina,
  },
  {
    path: "/BlastPagina",
    name: "BlastPagina",
    component: BlastPagina,
  },
  {
    path: "/ConnectPagina",
    name: "ConnectPagina",
    component: ConnectPagina,
  },
  {
    path: "/OptimizePagina",
    name: "OptimizePagina",
    component: OptimizePagina,
  },
  {
    path: "/TrainingPagina",
    name: "TrainingPagina",
    component: TrainingPagina,
  },
  {
    path: "/SupportPagina",
    name: "SupportPagina",
    component: SupportPagina,
  },
  {
    path: "/JobsPagina",
    name: "JobsPagina",
    component: JobsPagina,
  },
  {
    path: "/AboutusPagina",
    name: "AboutusPagina",
    component: AboutusPagina,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/AccountingPagina",
    name: "AccountingPagina",
    component: AccountingPagina,
  },
  {
    path: "/AdvertisePagina",
    name: "AdvertisePagina",
    component: AdvertisePagina,
  },
  {
    path: "/AdvertisingChannels",
    name: "AdvertisingChannels",
    component: AdvertisingChannels,
  },
  {
    path: "/DispatchPagina",
    name: "DispatchPagina",
    component: DispatchPagina,
  },
  {
    path: "/FulfillmentPagina",
    name: "FulfillmentPagina",
    component: FulfillmentPagina,
  },
  {
    path: "/OnlineMarketplaces",
    name: "OnlineMarketplaces",
    component: OnlineMarketplaces,
  },
  {
    path: "/OptimizeM",
    name: "OptimizeM",
    component: OptimizeM,
  },
  {
    path: "/OrderPagina",
    name: "OrderPagina",
    component: OrderPagina,
  },
  {
    path: "/RepricingPagina",
    name: "RepricingPagina",
    component: RepricingPagina,
  },
  {
    path: "/SellingPagina",
    name: "SellingPagina",
    component: SellingPagina,
  },
  {
    path: "/StockPagina",  
    name: "StockPagina",
    component: StockPagina,
  },
  {
    path: "/WebshopsPagina",  
    name: "WebshopsPagina",
    component: WebshopsPagina,
  },
  {
    path: "/WorkingPagina",  
    name: "WorkingPagina",
    component: WorkingPagina,
  },
  {
    path: "/HomeNL",
    name: "HomeNL",
    component: HomeNL,
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
