package org.am061.project.miksiu.controller;

import org.am061.project.miksiu.model.Recipe;
import org.am061.project.miksiu.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.TEXT_EVENT_STREAM_VALUE;
import static org.springframework.http.ResponseEntity.notFound;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping("/recipes")
    public Flux<Recipe> getAllRecipes() {
        return recipeRepository.findRecipesShallow();
    }

    @PostMapping("/recipes")
    public Mono<Recipe> createRecipe(@Valid @RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @GetMapping("/recipes/{id}")
    public Mono<ResponseEntity<Recipe>> getRecipeById(@PathVariable(value = "id") String id) {
        return recipeRepository.findById(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(notFound().build());
    }

    @PutMapping("/recipes/{id}")
    public Mono<ResponseEntity<Recipe>> updateRecipe(@PathVariable(value = "id") String id, @Valid @RequestBody Recipe recipe) {
        return recipeRepository.findById(id)
                .flatMap(existingRecipe -> {
                    existingRecipe.setName(recipe.getName());
                    return recipeRepository.save(existingRecipe);
                })
                .map(updatedRecipe -> new ResponseEntity<>(updatedRecipe, OK))
                .defaultIfEmpty(new ResponseEntity<>(NOT_FOUND));
    }

    @DeleteMapping("/recipes/{id}")
    public Mono<Void> deleteRecipe(@PathVariable(value = "id") String id) {
        return recipeRepository.deleteById(id);
    }

    @GetMapping(value = "/stream/recipes", produces = TEXT_EVENT_STREAM_VALUE)
    public Flux<Recipe> streamAllRecipes() {
        return recipeRepository.findAll();
    }
}