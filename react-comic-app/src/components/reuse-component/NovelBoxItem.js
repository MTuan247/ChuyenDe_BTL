import React from "react";
import "../../css/novelboxitem.css";
import { RiBook2Fill, RiCheckboxCircleFill, RiEyeLine, RiHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function NovelBoxItem(props) {
  const icon = props.icon;
  let iconDisplay;

  switch (icon) {
    case "like":
      iconDisplay = (
        <>
          <div className="nb-item__focus">
            <RiHeartFill className="color-heart" /> {props.like}
          </div>
          {/* <a className="nb-item__category" href="/">
            {props.genre}
          </a> */}
        </>
      );
      break;
    case "modified-date":
      iconDisplay = (
        <>
          <div className="nb-item__focus">
            <RiBook2Fill className="color-bronze" /> Ch. {props.chapter}
          </div>
          {/* <a className="nb-item__category" href="/">
            {props.genre}
          </a> */}
        </>
      );
      break;
    case "view":
      iconDisplay = (
        <>
          <div className="nb-item__focus">
            <RiEyeLine /> {props.view}
          </div>
          {/* <a className="nb-item__category" href="/">
            {props.genre}
          </a> */}
        </>
      );
      break;
    case "status":
      iconDisplay = (
        <>
          <div className="nb-item__focus">
            <RiCheckboxCircleFill className="color-dodgerblue" /> Ch. {props.chapter} /{" "}
            {props.chapter}
          </div>
          {/* <a className="nb-item__category" href="/">
            {props.genre}
          </a> */}
        </>
      );
      break;
    default:
      break;
  }

  return (
    <>
      <div className="nb-item">
        <Link to={props.comicLink}>
          <div className="nb-item__img" style={{ background: `url(${props.thumbnail})` }}></div>
        </Link>

        <div className="nb-item-right">
          <Link className="nb-item__title line-1" to={props.comicLink}>
            {props.name}
          </Link>
          <p className="nb-item__description line-2">{props.description}</p>
          <div className="nb-item-foot">{iconDisplay}</div>
        </div>
      </div>
    </>
  );
}
