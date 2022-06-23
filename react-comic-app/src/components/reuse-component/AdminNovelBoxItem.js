import React from "react";
import "../../css/novelboxitem.css";
import { RiThumbUpFill } from "react-icons/ri";

export default function AdminNovelBoxItem(props) {
  let focusDisplay = (
    <>
      <div className="nb-item__focus">
        <RiThumbUpFill className="color-dodgerblue" /> {props.info.Like}
      </div>
    </>
  );

  return (
    <>
      <div className="nb-item">
        <div>
          <div className="nb-item__img" style={{ background: `url(${props.info.Thumbnail})` }}></div>
        </div>

        <div className="nb-item-right">
          <div onClick={props.clickItem} className="nb-item__title line-1">
            {props.info.ComicName}
          </div>
          <p className="nb-item__description line-2">{props.info.Description}</p>
          <div className="nb-item-foot">{focusDisplay}</div>
        </div>
      </div>
    </>
  );
}
