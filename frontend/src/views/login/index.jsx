import React from 'react';
import './styles.css';
import {SITE_ADDRESS} from "../../utils";


export class Login extends React.Component {
    render() {
        return(
            <div className="mainContainer text-center">
                <div className="cover-container mx-auto">
                    {this.props.verdict === "whitelist error" ? (
                        <div className="cover">
                            <p className="lead">
                                К сожалению, вы не можете просматривать этот сайт, поскольку не являетесь студентом ФПМИ
                            </p>
                        </div>
                    ) : (
                        <div className="cover">
                            <h1>Привет!</h1>

                            <p className="lead">
                                Этот сайт создан для облегчения использования системы материальной помощи,
                                действующей на Физтех школе прикладной математики и информатики
                            </p>

                            <p className="lead">
                                <a href={SITE_ADDRESS + "/accounts/google/login/?process=login"} className="btn btn-lg btn-secondary">Узнать больше</a>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Login;
