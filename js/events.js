var Events = {
    init: function () {
        document.getElementById('user_input').addEventListener('blur', function () {
            this.focus();
        });
        document.getElementById('user_input').addEventListener('keypress', function (e) {
            if (!e) e = window.event;
            var keyCode = e.keyCode || e.which;
            this.value = this.value.toUpperCase();
            if(keyCode == 13){
                document.getElementById('info_text').textContent = '';
                //Enter
                if(this.value == 'N' || this.value == 'NORTH'){
                    User.go(Directions.TOP);
                } else if(this.value == 'E' || this.value == 'EAST'){
                    User.go(Directions.RIGHT);
                } else if(this.value == 'S' || this.value == 'SOUTH'){
                    User.go(Directions.BOTTOM);
                } else if(this.value == 'W' || this.value == 'WEST'){
                    User.go(Directions.LEFT);
                } else{
                    document.getElementById('info_text').textContent = 'You can\'t go there';
                }
                this.value = '';
            }
        })
    }
}
