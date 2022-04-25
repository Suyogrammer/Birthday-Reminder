import React from "react";

function List({ data }) {
  return (
    <div>
      {data.map((personInfo) => {
        const { id, name, age, image } = personInfo;
        return (
          <section className="info" key={id}>
            <img src={image} className="image" />
            <span>
              <b className="name">{name}</b> <br />
              <span className="age">{age} years </span>
            </span>
          </section>
        );
      })}
    </div>
  );
}

export default List;
