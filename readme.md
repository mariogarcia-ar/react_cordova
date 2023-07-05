# Tutorial
https://blog.devgenius.io/convert-your-react-application-to-an-andriod-ios-app-using-cordova-87646729c2b7

```bash
npx create-react-app pure-react
npm start 

cd ..

cordova create ReactCordova
cd ReactCordova/
# add package.json from react to cordova 
# add <hook type="before_prepare" src="scripts/prebuild.js"/> to config.xml

npm install 

npm install --save fs-extra
cordova platform remove android && cordova platform add android 
cordova run android
```

# Run

```bash
npm install 
cordova platform remove android && cordova platform add android

cordova run android
```