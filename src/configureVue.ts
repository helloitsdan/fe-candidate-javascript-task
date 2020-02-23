import Vue from "vue";
import VueMoment from "vue-moment";
import formatName from "./utils/formatName";
import summariseInsuredEntities from "./utils/summariseInsuredEntities";

Vue.config.productionTip = false;
Vue.use(VueMoment);

Vue.filter("formatName", formatName);
Vue.filter("summariseInsuredEntities", summariseInsuredEntities);
