var User = {
    current_location_obj: Locations.find_location([4, 7]),
    go: function (direction) {
        if (this.current_location_obj.get_possible_directions().indexOf(direction) >= 0) {
            if (direction == Directions.TOP) {
                this.current_location_obj = Locations.find_location([this.current_location_obj.get_coords()[0] - 1, this.current_location_obj.get_coords()[1]]);
            } else if (direction == Directions.BOTTOM) {
                this.current_location_obj = Locations.find_location([this.current_location_obj.get_coords()[0] + 1, this.current_location_obj.get_coords()[1]]);
            } else if (direction == Directions.LEFT) {
                this.current_location_obj = Locations.find_location([this.current_location_obj.get_coords()[0], this.current_location_obj.get_coords()[1] - 1]);
            } else if (direction == Directions.RIGHT) {
                this.current_location_obj = Locations.find_location([this.current_location_obj.get_coords()[0], this.current_location_obj.get_coords()[1] + 1]);
            } else {
                return false;
            }
            UI.update();
            return true;
        }
    }
}
