import { Link } from "react-router-dom";
import classes from "./Membership.module.scss";
import { SearchIcon } from "../../assets/icons";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../container/Loader";
import { request } from "../../api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { set_pages } from "../../redux/actions";

const Membership = () => {
  const [view, setView] = useState(true);
  const [sort, setSort] = useState([]);
  const [state, setState] = useState({
    loading: true,
    data: [],
  });
  const [loading, data] = useFetch("/content/all/industry");
  const dispatch = useDispatch()
  useEffect(() => { 
    request("/content/all/page")
      .then((res) => dispatch(set_pages(res.data.data)))
      .catch((err) => console.warn(err));
  }, []);
  useEffect(() => {
    onLoad();
  }, []);
  const sortHandler = (data) => {
    let platinum = { title: "", data: [] },
      gold = { title: "", data: [] },
      silver = { title: "", data: [] },
      bronze = { title: "", data: [] },
      honorary = { title: "", data: [] },
      nonPrezident = { title: "", data: [] },
      nonProfit = { title: "", data: [] };

     if (data) {
       for (let item of data) {
         switch (item.membership_cat) {
           case "76":
             platinum = { title: "Platinum", data: [...platinum.data, item] };
             break;
           case "77":
             gold = { title: "Gold", data: [...gold.data, item] };
             break;
           case "79":
             silver ={title: 'Silver', data: [...silver.data, item]};
             break;
           case "80":
             bronze = { title: "Bronze", data: [...bronze.data, item] };
             break;
           case "81":
             nonProfit = { title: "Non-profit", data: [...nonProfit.data, item] };
             break;
           case "82":
             honorary = { title: "Honorary", data: [...honorary.data, item] };
             break;
           case "181":
             nonPrezident = {
               title: "Non-rezident",
               data: [...nonPrezident.data, item],
             };
             break;
           default:
             break;
            }
            console.log(item);
       }
     }
    setSort([platinum,gold,silver,bronze,honorary,nonPrezident, nonProfit])
  };
  const onLoad = () => {
    request("/company/all/company")
      .then((res) => {
        setState({
          loading: false,
          data: res.data.data,
        });
        sortHandler(res.data.data)
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const OnSelectHandler = (e) => {
    request(`/company/all/company?industry=${e}`)
      .then((res) =>
        setState({
          loading: false,
          data: res.data.data,
        })
      )
      .catch((err) => console.log(err));
  };
  const onSearchHandler = (name) => {
    if (name.length === 0) onLoad();
    request(`/company/all/company?search=${name}`)
      .then((res) =>
        setState({
          loading: false,
          data: res.data.data,
        })
      )
      .catch((err) => console.log(err));
  };
  const membership = useSelector((state) =>
    state.system.pages.filter((el) => el.id === "163")
  )[0];
  if (state.loading) return <Loader size={100} />;
  return (
    <div className={classes.container}>
      <Helmet>
        <title>{membership.title}</title>
      </Helmet>
      <h1 className={classes.title}>{membership.title}</h1>
      <div className={classes.filter}>
        <div className={classes.search}>
          <button>
            <SearchIcon />
          </button>
          <input
            type="search"
            placeholder={"Search..."}
            onChange={(e) => onSearchHandler(e.target.value)}
          />
        </div>
        <div className={classes.options}>
          <div className={classes.option}>
            <label htmlFor="industry">Choose Industry:</label>
            <select
              name="industry"
              id="industry"
              onChange={(e) => OnSelectHandler(e.target.value)}
            >
              <option value={"All"}>{"Select"}</option>
              {!loading &&
                data.data.map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.title}
                  </option>
                ))}
            </select>
          </div>
          <div className={classes.option2}>
            <button
              className={view ? classes.card_list : null}
              onClick={() => setView(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.49967 7.50004H7.49967V2.50004H2.49967V7.50004ZM0.833008 2.49972C0.833008 1.57942 1.57254 0.833374 2.49935 0.833374H7.49999C8.42029 0.833374 9.16634 1.5729 9.16634 2.49972V7.50036C9.16634 8.42066 8.42681 9.16671 7.49999 9.16671H2.49935C1.57906 9.16671 0.833008 8.42718 0.833008 7.50036V2.49972ZM2.49967 17.5H7.49967V12.5H2.49967V17.5ZM0.833008 12.4997C0.833008 11.5794 1.57254 10.8334 2.49935 10.8334H7.49999C8.42029 10.8334 9.16634 11.5729 9.16634 12.4997V17.5004C9.16634 18.4207 8.42681 19.1667 7.49999 19.1667H2.49935C1.57906 19.1667 0.833008 18.4272 0.833008 17.5004V12.4997ZM12.4997 17.5H17.4997V12.5H12.4997V17.5ZM10.833 12.4997C10.833 11.5794 11.5725 10.8334 12.4994 10.8334H17.5C18.4203 10.8334 19.1663 11.5729 19.1663 12.4997V17.5004C19.1663 18.4207 18.4268 19.1667 17.5 19.1667H12.4994C11.5791 19.1667 10.833 18.4272 10.833 17.5004V12.4997ZM12.4997 7.50004H17.4997V2.50004H12.4997V7.50004ZM10.833 2.49972C10.833 1.57942 11.5725 0.833374 12.4994 0.833374H17.5C18.4203 0.833374 19.1663 1.5729 19.1663 2.49972V7.50036C19.1663 8.42066 18.4268 9.16671 17.5 9.16671H12.4994C11.5791 9.16671 10.833 8.42718 10.833 7.50036V2.49972Z"
                  fill="#333333"
                ></path>
              </svg>
            </button>
            <button
              className={view ? null : classes.card_list}
              onClick={() => setView(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.8568 9.52377H2.14253C1.79522 9.52377 1.46214 9.3858 1.21656 9.14022C0.970975 8.89463 0.833008 8.56155 0.833008 8.21424L0.833008 2.97615C0.833008 2.62884 0.970975 2.29576 1.21656 2.05018C1.46214 1.80459 1.79522 1.66663 2.14253 1.66663H17.8568C18.2041 1.66663 18.5372 1.80459 18.7828 2.05018C19.0284 2.29576 19.1663 2.62884 19.1663 2.97615V8.21424C19.1663 8.56155 19.0284 8.89463 18.7828 9.14022C18.5372 9.3858 18.2041 9.52377 17.8568 9.52377ZM2.57904 7.77774H17.4203V3.41266H2.57904V7.77774Z"
                  fill="#333333"
                ></path>
                <path
                  d="M17.8568 19.1269H2.14253C1.79522 19.1269 1.46214 18.9889 1.21656 18.7434C0.970975 18.4978 0.833008 18.1647 0.833008 17.8174L0.833008 12.5793C0.833008 12.232 0.970975 11.8989 1.21656 11.6533C1.46214 11.4077 1.79522 11.2698 2.14253 11.2698H17.8568C18.2041 11.2698 18.5372 11.4077 18.7828 11.6533C19.0284 11.8989 19.1663 12.232 19.1663 12.5793V17.8174C19.1663 18.1647 19.0284 18.4978 18.7828 18.7434C18.5372 18.9889 18.2041 19.1269 17.8568 19.1269ZM2.57904 17.3809H17.4203V13.0158H2.57904V17.3809Z"
                  fill="#333333"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={classes.Wrapper}>
        {view ? (
          state.data &&
          state.data
            .sort((a, b) =>
              a.title.localeCompare(b.title, undefined, { numeric: true })
            )
            .map((el) => (
              <Link
                className={classes.card}
                to={`/membership/${el.id}`}
                key={el.id}
              >
                <img
                  className={classes.img}
                  src={
                    el.logo_of_company ||
                    "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
                  }
                  alt=""
                />
                <div>
                  <h2>{el.title}</h2>
                </div>
              </Link>
            ))
        ) : (
          <div className={classes.spaceBetween}>
            {sort.map((group, index) => (
              <ul key={index} className={classes.listGroup}>
                <h3>{group.title}</h3>
                {group.data.map((item) => (
                  <li key={item.id}>
                    <Link to={`/membership/${item.id}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Membership;
