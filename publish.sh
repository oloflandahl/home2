#!/bin/sh
git add . && git commit -a -m "Publish" && git push && git subtree push --prefix dist origin gh-pages