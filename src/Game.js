import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <h1 className="main-title">
                        R O C K <span className="span">P A P E R </span>S C I S S O R S
                    </h1>
                </header>
                <div className="main-body">
                    <div className="first">
                        <h1 className="vs">A I<span className="spanVs"> V S </span>H U M A N</h1>
                    </div>
                    <MainBody />
                </div>
                <footer className="footer">
                    <p>&copy; copyright &mdash; Programmer Usman - Tuesday, July 17, 2018</p>
                </footer>
            </div>
        );
    }
}

class MainBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            win: '',
            ai: ''
        };
        this.scissors = this.scissors.bind(this);
        this.paper = this.paper.bind(this);
        this.rock = this.rock.bind(this);
    }

    scissors() {
        let player = 'scissors';
        let ai = this.compPlaying();
        if (player === 'scissors' && ai === 'scissors') {
            this.setState({
                win: "DRAW",
                ai: 'SCISSORS'
            })
        } else if (ai === 'paper') {
            this.setState({
                win: "H U M A N",
                ai: 'PAPER'
            })
        } else {
            this.setState({
                win: 'A I',
                ai: 'ROCK'
            })
        }
        console.log(ai);
    }

    paper() {
        let player = 'paper';
        let ai = this.compPlaying();
        if (player === 'paper' && ai === 'paper') {
            this.setState({
                win: "DRAW",
                ai: 'PAPER'
            })
        } else if(ai === 'rock') {
            this.setState({
                win: "H U M A N",
                ai: 'ROCK'
            })
        } else {
            this.setState({
                win: 'A I',
                ai: 'SCISSORS'
            })
        }
        console.log(ai);
    }

    rock() {
        let player = 'rock';
        let ai = this.compPlaying();
        if (player === 'rock' && ai === 'rock') {
            this.setState({
                win: "DRAW",
                ai: 'ROCK'
            })
        } else if(ai === 'scissors') {
            this.setState({
                win: "H U M A N",
                ai: 'SCISSORS'
            })
        } else {
            this.setState({
                win: 'A I',
                ai: 'PAPER'
            })
        }
        console.log(ai);
    }

    compPlaying() {
        let game = '';
        let random = Math.floor(Math.random() * 3);
        switch(random) {
            case 0:
                game = 'rock';
                break;
            case 1:
                game = 'paper';
                break;
            case 2:
                game = 'scissors';
                break;
            default:
                console.log('something is wrong!');
                break;
        }
        return game;
    }

    render() {
        return (
            <div>
            <div className="main-content">
                        <div className="ai">
                            <p>AI CHOOSE {this.state.ai}</p>
                        </div>
                        <div>
                            <button onClick={this.scissors} className="btn">SCISSORS</button>
                            <button onClick={this.paper} className="btn">PAPER</button>
                            <button onClick={this.rock} className="btn">ROCK</button>
                            <br/>
                            <br/>
                        </div>
                        <div className="winner">
                            <p className="wPara">{this.state.win}<span className="span2"> S</span><span className="span">W I N S</span></p>
                        </div>
                    </div>
            </div>           
        );
    }
}

export default Game;