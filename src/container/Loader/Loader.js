import classes from './loader.module.scss'
import Spinner from "../../components/Spinner";

const Loader = ({size}) => {
    return (
        <div className={classes.loader} style={{height: `${size}vh`}}>
                <Spinner />
        </div>
    )
}
export default Loader
