
function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key : string]: any } [] ): object {
const carInf0 = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraOption)
}
return carInf0;
};

let answer = storeCarInfo('Honda', 'Civic', {color: 'Black'}, {features:['Navigation','Power Window']})

console.log(answer);