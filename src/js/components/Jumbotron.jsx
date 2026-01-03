import React from "react";

const Jumbotron = () => {
    return (
        <div className="bg-light p-5 rounded-3 mb-4 mt-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">¡Bienvenidos a la Gatopedia!</h1>
                <p className="col-md-12 fs-4">
                    La guía definitiva sobre los michis más adorables del mundo. Aquí aprenderás sobre sus diferentes personalidades, desde los más dormilones hasta los cazadores de sombras. Explora nuestras fichas y descubre por qué los gatos dominan el internet (y nuestros corazones).                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    ¡Saber más sobre gatos!
                </button>
            </div>
        </div>
    );
}

export default Jumbotron;