import {useFetch} from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import classes from './business.module.scss';
import parse from "html-react-parser";
import AsforNav from "../../components/Carousel/AsforNav";

const Mixer = () => {
    const params = useParams();
    const [loading, data, ] = useFetch(`/content/one/mixer?id=${params.id}`)
    if (loading) return null;
    const {image, title, description, file} = data.data;
    const fileGenerate = obj => {
        const arr = [];
        Object.entries(obj).forEach(item => {
            arr.push(item[1])
        });
        return arr;
    }

    return (
      <div className={"container"}>
        <h1 className={classes.title}>{title}</h1>
        <div style={{ display: "flex" }}>
          <img
            src={image}
            style={{
              marginBottom: "30px",
              marginRight: "20px",
              maxWidth: 600,
              objectFit: "cover",
            }}
            width={"100%"}
            alt=""
          />
          <AsforNav data={file && fileGenerate(JSON.parse(file))} />
        </div>
        <p style={{ marginBottom: "20px" }}>{parse(description)}</p>
      </div>
    );
}

export default Mixer;
