import Swatches from './swatches/scripts';
import FeaturedProduct from './featured-product/scripts';
import Instagram from './instagram/scripts';
import Reorder from './reorder/scripts';


export default function(){
	Instagram();
	Reorder();	
}

const swatches = new Swatches();

const featuredProduct = new FeaturedProduct();
featuredProduct.request();


