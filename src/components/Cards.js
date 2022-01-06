import React, { Component } from 'react';
import axios from 'axios';
import('./Cards.css');

class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="#">
                                <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" alt="Logo"></img>
                            </a>
                            <div class="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <a class="navbar-item is-active">
                                    Home
                                </a>
                                <a class="navbar-item">
                                    Examples
                                </a>
                                <a class="navbar-item">
                                    Features
                                </a>
                                <a class="navbar-item">
                                    Team
                                </a>
                                <a class="navbar-item">
                                    Archives
                                </a>
                                <a class="navbar-item">
                                    Help
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="container">
                    <div class="section">
                        <div class="columns">
                            <div class="column has-text-centered">
                                <h1 class="title" style="color: ghostwhite;">Bulma Card Layout Template</h1><br></br>
                            </div>
                        </div>
                        <div id="app" class="row columns is-multiline">
                            <div v-for="card in cardData" key="card.id" class="column is-4">
                                <div class="card-large">
                                    <div class="card-image">
                                        <figure class="image is-16by9">
                                            <img src="card.image" alt="Image"></img>
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image is-48x48">
                                                    <img src="card.avatar" alt="Image"></img>
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <p class="title is-4 no-padding">{ card.user.title }</p>
                                                <p>
                                                    <span class="title is-6">
                                                        <a href="http://twitter.com/${card.user.handle}"> { card.user.handle } </a> </span> </p>
                                                <p class="subtitle is-6">{ card.user.title }</p>
                                            </div>
                                        </div>
                                        <div class="content">
                                            { card.content }
                                            <div class="background-icon"><span class="icon-twitter"></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="container">
                        <div class="content has-text-centered">
                            <div class="soc">
                                <a href="#"><i class="fa fa-github-alt fa-lg" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-youtube fa-lg" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                            </div>
                            <p>
                                <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>.
                                The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. <br></br>
                            </p>
                        </div>
                    </div>
                </footer>
                <script src="../js/cardsData.js"></script>
            </div>
        );
    };
};

export default Cards;