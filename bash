git add .
git commit -m "Fix deployment"
git push origin main
rm -rf node_modules package-lock.json
     npm install
     git add package-lock.json
     git commit -m "Update dependencies"
