
function sortArray (array)
{
    if (!Array.isArray(array)) {
        return false;
    }



    for (var i = array.length -2; i>= 0; i--){
        var arg = array[i];
        if (isNaN(arg)){
            return false;
        }

        var j = i + 1;
        while ((j < array.length) && (arg > array[j]) ){
            array[j-1] = array[j];
            j++;
        }
        array[j-1] = arg;
    }

    console.log(array);
    return array;
}
module.exports = {
    sortArray: sortArray
};
