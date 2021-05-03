import React from "react";

const Recipe = (props) => {
    const {recipe} = props;
    return (
       <div class="row">
           {recipe.map(recipe => (
               <div class="col-md-3">
                   <div class="card py-2 px-2">
                        <img src={recipe.recipe.image} class="img-fluid rounded-circle" />
                        <div class="card-body">
                            <h5>{recipe.recipe.label}</h5>
                        </div>
                        {/* <ul>
                            {recipe.recipe.ingredientLines.map(ingredient => <l1>{ingredient}</l1>)}
                        </ul> */}
                   </div>
               </div>
           ))}
       </div>
    )
}

export default Recipe;