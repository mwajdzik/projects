package org.am061.project.miksiu.repository;

import org.am061.project.miksiu.model.Recipe;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface RecipeRepository extends ReactiveMongoRepository<Recipe, String> {

    @Query(value = "{}", fields = "{ '_id' : 1, 'name' : 1, 'difficulty': 1, 'priceLevel': 1}")
    Flux<Recipe> findRecipesShallow();
}
