// import CustomDialog from './src/customDialog.vue'

// export default {
//     install: (Vue: any) => {
//         Vue.component('custom-dialog', CustomDialog);
//     }
// }

import CustomDialog from './src/customDialog.vue';

CustomDialog.install = function(Vue) {
  Vue.component(CustomDialog.name, CustomDialog);
};

export default CustomDialog;