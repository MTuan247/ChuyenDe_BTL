import React from "react";
import "../../css/novelboxitem.css";
import { RiBook2Fill, RiCheckboxCircleFill, RiEyeLine, RiThumbUpFill } from "react-icons/ri";

export default function NovelBoxItem(props) {
  const focus = props.focusState;
  let focusDisplay = "";

  switch (focus) {
    case "suggest":
      focusDisplay = (
        <>
          <div className="nb-item__focus">
            <RiThumbUpFill className="color-dodgerblue" /> {props.states.like}
          </div>
          <a className="nb-item__category" href="/">
            {props.info.genre}
          </a>
        </>
      );
      break;
    case "newest-update":
      focusDisplay = (
        <>
          <div className="nb-item__focus">
            <RiBook2Fill className="color-bronze" /> Ch. {props.states.chapter}
          </div>
          <a className="nb-item__category" href="/">
            {props.info.genre}
          </a>
        </>
      );
      break;
    case "most-view":
      focusDisplay = (
        <>
          <div className="nb-item__focus">
            <RiEyeLine /> {props.states.view}
          </div>
          <a className="nb-item__category" href="/">
            {props.info.genre}
          </a>
        </>
      );
      break;
    case "complete":
      focusDisplay = (
        <>
          <div className="nb-item__focus">
            <RiCheckboxCircleFill className="color-dodgerblue" /> Ch. {props.states.chapter} /{" "}
            {props.states.chapter}
          </div>
          <a className="nb-item__category" href="/">
            {props.info.genre}
          </a>
        </>
      );
      break;
    default:
      break;
  }

  return (
    <>
      <div className="nb-item">
        <a href="/">
          <div className="nb-item__img" style={{ background: `url(${props.info.img})` }}></div>
        </a>

        <div className="nb-item-right">
          <a className="nb-item__title line-1" href="/">
            {props.info.name}
          </a>
          <p className="nb-item__description line-2">{props.info.description}</p>
          <div className="nb-item-foot">{focusDisplay}</div>
        </div>
      </div>
    </>
  );
}
