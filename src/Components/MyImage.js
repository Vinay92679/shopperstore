import { useState } from "react";
import "./Common.css"

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImg, setMainImg] = useState(imgs[0]);

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center gap-3">
          <div className="col-md-3 d-flex flex-md-column gap-3 gap-md-0 p-0">
            {imgs.map((items, index) => {
              return (
                <figure key={index}>
                  <img
                    src={items.url}
                    alt={items.filename}
                    className="box_image_style"
                    onClick={()=>setMainImg(items)}
                  />
                </figure>
              );
            })}
          </div>
          <div className="col-md-8 p-0">
            <img src={mainImg.url} className="box_image_style" />
          </div>
        </div>
      </div>
    </>
  );
};
export default MyImage;
