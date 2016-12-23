var Locations = {
    locations: [
    new Location([1, 1], 'You are inside a brimstone mine', 'rgb(235,211,64)', [Directions.RIGHT])
    , new Location([1, 2], 'You are at the entrance to the mine', 'rgb(89,93,87)', [Directions.RIGHT])
    , new Location([1, 3], 'A hill', 'rgb(117,237,243)', [Directions.BOTTOM, Directions.RIGHT])
    , new Location([1, 4], 'Some bushes', 'rgb(202,230,51)', [Directions.RIGHT])
    , new Location([1, 5], 'An old deserted hut', 'rgb(220,204,61)', [Directions.RIGHT])
    , new Location([1, 6], 'The edge of a forest', 'rgb(167,245,63)', [Directions.RIGHT])
    , new Location([1, 7], 'A dark forest', 'rgb(140,253,99)', [Directions.BOTTOM])
    , new Location([2, 1], 'A man nearby making tar', 'rgb(255,190,99)', [Directions.RIGHT, Directions.BOTTOM])
    , new Location([2, 2], 'A timber yard', 'rgb(255,190,99)', [Directions.RIGHT, Directions.BOTTOM, Directions.LEFT])
    , new Location([2, 3], 'You are by a roadside shrine', 'rgb(167,245,63)', [Directions.TOP, Directions.RIGHT, Directions.BOTTOM, Directions.LEFT])
    , new Location([2, 4], 'You are by a small chapel', 'rgb(212,229,36)', [Directions.RIGHT, Directions.LEFT])
    , new Location([2, 5], 'You are on a road leading to a wood', 'rgb(167,245,63)', [Directions.RIGHT, Directions.BOTTOM, Directions.LEFT])
    , new Location([2, 6], 'You are in a forest', 'rgb(167,245,63)', [Directions.RIGHT, Directions.LEFT])
    , new Location([2, 7], 'You are in a deep forest', 'rgb(140,253,99)', [Directions.TOP, Directions.LEFT])
    , new Location([3, 1], 'You are by the Vistula River', 'rgb(122,232,252)', [Directions.TOP, Directions.RIGHT])
    , new Location([3, 2], 'You are by the Vistula River', 'rgb(140,214,255)', [Directions.TOP, Directions.LEFT])
    , new Location([3, 3], 'You are on a bridge over river', 'rgb(108,181,242)', [Directions.TOP, Directions.BOTTOM])
    , new Location([3, 4], 'You are by the old tavern', 'rgb(255,189,117)', [Directions.RIGHT])
    , new Location([3, 5], 'You are at the town\'s end', 'rgb(255,190,99)', [Directions.TOP, Directions.BOTTOM, Directions.LEFT])
    , new Location([3, 6], 'You are in a butcher\'s shop', 'rgb(255,188,102)', [Directions.BOTTOM])
    , new Location([3, 7], 'You are in a cooper\'s house', 'rgb(255,188,102)', [Directions.BOTTOM])
    , new Location([4, 1], 'You are in the Wawel Castle', 'rgb(255,176,141)', [Directions.RIGHT])
    , new Location([4, 2], 'You are inside a dragon\'s cave', 'rgb(198,205,193)', [Directions.RIGHT, Directions.LEFT])
    , new Location([4, 3], 'A perfect place to set a trap', 'rgb(255,176,141)', [Directions.TOP, Directions.LEFT])
    , new Location([4, 4], 'You are by the water mill', 'rgb(255,190,99)', [Directions.RIGHT])
    , new Location([4, 5], 'You are at a main crossroad', 'rgb(255,190,99)', [Directions.TOP, Directions.RIGHT, Directions.BOTTOM, Directions.LEFT])
    , new Location([4, 6], 'You are on a town street', 'rgb(255,190,99)', [Directions.TOP, Directions.RIGHT, Directions.LEFT])
    , new Location([4, 7], 'You are in a frontyard of your house', 'rgb(255,190,99)', [Directions.TOP, Directions.BOTTOM, Directions.LEFT])
    , new Location([5, 4], 'You are by a swift stream', 'rgb(108,181,242)', [Directions.RIGHT])
    , new Location([5, 5], 'You are on a street leading forest', 'rgb(255,190,99)', [Directions.TOP, Directions.BOTTOM, Directions.LEFT])
    , new Location([5, 6], 'You are in a woodcutter\'s backyard', 'rgb(255,190,99)', [Directions.BOTTOM])
    , new Location([5, 7], 'You are in a shoemaker\'s house', 'rgb(254,194,97)', [Directions.TOP])
    , new Location([6, 4], 'You are in a bleak funeral house', 'rgb(254,194,97)', [Directions.RIGHT])
    , new Location([6, 5], 'You are on a path leading to the wood', 'rgb(167,245,63)', [Directions.TOP, Directions.RIGHT, Directions.LEFT])
    , new Location([6, 6], 'You are at the edge of a forest', 'rgb(167,245,63)', [Directions.TOP, Directions.RIGHT, Directions.LEFT])
    , new Location([6, 7], 'You are in a deep forest', 'rgb(140,253,99)', [Directions.LEFT])
, ]
    , find_location: function (coords) {
        for (element in Locations.locations) {
            if (Locations.locations[element].get_coords().length == coords.length && Locations.locations[element].get_coords().every(function (v, i) {
                    return v === coords[i]
                })) {
                return Locations.locations[element];
            }
        }
    }
}
