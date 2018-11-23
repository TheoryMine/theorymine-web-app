docker rmi -f theorymine/webapp

rm -fr build/image
rm -fr 'dist'
NODE_ENV='production' npm run build
mkdir -p build/image
mkdir -p build/image/dist
cp -r deploy_scripts/Dockerfile build/image/
cp -r deploy_scripts/nginx.config build/image/
cp -r ./package.json build/image/
cp -r './dist/.' 'build/image/dist'
echo 'latest' >> build/image/version

docker build build/image -t theorymine/webapp


