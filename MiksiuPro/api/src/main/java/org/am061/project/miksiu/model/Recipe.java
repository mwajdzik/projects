package org.am061.project.miksiu.model;

import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "recipe")
@ToString(of = {"id", "name"})
public class Recipe {

    @Id
    private String id;
    private String name;
    private String difficulty;
    private String priceLevel;
    private Category primaryCategory;
    private Portion portion;
    private Time[] times;
    private ImageSlot[] imageSlots;
    private AdditionalInformation[] additionalInformations;
    private RecipeStepGroup[] recipeStepGroups;
    private RecipeIngredientGroup[] recipeIngredientGroups;
}
