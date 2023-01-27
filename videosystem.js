"use strict";

//Clase Person
class Person {

    #name;
    #lastname1;
    #lastname2;
    #born;
    #picture;

    constructor(name, lastname1, lastname2, born, picture) {

        //Validación de parámetros obligatorios
        if (!name) throw new EmptyValueException();
        if (!lastname1) throw new EmptyValueException();
        if (!born) throw new EmptyValueException();

        //Definicion atributos privados del objeto
        this.#name = name;
        this.#lastname1 = lastname1;
        this.#lastname2 = lastname2;
        this.#born = new Date(born);
        this.#picture = picture;

    }

    //Getter y Setters
    get name() {
        return this.#name;
    }

    set name(value) {
        if (!value) throw new EmptyValueException();
        this.#name = value;
    }

    get lastname1() {
        return this.#lastname1;
    }

    set lastname1(value) {
        if (!value) throw new EmptyValueException();
        this.#lastname1 = value;
    }

    get lastname2() {
        return this.#lastname2;
    }

    set lastname2(value) {
        if (!value) throw new EmptyValueException();
        this.#lastname2 = value;
    }

    get born() {
        return this.#born;
    }

    set born(value) {
        if (!value) throw new EmptyValueException();
        this.#born = value;
    }

    get picture() {
        return this.#picture;
    }

    set picture(value) {
        if (!value) throw new EmptyValueException();
        this.#picture = value;
    }

    //Métodos
    toString() {
        return "Name: " + this.#name + " /Lastname: " + this.#lastname1 + " /Lastname2: " + this.#lastname2 + " /Born: " +
            this.#born + " /Picture: " + this.#picture;
    }

}


//Clase Category
class Category {

    #name;
    #description;

    constructor(name, description) {

        //Validación de parámetros obligatorios
        if (!name) throw new EmptyValueException();

        //Definicion atributos privados del objeto
        this.#name = name;
        this.#description = description;
    }

    //Getters y Setters
    get name() {
        return this.#name;
    }

    set name(value) {
        if (!value) throw new EmptyValueException();
        this.#name = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        if (!value) throw new EmptyValueException();
        this.#description = value;
    }

    //Métodos
    toString() {
        return "Name: " + this.#name + " /Description: " + this.#description;
    }

}


//Clase Resource
class Resource {

    #duration;
    #link;

    //Definicion atributos privados del objeto
    constructor(duration, link) {

        //Validación de parámetros obligatorios
        if (!duration) throw new EmptyValueException();
        if (!link) throw new EmptyValueException();

        this.#duration = duration;
        this.#link = link;
    }

    //Getters y Setters
    get duration() {
        return this.#duration;
    }

    set duration(value) {
        if (!value) throw new EmptyValueException();
        this.#duration = value;
    }

    get link() {
        return this.#link;
    }

    set link(value) {
        if (!value) throw new EmptyValueException();
        this.#link = value;
    }

    //Métodos
    toString() {
        return "Duration: " + this.#duration + " /link: " + this.#link;
    }

}


//Clase Production
class Production {

    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;

    constructor(title, nationality, publication, synopsis, image) {

        //Al ser abstracta controlamos si se intenta instanciar
        if (new.target === Production) {
            throw new AbstractClassException();
        }

        //Validación de parámetros obligatorios
        if (!title) throw new EmptyValueException();
        if (!publication) throw new EmptyValueException();

        //Definicion atributos privados del objeto
        this.#title = title;
        this.#nationality = nationality;
        this.#publication = new Date(publication);
        this.#synopsis = synopsis;
        this.#image = image;
    }

    //Getters y Setters
    get title() {
        return this.#title;
    }

    set title(value) {
        if (!value) throw new EmptyValueException();
        this.#title = value;
    }

    get nationality() {
        return this.#nationality;
    }

    set nationality(value) {
        if (!value) throw new EmptyValueException();
        this.#nationality = value;
    }

    get publication() {
        return this.#publication;
    }

    set publication(value) {
        if (!value) throw new EmptyValueException();
        this.#publication = value;
    }

    get synopsis() {
        return this.#synopsis;
    }

    set synopsis(value) {
        if (!value) throw new EmptyValueException();
        this.#synopsis = value;
    }

    get image() {
        return this.#image;
    }

    set image(value) {
        if (!value) throw new EmptyValueException();
        this.#image = value;
    }

