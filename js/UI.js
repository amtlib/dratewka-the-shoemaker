var UI = {
    update: function(){
        document.getElementById('top_text').textContent = User.current_location_obj.get_top_text();
        document.getElementById('location_image').setAttribute('src', User.current_location_obj.get_img());
        document.getElementById('location_image_container').style.backgroundColor = User.current_location_obj.get_background_color();
        document.getElementById('possible_directions').textContent = 'you can go ' + User.current_location_obj.get_possible_directions().join(', ');

    }
}
