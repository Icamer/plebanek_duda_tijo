function sortArray(array) {
    if (!Array.isArray(array)) {
        return false;
    }
    if (array.length === 0)
        return false;

    if (isNaN(array[0])) {
        return false;
    }


    for (var counter = 0; counter < array.length; counter++) {
        if (isNaN(array[counter])) {
            return false;
        }
        var tmp = array[counter];
        var innerCounter = counter + 1;
        while (innerCounter >= 0 && array[innerCounter] > tmp) {
            array[innerCounter + 1] = array[innerCounter];
            innerCounter--;
        }

        array[innerCounter + 1] = tmp;
    }
    return array;
}
module.exports = {
    sortArray: sortArray
};
