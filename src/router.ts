import Vue from "vue";
import Router from "vue-router";

import CustomerList, {
  CustomerDetails,
  CustomerPoliciesAndQuotes
} from "@/modules/customers";
import { PolicyDetails } from "@/modules/policies";
import { QuoteDetails } from "@/modules/quotes";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "CustomerList",
      component: CustomerList
    },
    {
      path: "/:customerId",
      component: CustomerDetails,
      props: true,
      children: [
        {
          path: "/",
          name: "CustomerDetails",
          component: CustomerPoliciesAndQuotes
        },
        {
          path: "policy/:policyId",
          name: "PolicyDetails",
          component: PolicyDetails,
          props: true
        },
        {
          path: "quote/:quoteId",
          name: "QuoteDetails",
          component: QuoteDetails,
          props: true
        }
      ]
    }
  ]
});
