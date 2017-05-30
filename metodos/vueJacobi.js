var app = new Vue({
    el: '#errorPorcentual',
    data: {
        valor: 0,
        visible:true,
    },
    meethods:{
        toggleValue: function() {
            if(this.visible == true) {
                this.visible = false;
            } else {
                this.visible = true;
            }
        }
    }
})
