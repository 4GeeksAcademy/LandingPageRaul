import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Card from "./Card";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Jumbotron />
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card
                            title="Pelusa"
                            imageUrl="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=500&h=325&fit=crop"
                            description="Es muy juguetón y siempre busca atención."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card
                            title="Garfield"
                            imageUrl="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=500&h=325&fit=crop"
                            description="Experto en siestas de 18 horas y catador profesional de lasaña."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card
                            title="Luna"
                            imageUrl="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
                            description="Elegante y misteriosa. Le gusta mirar por la ventana durante horas."
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card
                            title="Simba"
                            imageUrl="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=500&h=325&fit=crop"
                            description="Un aventurero intrépido. No hay estantería lo suficientemente alta."
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;