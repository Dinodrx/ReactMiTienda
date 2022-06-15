const Item = (prop) => {

    return <>
        <div className="card text-center">
        <div className="card-header">
        {prop.id}
        </div>  
        <div className="card-body">
       
            <span className="material-symbols-outlined">
            laundry
            </span>
            <h5 className="card-title">{prop.title}</h5>   
        </div>
        <a href="#" className="btn btn-primary">Ver detalle del producto</a>
        <div className="card-footer">
        {prop.stock}
        </div>
        </div>
    </>
}


 
export default Item