    //Métodos
    toString() {
        return "title: " + this.#title + " /nationality: " + this.#nationality + " /Publication: " + this.#publication
            + " /synopsis: " + this.#synopsis + " /image: " + this.#image;
    }


}


//Clase Movie
class Movie extends Production {

    #resource;
    #coordinate;

    constructor(title, nationality, publication, synopsis, image, resource, coordinate) {

        //Llamada al superconstructor
        super(title, nationality, publication, synopsis, image);
        //Declaracion de atributos privados del objeto
        this.#resource = resource;
        this.#coordinate = coordinate;
    }

    //Métodos
    toString() {
        return super.toString() + " /Resource: " + this.#resource + " /Coordinate: " + this.#coordinate;
    }


}


//Clase Serie
class Serie extends Production {

    #resources;
    #locations;
    #seasons;

    constructor(title, nationality, publication, synopsis, image, resources, locations, seasons) {

        //Llamada al superconstructor
        super(title, nationality, publication, synopsis, image);
        //Declaracion atributos privados del objeto
        this.#resources = resources;
        this.#locations = locations;
        this.#seasons = seasons;
    }

    //Getter y Setters
    get seasons() {
        return this.#seasons;
    }

    set seasons(value) {
        if (!value) throw new EmptyValueException();
        this.#seasons = value;
    }

    //Métodos
    toString() {
        return super.toString() + " /Resource: " + this.#resources + " /Coordinate: " + this.#locations +
            " /Seasons: " + this.#seasons;
    }


}


//Clase User
class User {

    #username;
    #email;
    #password;

    constructor(username, email, password) {

        //Validación de parámetros obligatorios
        if (!username) throw new EmptyValueException();
        if (!email) throw new EmptyValueException();
        if (!password) throw new EmptyValueException();

        //Declaracion de atributos privados del objeto
        this.#username = username;
        this.#email = email;
        this.#password = password;
    }

    //Getter y Setters
    get username() {
        return this.#username;
    }

    set username(value) {
        if (!value) throw new EmptyValueException();
        this.#username = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        if (!value) throw new EmptyValueException();
        this.#email = value;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        if (!value) throw new EmptyValueException();
        this.#password = value;
    }

    //Métodos
    toString() {
        return "username: " + this.#username + " /email: " + this.#email + " /password: " + this.#password;
    }
}


//Clase Coordinate
class Coordinate {

    #latitude;
    #longitude;

