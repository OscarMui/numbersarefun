# Numbers Are Fun

SITE HOSTED ON: [https://numbersarefun.netlify.com/](https://numbersarefun.netlify.com/)
ORIGINAL SITE: ([https://oscarmui1127.wixsite.com/numbersarefun/]https://numbersarefun.netlify.com/)

This is a remix of my math project in form 2, using new techniques and real code instead of wix

## Development Details
This project builds a simple static site, with only static assets, you can host it on any http server you want.

Except it's not that old school, it uses [Gulp](http://gulpjs.com/) to manage the dev env and dist build, uses [Pug](https://pugjs.org/api/getting-started.html) for html templating, [LESS](http://lesscss.org/) for CSS, and capable of [compiling ES7](https://babeljs.io/docs/plugins/preset-es2017/) to Javascript, too. In production mode (dist build), assets are bundled, minified, and revved to speed up loading and allow usage of server cache.

Please note that [jQuery slim](http://jquery.com/download/) is included, AJAX and animation features are trimmed in favor of CSS animations and Fetch. I also included the [Fetch Polypill](https://github.com/github/fetch) to help managing AJAX calls.

Lastly, [BootstrapV4](https://v4-alpha.getbootstrap.com/) is included for css scaffolding.