import React, {Component} from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import FilterAndList from "../../components/filterAndList";
import ShowLocation from "../../components/showLocation";
import BasicForm from "../../components/basicForm";
import EmptyBox from "../../components/emptyBox";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Split from 'react-split'

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    state = {};

    componentDidMount() {

    }


    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (
            <div className='home-page'>
                <Header>

                </Header>
                <div className='container'>
                    <Split
                        className='split'
                        direction='vertical'
                        sizes={[65, 32]}
                    >
                        <Split
                            className='split'
                            direction='horizontal'
                            sizes={[63, 33]}
                        >
                            <FilterAndList/>
                            <ShowLocation/>
                        </Split>
                        <Split
                            className='split'
                            direction='horizontal'
                            sizes={[63, 33]}
                        >
                            <BasicForm/>
                            <EmptyBox/>
                        </Split>


                    </Split>


                </div>
                <Footer/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
