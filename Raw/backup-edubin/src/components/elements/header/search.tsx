export default function Search() {
    return (
<div className="search-box">
<div className="search-form">
    <div className="closebtn">
        <span></span>
        <span></span>
    </div>
    <form action="#">
        <input type="text" placeholder="Search by keyword"/>
        <button><i className="fa fa-search"></i></button>
    </form>
</div> 
</div>
    )
}