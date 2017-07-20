start /wait ng build
start /wait git add .
start /wait git commit -a -m "Publish"
start /wait git push
start /wait git subtree push --prefix dist origin gh-pages