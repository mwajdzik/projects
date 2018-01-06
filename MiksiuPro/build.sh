cd ui
ng build --prod --aot
rm ../api/src/main/resources/static/*
cp dist/* ../api/src/main/resources/static

cd ../api
mvn clean install -DskipTests

cd ..
cp api/target/api-0.0.1.jar build