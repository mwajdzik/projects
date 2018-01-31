
http://localhost:8080/api/v1/recipes

http://localhost:8080/actuator
http://localhost:8080/actuator/health
http://localhost:8080/actuator/info

http://localhost:8080/swagger-ui.html
http://localhost:8080/v2/api-docs


ionic cordova build android --prod --release

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/Google\ Drive/IT/my-release-key.jks /Users/sg0218817/Private/Projects/MiksiuPro/mobile/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk  my-alias

~/Library/Android/sdk/build-tools/27.0.3/zipalign -f -v 4 /Users/sg0218817/Private/Projects/MiksiuPro/mobile/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ~/Google\ Drive/Apps/MiksiuPro.apk
