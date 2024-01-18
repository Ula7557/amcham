import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({classname, image}) => {
    return (
        <LazyLoadImage
            src={image}
            delayMethod="debounce"
            effect="blur"
            delayTime="100"
            className={classname}
        />
    )
}
export default LazyImage;
