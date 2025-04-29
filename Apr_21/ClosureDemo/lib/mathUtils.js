
var mathUtils = (() => {
        var count = 0;
        var getMultiplication = (data) => {
            count++;
            data.fval = parseInt(data.fval);
            data.sval = parseInt(data.sval);
            var result = data.fval * data.sval;
            return result;
        }


        var getAddition = (data) => {
            count++;
            data.fval = parseInt(data.fval);
            data.sval = parseInt(data.sval);
            var result = data.fval + data.sval;
            return result;
        }



        return {
            a: 400,
            getSubstraction(data) {
                count++;
                data.fval = parseInt(data.fval);
                data.sval = parseInt(data.sval);
                var result = data.fval - data.sval;
                return result;
            },
            getAdditionOfValues(data) {
                return getAddition(data);
            },
            getDivision(data) {
                count++;
                data.fval = parseInt(data.fval);
                data.sval = parseInt(data.sval);
                var result = data.fval / data.sval;
                return result;
            }
        }
})();
