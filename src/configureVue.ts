import Vue from "vue";
import VueMoment from "vue-moment";
import formatName from "./utils/formatName";
import summariseInsuredEntities from "./utils/summariseInsuredEntities";
import formatCurrency from "./utils/formatCurrency";

Vue.config.productionTip = false;
Vue.use(VueMoment);

Vue.filter("formatName", formatName);
Vue.filter("formatCurrency", formatCurrency);
Vue.filter("summariseInsuredEntities", summariseInsuredEntities);
