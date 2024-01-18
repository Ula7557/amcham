import { Link } from "react-router-dom";
import { APPLY_GUIDES, JOIN_US_DATAS } from "../../db";
import classes from "./JoinUs.module.scss";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { request } from "../../api";
import { set_pages } from "../../redux/actions";
import { Document, Page, pdfjs } from "react-pdf";
import file from "../../test.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const JoinUs = () => {
  const { table } = JOIN_US_DATAS;
  const joinus = useSelector((state) =>
    state.system.pages.filter((el) => el.id === "192")
  )[0];
  const dispatch = useDispatch();
  useEffect(() => {
    request("/content/all/page")
      .then((res) => dispatch(set_pages(res.data.data)))
      .catch((err) => console.warn(err));
  }, []);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <div className={classes.banner}>
        <h1 className={classes.title}>{joinus.title}</h1>
      </div>
      <div className={classes.welcoming}></div>
      <div className="container joinUs" style={{ maxWidth: "1140px" }}>
        <div className={classes.infographics}>
          <div className={classes.infographicsRow}>
            <div>
              <h3 className={classes.infoTitle}>
                AmCham Network represents interest of over
              </h3>
              <CountUp separator=" " duration={5} end={3000000} />
              <h3 className={classes.infoTitle}>Companies worldwide</h3>
            </div>
            <div>
              <h3 className={classes.infoTitle}>Represented in</h3>
              <CountUp duration={5} end={108} />
              <h3 className={classes.infoTitle}>Countries around the Globe.</h3>
            </div>
          </div>
          <div className={classes.infographicsButton}>
            <Link to="/form">
              <button className={classes.applyButton}>Apply now</button>
            </Link>
          </div>
        </div>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <div className={classes.doc}>
            <Page pageNumber={1} className={classes.page} />
            <Page pageNumber={2} className={classes.page} />
          </div>
        </Document>

        <div className="guide">
          <div className="container">
            <h2 className={classes.guidesTitle}>How to apply</h2>
            <div className={classes.wrapper}>
              {APPLY_GUIDES.map((guide) => (
                <div className={classes.guide} key={guide.id}>
                  <h4 className={classes.count}>{guide.id}</h4>
                  <h4 className={classes.guideTitle}>{guide.title}</h4>
                  <h4 className={classes.guideText}>{guide.text}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.applicationForm}>
          <Link to="/form">
            <button className={classes.applyButton}>Apply now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
