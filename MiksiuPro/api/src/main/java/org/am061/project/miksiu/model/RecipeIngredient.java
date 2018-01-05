package org.am061.project.miksiu.model;

import lombok.Data;

@Data
public class RecipeIngredient {

    private String notation;
    private String preparation;
    private Quantity quantity;
    private RecipeIngredientUnit[] recipeIngredientUnits;
}
