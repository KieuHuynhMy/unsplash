import React from "react";

const ImageList = (props) => {
  console.log(props.images);
  return props.images.map(({id, urls, description}) => {
    return (
      <div className="image-list" key={id}>
        <img src={urls.regular} alt={description} />
      </div>
    );
  });
};

export default ImageList;
