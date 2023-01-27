"use strict";

//Hacemos una excepcion que sirva como base para todas las demas personalizadas
class BaseException extends Error {
    constructor (message="", fileName, lineNumber){
        super(message, fileName, lineNumber);
        this.name = "BaseException";
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, BaseException)
        }
    }
}

//Excepcion para valores vacios
class EmptyValueException extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The parameter can't be empty.", fileName, lineNumber);
        this.name = "EmptyValueException";
    }
}

//Excepcion para clases abstractas
class AbstractClassException extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The class can't be instantiated.", fileName, lineNumber);
        this.name = "AbstractClassException";
    }
}

//Excepcion para clases incorrectas de Categoria
class IncorrectClassExceptionC extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The class is incorrect, needs a Category class", fileName, lineNumber);
        this.name = "IncorrectClassExceptionC";
    }
}

//Excepcion para clases incorrectas de User
class IncorrectClassExceptionU extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The class is incorrect, needs a User class", fileName, lineNumber);
        this.name = "IncorrectClassExceptionU";
    }
}

//Excepcion para clases incorrectas de Production
class IncorrectClassExceptionP extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The class is incorrect, needs a Production class", fileName, lineNumber);
        this.name = "IncorrectClassExceptionP";
    }
}

//Excepcion para clases incorrectas de Person
class IncorrectClassExceptionPS extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The class is incorrect, needs a Person class", fileName, lineNumber);
        this.name = "IncorrectClassExceptionPS";
    }
}

//Excepcion para cuando una categoria ya exista en el array
class CategoryExistsException extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The category class is already on array", fileName, lineNumber);
        this.name = "CategoryExistsException";
    }
}

//Excepcion para cuando una produccion ya exista en el array
class ProductionExistsException extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The production class is already on array", fileName, lineNumber);
        this.name = "ProductionExistsException";
    }
}

//Excepcion para cuando un actor ya exista en el array
class ActorExistsException extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The actor is already on array", fileName, lineNumber);
        this.name = "ActorExistsException";
    }
}

//Excepcion para cuando un director ya exista en el array
class DirectorExistsException extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The director is already on array", fileName, lineNumber);
        this.name = "DirectorExistsException";
    }
}


//Excepcion para cuando un usuario ya exista en el array
class UserNotExistsException extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The user is not on array", fileName, lineNumber);
        this.name = "UserNotExistsException";
    }
}

//Excepcion para cuando un actor ya exista en el array
class ActorNotExistsException extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The actor is not on array", fileName, lineNumber);
        this.name = "ActorNotExistsException";
    }
}

//Excepcion para cuando un director ya exista en el array
class DirectorNotExistsException extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The director is not on array", fileName, lineNumber);
        this.name = "DirectorNotExistsException";
    }
}