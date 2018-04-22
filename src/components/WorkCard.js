import React from 'react'

export const WorkCard = ({workId, title, description, images}) => {

  const img = (images && images.length > 0) ? images[0]: null;
  const s = {
    backgroundImage: "url("+img+")"
  };

  return (
    <a href={"#/work/"+workId} className="work-card">

      <div className={"work-card-img" + ((img) ? "" : " __noimage")} style={s}></div>

      <div className="work-card-title_wr">
        <p className="work-card-title">{title}</p>
        <p className="work-card-desc">{description.common}</p>
      </div>
    </a>
  );
}
