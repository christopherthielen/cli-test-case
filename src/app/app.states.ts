import {AppComponent} from "./app.component"

const A = { name: 'A', component: AppComponent };
const B = { name: 'B', component: AppComponent };
const C = { name: 'C', component: AppComponent };
const D = { name: 'D', component: AppComponent };

export const STATES1 = [ A, B ];
export const STATES2 = [ C, D ];
export const ALL_STATES = [ A, B, C, D ];

// app doesn't work due to .concat, but no error from ngc
export const INITIAL_STATES = STATES1.concat(STATES2);

// app works when uncommented
// export const INITIAL_STATES = ALL_STATES;