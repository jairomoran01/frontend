// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './HomePage.css'; // Crea este archivo para estilos básicos

function HomePage() {
    const { isAuthenticated, user } = useAuth();

    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>¡Bienvenido al Gimnasio Virtual con Big Sam!</h1>
                <p>Tu asistente de IA listo para ayudarte a reventar tus límites.</p>
            </header>
            
            <main className="homepage-content">
                {isAuthenticated && user ? (
                    <div className="user-welcome">
                        <h2>¡Qué onda, {user.username}!</h2>
                        <p>Big Sam te está esperando para tu próxima rutina.</p>
                        <Link to="/chat" className="homepage-button primary">
                            Ir al Chat con Big Sam
                        </Link>
                    </div>
                ) : (
                    <div className="guest-welcome">
                        <h2>¿Listo para empezar?</h2>
                        <p>Únete a nuestra comunidad y obtén la ayuda de Big Sam para tus entrenamientos.</p>
                        <div className="homepage-actions">
                            <Link to="/login" className="homepage-button primary">
                                Iniciar Sesión
                            </Link>
                            <Link to="/register" className="homepage-button secondary">
                                Registrarse
                            </Link>
                        </div>
                    </div>
                )}
            </main>

            <footer className="homepage-footer">
                <p>&copy; {new Date().getFullYear()} Gimnasio Big Sam. ¡A darle con todo!</p>
            </footer>
        </div>
    );
}

export default HomePage;