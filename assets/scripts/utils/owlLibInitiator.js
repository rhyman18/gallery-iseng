const OwlInitiator = {
    render() {
        $(document).ready(function() {
            const owl = $('.owl-carousel');
            owl.owlCarousel({
                loop: true,
                responsive: {
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },            
                    750:{
                        items:3
                    },
                    1050:{
                        items:4
                    },
                    1400:{
                        items:5
                    }
                }
            });

            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY > 0) {
                    owl.trigger('next.owl');
                } else {
                    owl.trigger('prev.owl');
                }
                e.preventDefault();
            });
        });
    }
};

export default OwlInitiator;
