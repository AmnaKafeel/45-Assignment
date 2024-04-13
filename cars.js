"use strict";
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInf0 = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInf0;
}
;
let answer = storeCarInfo('Honda', 'Civic', { color: 'Black' }, { features: ['Navigation', 'Power Window'] });
console.log(answer);
