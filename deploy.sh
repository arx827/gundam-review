#!/usr/bin/env sh

# 確保腳本拋出遇到的錯誤
set -e

# 生成靜態文件
npm run docs:build

# 進入生成的文件夾
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果發佈到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/arx827/gundam-review.git master:gh-pages

cd -