    constructor(latitude, longitude) {

        //Declaracion de atributos privados del objeto
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    //Getter y Setters
    get latitude() {
        return this.#latitude;
    }

    set latitude(value) {
        if (!value) throw new EmptyValueException();
        this.#latitude = value;
    }

    get longitude() {
        return this.#longitude;
    }

    set longitude(value) {
        if (!value) throw new EmptyValueException();
        this.#longitude = value;
    }

    //Métodos
    toString() {
        return "Latitude: " + this.#latitude + " /Longitude: " + this.#longitude;
    }

}

//Declaracion objeto Videosystem mediante patron Singleton
let Videosystem = (function () {
    let instantiated;

    //Inicialización del Singleton
    function init(name) {

        class Videosystem {
            //Definicion de atributos privados del objeto
            #name;
            #categories = [];
            #users = [];
            #productions = [];
            #actors = [];
            #directors = [];

            constructor(name) {
                this.#name = name;
            }

            //Getters y Setters
            get name() {
                return this.#name;
            }

            set name(value) {
                if (!value) throw new EmptyValueException();
                this.#name = value;
            }

            //Métodos
            addCategory(category) {

                if (!(category instanceof Category)) {
                    throw new IncorrectClassExceptionC();
                }

                let position = this.getCategoryPosition(category);

                //Si no esta lo metemos
                if (position === -1) {
                    this.#categories.push(category);
                    return this.#categories.length;
                } else {
                    throw new CategoryExistsException();
                }
            }

            //Metodo para devolver la posicion de esa categoria en el array, si no esta es -1
            getCategoryPosition(category) {
                if (!(category instanceof Category)) {
                    throw new IncorrectClassExceptionC();
                }
                return this.#categories.findIndex(x => x.name === category.name);
            }

            //Iterador para categorias
            get categories() {
                let categories = this.#categories;

                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < categories.length; i++) yield categories[i];
                    }
                }
            }

            //Método para añadir un usuario al array
            addUser(user) {

                if (!(user instanceof User)) {
                    throw new IncorrectClassExceptionU();
                }

                this.#users.push(user);
                return this.#users.length;
            }

            //Iterador para usuarios
            get users() {
                let users = this.#users;

                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < users.length; i++) yield users[i];
                    }
                }
            }

            //Metodo para devolver la posicion de esa categoria en el array, si no esta es -1
            getUserPosition(user) {
                if (!(user instanceof User)) {
                    throw new IncorrectClassExceptionU();
                }
                return this.#users.findIndex(x => x.username === user.username);
            }

            //Método para eliminar un usuario del array
            removeUser(user) {

                if (!(user instanceof User)) {
                    throw new IncorrectClassExceptionU();
                }

                let position = this.getUserPosition(user);

                //Si esta en el array eliminamos
                if (position !== -1) {
                    this.#users.splice(position, 1);
                    return this.#users.length;
                } else {
                    throw new UserNotExistsException();
                }
            }

            //Método para añadir una producción
            addProduction(production) {

                if (!(production instanceof Production)) {
                    throw new IncorrectClassExceptionP();
                }

                let position = this.getProductionPosition(production);

                //Si no esta lo metemos
                if (position === -1) {
                    this.#productions.push(production);
                    return this.#productions.length;
                } else {
                    throw new ProductionExistsException();
                }
            }

            //Metodo para devolver la posicion de esa produccion en el array, si no esta es -1
            getProductionPosition(production) {
                if (!(production instanceof Production)) {
                    throw new IncorrectClassExceptionP();
                }
                return this.#productions.findIndex(x => x.title === production.title);
            }

            //Iterador para actores
            get actors() {
                let actors = this.#actors;

                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < actors.length; i++) yield actors[i];
                    }
                }
            }

            //Método que añade un actor al array
            addActor(person) {

                if (!(person instanceof Person)) {
                    throw new IncorrectClassExceptionPS();
                }

                let position = this.getActorPosition(person);

                //Si no esta lo metemos
                if (position === -1) {
                    this.#actors.push(person);
                    return this.#actors.length;
                } else {
                    throw new ActorExistsException();
                }
            }

            //Metodo para devolver la posicion de ese actor en el array, si no esta es -1
            getActorPosition(person) {
                if (!(person instanceof Person)) {
                    throw new IncorrectClassExceptionPS();
                }
                return this.#actors.findIndex(x => x.name === person.name);
            }

            //Método para eliminar un actor del array
            removeActor(person) {

                if (!(person instanceof Person)) {
                    throw new IncorrectClassExceptionPS();
                }

                let position = this.getActorPosition(person);

                //Si esta en el array eliminamos
                if (position !== -1) {
                    this.#actors.splice(position, 1);
                    return this.#actors.length;
                } else {
                    throw new ActorNotExistsException();
                }
            }

            //Método que añade un director al array
            addDirector(person) {

                if (!(person instanceof Person)) {
                    throw new IncorrectClassExceptionPS();
                }

                //Recogemos la posicion del objeto
                let position = this.getDirectorPosition(person);

                //Si no esta lo metemos
                if (position === -1) {
                    this.#directors.push(person);
                    return this.#directors.length;
                } else {
                    throw new DirectorExistsException();
                }
            }

            //Iterador para directores
            get directors() {
                let directors = this.#directors;

                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < directors.length; i++) yield directors[i];
                    }
                }
            }

            //Metodo para devolver la posicion de ese director en el array, si no esta es -1
            getDirectorPosition(person) {
                if (!(person instanceof Person)) {
                    throw new IncorrectClassExceptionPS();
                }
                return this.#directors.findIndex(x => x.name === person.name);
            }

            //Método para eliminar un actor del array
            removeDirector(person) {

                if (!(person instanceof Person)) {
                    throw new IncorrectClassExceptionPS();
                }

                let position = this.getDirectorPosition(person);

                //Si esta en el array eliminamos
                if (position !== -1) {
                    this.#directors.splice(position, 1);
                    return this.#directors.length;
                } else {
                    throw new DirectorNotExistsException();
                }
            }



        }

        //Devolvemos el objeto ShoppingCart para que sea una instancia única.
        let vs = new Videosystem(name);
        Object.freeze(vs);
        return vs;
    }
    return {
        // Devuelve un objeto con el método getInstance
        getInstance: function (name) {
            //Si la variable instantiated es undefined, primera ejecución, ejecuta init.
            if (!instantiated) {
                instantiated = init(name);
            }
            //Si ya está asignado devuelve la asignación.
            return instantiated;
        }
    };


})();