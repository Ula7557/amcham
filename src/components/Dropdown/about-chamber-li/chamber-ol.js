import classes from './main.module.scss'

const ChamberUl = ({title,description,list}) => {
    return ( 
        <div className={classes.chamberUlBlock}>
            <h2 className={classes.chamberUlBlockTitle}>{title}</h2>
            <h4 className={classes.chamberUlBlockDesktription}>{description}</h4>
            <ol classes={classes.chamberUlBlockOl}>
                <li className={classes.chamberUlBlockLi}>{list}</li>
                <li className={classes.chamberUlBlockLi}>{list}</li>
                <li className={classes.chamberUlBlockLi}>{list}</li>
                <li className={classes.chamberUlBlockLi}>{list}</li>
            </ol>
        </div>
     );
}
 
export default ChamberUl;