type Route = {
  [key: string]: {
    path: string;
  };
};

const route: Route = {
  home: {
    path: "/",
  },
  dashboard: {
    path: "/dashboard",
  },
  legalPolicy: {
    path: "/dashboard/legal-policy",
  },
  managePayments: {
    path: "/dashboard/manage-payments",
  },
  login: {
    path: "/login",
  },
};

export const getRoutes = (key: string) => route[key].path;

export const homeRoute = getRoutes("home");
export const dashboardRoute = getRoutes("dashboard");
export const manageRoute = getRoutes("managePayments");
export const policyRoute = getRoutes("legalPolicy");
export const loginRoute = getRoutes("login");
