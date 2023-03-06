

export const HomeDetail = ({img}) =>{
return (
<div>
<div className="card-cover card mb-3 cardProducto shadow-sm">
<img className="bd-placeholder-img card-img-top" 
    width="60%"
    height={300}
    src={`../img/${img.cardCover}`}
>
</img>

</div>
</div>
)
}