import React from 'react'


const Header = (props) => {
    const {search, onInputChange, onSearchClick} = props;
    return (
        <div className="jumbotron">
        <h1 className="display-3"><span class="material-icons brandicon">fastfood</span>Fast Food</h1>

        <div class="input-group w-50 mx-auto" >
            <input 
            type="text" 
            class="form-control" 
            placeholder="Search Food Iteams...."
            value={search}
            onChange={onInputChange}
            onSearchClick = {onSearchClick}
            />
            <div class="input-group-append">
                <button class="btn btn-success"  onClick={onSearchClick}>Search Food Iteam</button>
            </div>
        </div>
        </div>

        
    )
}


export default Header;