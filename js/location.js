class Location {
    constructor(coords, top_text, background_color, possible_directions){
        this.coords = coords,
        this.top_text = top_text;
        this.img = 'img/'+this.coords.join('')+'.gif';
        this.background_color = background_color;
        this.possible_directions = possible_directions;
    }
    get_coords(){
        return this.coords;
    }
    get_top_text(){
        return this.top_text;
    }
    get_img(){
        return this.img;
    }
    get_background_color(){
        return this.background_color;
    }
    get_possible_directions(){
        return this.possible_directions;
    }
    get_bottom_text(){
        return this.bottom_text;
    }

    set_top_text(top_text){
        this.top_text = top_text;
    }
    set_img(img){
        this.img = img;
    }
    set_background_color(background_color){
        this.background_color = background_color;
    }
    set_possible_directions(possible_directions){
        this.possible_directions = possible_directions;
    }
    set_bottom_text(bottom_text){
        this.bottom_text = bottom_text;
    }
}
