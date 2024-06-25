import Title from "./title"
import { tours } from "../data"
import Tour from "./tour"

const Tours = () => {
  return (
    <section className ="section" id="tours">
      <Title title = 'featured' subTitle='tours'/>
      

      <div className ="section-center featured-center">
      {tours.map((tour)=>{
       return <Tour key = {tour.id} {...tour}></Tour>
       
      })}



       
      </div>
    </section>
  )
}

export default Tours