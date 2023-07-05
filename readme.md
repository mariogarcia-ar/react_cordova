# Migration CRA to Vite
https://www.asserts.ai/blog/migrataion-react-cra-vitejs/

https://github.com/facebook/create-react-app/issues/10022

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

# integration
- una vez creado la interacion base
- copiamos del proyecto tablet src y public 
- ahora hay que corregi

mkdir src/static
cp -r public/fonts src/static/
cp -r public/img src/static/
cp -r public/pages src/static/
cp -r public/stations src/static/

// corregir los ccs imagens

buscar  dentro de src
    url('
cambiar
    url('./static

url\((.+)\)
url('$1')

url\(('')(.+)('')\)
url('$2')

url('/
url('./static/

// corregirlos otros por nivel 
../../../static

// correr el error de 
url: _geturl('action'),
url: _geturl(action),

npm install
npm start


// run android
rm -rf platforms && cordova platform add android
cordova run android