# QuoteGenerator
A webpage that will generate a new quote with each new visit (hopefully).

Pages site: 'https://jacob-willis.github.io/QuoteGenerator/'

How to rebuild the pages site locally: (May not need to do this after initial build, but this is here for future reference, it may just update when master branch is updated)

1. CD into 'ClientApp'
2. git checkout -b gh-pages
3. npm install -g angular-cli-ghpages
4. ng build --prod --base-href https://[username].github.io/[repo]/
5. ngh --dir=dist/[project-name]
6. ng build — prod (This can be used instead of step 4 after you already define the --base-href flag)

`https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4#:~:text=%20Method%202%20%201%20Step%201.%20The,has%20successfully%20been%20published%20on%20gh-pages.%20More%20`
