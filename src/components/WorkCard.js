import React from 'react'

export const WorkCard = ({workId, title, description, images, complexity, featured = false}) => {

  const img = (images && images.length > 0) ? images[0]: '';
  const s = {
    backgroundImage: "url("+img+")"
  };

  return (
    <a href={"#/work/"+workId} className={"work-card " + ((featured) ? '__featured': '')}>

      <div className={"work-card-img" + ((img) ? "" : " __noimage")} style={s}></div>

      <div className="work-card-title_wr">
        <p className="work-card-title">{title}</p>
        <p className="work-card-desc">{(description && description.common) ? description.common: ''}</p>
        {complexity &&
          <div className="star_cnt">
            {[...Array(complexity)].map((e, i) =>
              <span className="star" key={i}></span>
            )}
          </div>
        }
      </div>
    </a>
  );
}
