import { Ingredient } from "src/app/shared/ingredient.model";
import * as shoppingListAction from "./shopping-list.actions";

const initialState = {
    ingredients :[
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]}

export function shoppingListReducer(state = initialState,action : shoppingListAction.AddIngredient) {
    switch (action.type) {
        case shoppingListAction.ADD_INGREDIENT:
            return { ...state,ingredients : [...state.ingredients,action.payload]};
        default:
            return state;
    }    
}