import { RouterModule, Routes } from "@angular/router"

import { HomeComponent } from "./home/home.component"
import { SubPagesComponent } from './sub-pages/sub-pages.component'

const APP_ROUTES: Routes = [
	{ path: "", component: HomeComponent },
	{ path: ":id", component: SubPagesComponent },
	{ path: "**", redirectTo: "" }
]

// export const ROUTES = RouterModule.forRoot(APP_ROUTES)
export const ROUTES = RouterModule.forRoot(APP_ROUTES, {useHash: true})
