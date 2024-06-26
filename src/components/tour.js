const Tour = ({name, date, img, info, location, duration, price }) => {
  return (
    <article className ="tour-card"  >
          <div className ="tour-img-container">
            <img src = {img} className ="tour-img" alt={name} />
            <p className ="tour-date">{date}</p>
          </div>
          <div className ="tour-info">
            <div className ="tour-title">
              <h4>{name}</h4>
            </div>
            <p>{info}</p>
            <div className ="tour-footer">
              <p>
                <span><i className ="fas fa-map"></i></span>{location}
              </p>
              <p>{duration}</p>
              <p>from ${price} </p>
            </div>
          </div>
        </article>
  )


}

export default Tour