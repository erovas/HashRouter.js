# HashRouter.js
Simple JavaScript library for routing through hashes.

## Compatibility

For internet explorer 11 or higher.

## How to use?

Import HashRouter.js JavaScript library wherever you want into the document before using it.

``` html
<script src="HashRouter.min.js"></script>
<script>
   HashRouter
    .add("/", function(details){  //Set home page
      alert("home");
    })
    .add("*", function(details){  //Set rest of pages
      alert("404 page not found");
      HashRouter.go("" || "/"); //go to home
    })
    .add("/about", function(details){
      alert("ABOUT");
      console.log(details);
    });
    .add("/remove_About", function(details){
      HashRouter.remove("/about"); //remove "/about" route
      console.log(details);
    })
    .add("about", function(details){  //this path is different to "/about"
      alert("about 2"); 
      console.log(details);
    });
</script>
```

or

``` html
<script defer src="HashRouter.min.js"></script>
<script defer src="otherScript.js"></script>
```

or

``` html
<script type="module" src="HashRouter.min.js"></script>
<script type="module" src="otherScript.js"></script>
```

or

``` html
<script type="module">
    import "HashRouter.min.js";
    
    HashRouter
    .add("/", function(details){  //Set home page
      alert("home");
    })
    .add("*", function(details){  //Set rest of pages
      alert("404 page not found");
      HashRouter.go("" || "/"); //go to home
    })
    .add("/about", function(details){  //Set rest of pages
      alert("ABOUT");
      console.log(details);
    });
    .add("/remove_About", function(details){
      HashRouter.remove("/about"); //remove "/about" route
      console.log(details);
    })
    .add("about", function(details){  //this path is different to "/about"
      alert("about 2"); 
      console.log(details);
    });
</script>
```

where "details" is:

``` javascript
let details = {
            url: "asd/qwerty?nose=3&sise=2&casise=3",
            pathName: "asd/qwerty",
            parameters: {
                nose: "3",
                sise: "2",
                casise: "3"
            }
        };
```

EXAMPLE:
``` html
<html>
  <head>
    <script defer src="HashRouter.min.js"></script>
    <script>
      HashRouter
        .add("*", function(details){
          console.log(details);
        })
    </script>
  </head>
  <body>
    <a href="#/">Home</a>
    <a href="#">Home</a>
    <!-- this anchor reloads the page -->
    <a href="">Home</a>
    
    <a href="#/about">About 1</a>

    <a href="#/about?param1=123&param2=sparta">About 1</a>
    
    <a href="#about">About 2</a>
    
  </body>
</html>

<script defer src="otherScript.js"></script>
```

## Demo

TODO

## Authors

* **Emanuel Rojas Vásquez** - *Initial work* - [erovas](https://github.com/erovas)

## License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](https://github.com/erovas/HashRouter.js/blob/main/LICENSE) file for details.

# Spanish - Español

# HashRouter.js
Libreria simple JavaScript para enrutamiento a traves de hashes.

## Compatibilidad

Para internet explorer 11 o superior.

## ¿Cómo utilizarlo?

Importar la libreria JavaScript HashRouter.js en cualquier lugar que quieras dentro del documento antes de usarlo.

``` html
<script src="HashRouter.min.js"></script>
<script>
   HashRouter
    .add("/", function(details){  //Establecer home page
      alert("home");
    })
    .add("*", function(details){  //Establecer el resto de paginas
      alert("404 page not found");
      HashRouter.go("" || "/"); //go to home
    })
    .add("/about", function(details){
      alert("ABOUT");
      console.log(details);
    });
    .add("/remove_About", function(details){
      HashRouter.remove("/about"); //remove "/about" route
      console.log(details);
    })
    .add("about", function(details){  //this path is different to "/about"
      alert("about 2"); 
      console.log(details);
    });
</script>
```

o

``` html
<script defer src="HashRouter.min.js"></script>
<script defer src="otherScript.js"></script>
```

o

``` html
<script type="module" src="HashRouter.min.js"></script>
<script type="module" src="otherScript.js"></script>
```

o

``` html
<script type="module">
    import "HashRouter.min.js";
    
    HashRouter
    .add("/", function(details){  //Set home page
      alert("home");
    })
    .add("*", function(details){  //Set rest of pages
      alert("404 page not found");
      HashRouter.go("" || "/"); //go to home
    })
    .add("/about", function(details){  //Set rest of pages
      alert("ABOUT");
      console.log(details);
    });
    .add("/remove_About", function(details){
      HashRouter.remove("/about"); //remove "/about" route
      console.log(details);
    })
    .add("about", function(details){  //this path is different to "/about"
      alert("about 2"); 
      console.log(details);
    });
</script>
```

donde "details" es:

``` javascript
let details = {
            url: "asd/qwerty?nose=3&sise=2&casise=3",
            pathName: "asd/qwerty",
            parameters: {
                nose: "3",
                sise: "2",
                casise: "3"
            }
        };
```

EJEMPLO:
``` html
<html>
  <head>
    <script defer src="HashRouter.min.js"></script>
    <script>
      HashRouter
        .add("*", function(details){
          console.log(details);
        })
    </script>
  </head>
  <body>
    <a href="#/">Home</a>
    <a href="#">Home</a>
    <!-- this anchor reloads the page -->
    <a href="">Home</a>
    
    <a href="#/about">About 1</a>

    <a href="#/about?param1=123&param2=sparta">About 1</a>
    
    <a href="#about">About 2</a>
    
  </body>
</html>

<script defer src="otherScript.js"></script>
```

## Demo

TODO

## Autores

* **Emanuel Rojas Vásquez** - *Initial work* - [erovas](https://github.com/erovas)

## Licencia

Este proyecto está licenciado bajo Licencia BSD 3-Clause - ver el archivo [LICENCIA](https://github.com/erovas/HashRouter.js/blob/main/LICENSE) para mas detalles.
