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

rm -rf src/static
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


# icons - splash
splash va en res/screen/android/splash.png
splash va en res/splash.png

http://labs.rampinteractive.co.uk/android_dp_px_calculator/

ldpi (0.75x)	@ 280.00dp	= 210.00px
mdpi (1x)	@ 280.00dp	= 280.00px
hdpi (1.5x)	@ 280.00dp	= 420.00px
xhdpi (2x)	@ 280.00dp	= 560.00px
xxhdpi (3x)	@ 280.00dp	= 840.00px
xxxhdpi (4x)	@ 280.00dp	= 1120.00px


https://convertio.co/jpeg-svg/

PERO AHI LEI 
https://developer.android.com/reference/android/graphics/drawable/AnimatedVectorDrawable

https://developer.android.com/develop/ui/views/launch/splash-screen#splash_screen_dimensions
Format: the icon must be an AnimatedVectorDrawable (AVD) XML.

png -> svg  https://www.autotracer.org/
svg -> avd https://svg2vector.com/

https://developer.android.com/studio/write/vector-asset-studio#svg
/home/ohroot/AndroidStudioProjects/MyApplication3/app/src/main/res/drawable


/home/ohroot/Desktop/projects/ReactCordova/platforms/android/app/src/main/res/

https://www.npmjs.com/package/cordova-res
cordova-res android

cp -r res resources
cordova-res  android 

cordova-res  android --resources res


https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-splashscreen/index.html
cordova plugin add cordova-plugin-splashscreen

 <preference name = "SplashScreen" value = "screen" />
    <preference name = "SplashMaintainAspectRatio" value = "true" />
    

0.75x — low-density (ldpi)
1.0x — medium-density (mdpi)
1.5x — high-density (hdpi)
2.0x — extra-high-density (xdpi)
3.0x — extra-extra-high-density (xxhdpi)
4.0x — extra-extra-extra-high-density (xxxhdpi)

ldpi — ~120dpi
mdpi — ~160dpi
hdpi — ~240dpi
xhdpi — ~320dpi
xxhdpi — ~480dpi
xxxhdpi — ~640dpi


/home/ohroot/Desktop/projects/ReactCordova/platforms/android/app/build/outputs/apk/debug/app-debug.apk
