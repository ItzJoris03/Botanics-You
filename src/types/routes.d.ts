export interface RouteConfig {
    path: string;
    component: string;
    linkName?: string;
    includeNavbar?: boolean;
    subroutes?: RouteConfig[]; // Optional subroutes
    hiddenFromMenu?: boolean;
}