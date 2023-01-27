"use strict";

//Funcion de testeo de la practica
function test(){

    //Declaracion de instancias
    let person1 = new Person("Fran","Escribano","Muñoz","January 19, 1998 11:13:00","www.necesitoAprobar.com");
    let person2 = new Person("Pedro","Lopez","Garcia","November 25, 1999 12:13:00","www.apuestaygana.com");
    let person3 = new Person("Javier","Bardem","Monterrey","October 12, 1997 10:13:00","www.lososcar.com");
    let category1 = new Category("Accion", "Categoria dedicada a producciones de accion");
    let resource1 = new Resource(4,"link.com");
    let coordinate1 = new Coordinate(4,10);
    let movie1 = new Movie("Suspenso de Cristal","España", "February 24, 1989 11:13:00","Pelicula fuerte","imagen.link",resource1,coordinate1);
    let serie1 = new Serie("The Walking Dead", "USA","June 24, 1989 11:13:00","Zombies te quieren comer", "imagen2.link",resource1,coordinate1,11);
    let user1 = new User("fran123","francito@gmail.com","4598pascual");
    let user2 = new User("pedro45","pedro45@gmail.com","pedro789");

    //Testeo por consola
    console.log("---------------- TESTEO --------------------- ");
    console.log("--------------------------------------------- ");
    console.log("------------- OBJETO PERSON ----------------- ");
    console.log(person1.toString());

    console.log("------------- OBJETO CATEGORY --------------- ");
    console.log(category1.toString());

    console.log("------------- OBJETO RESOURCE --------------- ");
    console.log(resource1.toString());

    console.log("------------- OBJETO PRODUCTION ------------- ");
    try {
        let production1 = new Production("La Suspendida","España","October 10, 1990 11:13:00","Un alumno en busca de no suspender", "imagen.link");
    } catch (error) {
        console.log(error);
    }

    console.log("------------- OBJETO MOVIE --------------- ");
    console.log(movie1.toString());

    console.log("------------- OBJETO SERIE --------------- ");
    console.log(serie1.toString());

    console.log("------------- OBJETO USER ---------------- ");
    console.log(user1.toString());

    console.log("------------- OBJETO COORDINATE ---------- ");
    console.log(coordinate1.toString());

    console.log("------------- OBJETO VIDEOSYSTEM --------- ");
    let videosystem = Videosystem.getInstance("Videoclub Festa");
    let videosystem2 = Videosystem.getInstance("Videoclub Rioja");
    console.log("Instancias iguales: " ,videosystem === videosystem2);  //true
    console.log("addCategory: " + videosystem.addCategory(category1));  //[0]Accion
    console.log("addUser: " + videosystem.addUser(user1));          //[0]fran123
    console.log("addUser: " + videosystem.addUser(user2));          //[0]fran123 [1]pedro45

    //Iterador de usuarios
    console.log("Getter users: ");
    let getUsersIterator = videosystem.users;
    for(let user of getUsersIterator) console.log(user);

    console.log("removeUser: " + videosystem.removeUser(user1));
    console.log("addActor: " + videosystem.addActor(person1));      //[0]Fran
    console.log("addActor: " + videosystem.addActor(person3));      //[0]Fran [1]Javier

    //Iterador de actores
    console.log("Getter actors: ");
    let getActorsIterator = videosystem.actors;
    for(let actor of getActorsIterator) console.log(actor);

    console.log("removeActor: " + videosystem.removeActor(person1));
    console.log("addDirector: " + videosystem.addDirector(person1));          //[0]Fran
    console.log("addDirector: " + videosystem.addDirector(person2));          //[0]Fran [1]Pedro

    //Iterador de directores
    console.log("Getter directors: ");
    let getDirectorsIterator = videosystem.directors;
    for(let director of getDirectorsIterator) console.log(director);

    console.log("removeDirector: " + videosystem.removeDirector(person1));     //[0]Pedro


    console.log("------------- EXCEPCIONES ---------------- ");
    try {
        //Excepcion de categoria incorrecta
        console.log("addCategory: " + videosystem.addCategory(coordinate1));
    } catch (error) {
        console.log(error);
    }

    try {
        //Excepcion de actor incorrecta
        console.log("addActor: " + videosystem.addActor(coordinate1));
    } catch (error) {
        console.log(error);
    }

    try {
        //Excepcion de director existente en el array
        console.log("addDirector: " + videosystem.addDirector(person2));
    } catch (error) {
        console.log(error);
    }

    try {
        //Excepcion de categoria existente en el array
        console.log("addCategory: " + videosystem.addCategory(category1));
    } catch (error) {
        console.log(error);
    }

    try {
        //Excepcion de usuario no existente
        console.log("removeUser: " + videosystem.removeUser(user1));
    } catch (error) {
        console.log(error);
    }

}

test();