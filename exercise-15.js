function groupAnimals(animals)
{
    var words = 'abcdefghijklmnopqrstuvwxyz'
    var result = []

    for (var i=0 ; i < words.length; i++)
    {
        var tmpSort = []
        var check = false

        for (var j=0; j < animals.length; j++)
        {
            if(words[i] == animals[j][0])
            {
                tmpSort.push(animals[j])
                check = true
            }
        }

        if(check == true)
        {
            result.push(tmpSort)
        }
    }

    return result

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]