# routing_app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Running docker command to start the app:

docker build -t dockerize-vuejs-app . 

docker run -it -p 8080:80 --rm --name dockerize-vuejs-app-1 dockerize-vuejs-app
