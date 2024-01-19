import Instafeed from 'instafeed.js';

export default function() {

	if($(".mainInsta #instafeed.instafeedLive")[0]){
		let instaToken = $("#instafeed").attr("data-accessToken");
		let instaCount = parseInt($("#instafeed").attr("data-instaCount"));
	
		var feed = new Instafeed({
		  accessToken: instaToken,
		  limit: 20,
		  template: '<a href="{{link}}" target="_black"><div class="instatint"></div><img title="{{caption}}" src="{{image}}" alt="{{caption}}"/> <span><svg class="insta-icon"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.59-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z" transform="translate(0)"/></svg></span> </a>',
		  after: function() {
			$(".mainInsta #instafeed").slick({
			  infinite: true,
			  mobileFirst: true,
			  dots: false,
			  draggable: true,
			  autoplay: true, /* this is the new line */
			  autoplaySpeed: 3000,
			  arrows: false,
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  responsive: [
			  {
				breakpoint: 1201,
				settings: {
				  slidesToShow: instaCount,
				  slidesToScroll: 1,
				}
			  },
			  {
				breakpoint: 992,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 1,
				}
			  },
			  {
				breakpoint: 768,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				}
			  }]
			});
	
		  }
		});
	
	
		feed.run();
	  }
}
