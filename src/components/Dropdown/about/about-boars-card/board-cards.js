import classes from './main.module.scss'
import {Link} from 'react-router-dom';

const BoardCards = ({image, link,title,id }) => {
    return (
        <Link to={`/Boards/singleBoard/${id}`} className={classes.BoardCards}>
            <img src={image} className={classes.BoardCardsImg} alt=""/>
            <div className={classes.BoardCardsContent}>
                <strong className={classes.infoPerson}>{title}</strong>
            </div>
        </Link>
    );
}

export default BoardCards;
