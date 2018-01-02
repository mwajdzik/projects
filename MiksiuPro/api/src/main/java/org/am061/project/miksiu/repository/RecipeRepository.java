package org.am061.project.miksiu.repository;

import org.am061.project.miksiu.model.Recipe;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends ReactiveMongoRepository<Recipe, String> {
}
