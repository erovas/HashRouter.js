/*
 * HashRouter.js v1.0.0
 * Pequeña librería para enrutamiento mediante el hash (#)
 * [Back-compatibility: IE11+]
 * Copyright (c) 2021, Emanuel Rojas Vásquez
 * BSD 3-Clause License
 * https://github.com/erovas/HashRouter.js
 */
(function(window, document){

    let NAME = 'HashRouter';
    let ROUTES = new Map();

    if(window[NAME])
        return console.error(NAME + '.js has already been defined');

    //Para obtener detalles del cambio de hash
    function getURLDETAILS(raw){

        let out = {
            url: raw,
            pathName: raw.split('?')[0],
            parameters: {},
        }
        raw.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value){ out.parameters[key] = value; });
        return out;

        /*  EJEMPLO
        {
            url: 'asd/qwerty?nose=3&sise=2&casise=3',
            pathName: 'asd/qwerty',
            parameters: {
                nose: '3',
                sise: '2',
                casise: '3'
            }
        }
        */
    }

    function hashchange(){

        let urldetails = getURLDETAILS(location.hash.substring(1) || '/');

        //Obtener la function que se ejecutará
        let handler = ROUTES.get(urldetails.pathName);

        if(handler)
            handler(urldetails);
        else {
            //Para el resto de rutas NO definidas
            handler = ROUTES.get('*');

            if(handler)
                handler(urldetails);
            else
                console.error('PathName: ' + urldetails.pathName + ' is not defined');
        }
    }

    //Seteo del evento
    window.addEventListener('hashchange', hashchange, false);

    //Ejecución inicial
    if(document.readyState === 'complete')
        setTimeout(hashchange, 100);
    else
        window.addEventListener('load', hashchange, { once: true });

    //Revelado
    window[NAME] = {
        add: function(pathName, callback){
            if(typeof pathName === 'string' && typeof callback === 'function')
                ROUTES.set(pathName, callback);
            else
                console.error('Invalid - pathName or callback ');

            return this;
        },

        remove: function(pathName){
            ROUTES.delete(pathName);
            return this;
        },

        go(pathName){
            location.hash = pathName;
        }
    }

})(window, document);