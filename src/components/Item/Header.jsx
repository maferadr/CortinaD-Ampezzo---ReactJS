
export const Header = ({menu}) =>{
return (
<div>
    <div className="bg-menu pt-3" style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/react-39530-maria.appspot.com/o/chef-cover.jpg?alt=media&token=4ddd8ed4-cd3a-46e4-bd7f-06a0e09091f1)', height: 120}}>
        <h1 className="header-title">{menu}
        </h1>
    </div>
</div>
)
}

