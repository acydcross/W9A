echo "Example: sh projectStarter.sh myProject https://github.com/acydcross/OkotoksPizzaProject.git";
git clone $2 $1;
cd $1;
touch index.html;
echo "Creating a new project";
echo "Hello World" > index.html;
mkdir css;
cd css;
touch style.scss;
cd ..;
mkdir js;
cd js;
touch app.js;
cd ..;
git add -A;
git commit -m "Created project skeleton";
git push;
echo "All done!";
