const Item = ({item}) => {

    return (
   
        // <article classNameName="item">
        //     <h2>{item.title}</h2>
        //     <a href="#1">
        //         <img src = {item.image}></img>
        //     </a>
        // </article>
        <article>
            <div className="card">
            <p className="card-header">{item.title}</p>
            <a href="#1">
                <img src={item.image} className="card-img-top " alt="..."></img>
            </a>
            <div className="card-body">
            
            </div>
            </div>
        </article>
    )   
}


 
export default Item