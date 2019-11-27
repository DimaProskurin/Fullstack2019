import React from 'react';
import './styles.css';
import {Avatar} from '../../components/main/avatar'
import 'bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux'
import {fetchCategories} from '../../actions/index'
import {getCategoriesFromDB} from "../../utils";
import {Preloader} from "../../components/preloader";


const BACK = 'http://127.0.0.1:8000/';


export class App extends React.Component {

    componentDidMount() {
        if (this.props.categoryList.length === 0) {
            getCategoriesFromDB().then((categories) => this.props.fetchCategories(categories));
        }
    }

    render() {
        if (this.props.categoryList.length !== 0) {
            return (
                <div className="App">
                    <header className="App-header">
                        <br/>
                        <br/>
                        <div className="card-deck">
                            {
                                this.props.categoryList.map((category, index) =>
                                    (<Avatar url={ category.url } imageSrc={ BACK + category.image } title={ category.name }
                                            description={ category.description } key={index}/>))
                            }
                        </div>
                        <br/>
                        <br/>
                    </header>
                </div>
            );
        } else {
            return (
                <Preloader />
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        categoryList: state.fetch.categories
    }
}

const mapDispatchToProps = {
    fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
