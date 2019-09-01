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

    state = {
        positionOfMid:'65 , 32',
        positionOfTop: '63 , 33',
        positionOfBottom: '63 , 33'
    };

    componentDidMount() {

    }


    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    onSizeChangedMid(e) {
        console.log(e);
        this.setState({
            positionOfMid: ''+ e[0] + ' , ' + e[1]
        })
    }
    onSizeChangedTop(e) {
        console.log(e);
        this.setState({
            positionOfTop: ''+ e[0] + ' , ' + e[1]
        })
    }
    onSizeChangedBottom(e) {
        console.log(e);
        this.setState({
            positionOfBottom: ''+ e[0] + ' , ' + e[1]
        })
    }

    render() {
        const {positionOfTop , positionOfMid, positionOfBottom} = this.state;
        return (
            <div className='home-page'>
                <Header>

                </Header>
                <div className='container'>
                    <Split
                        className='split'
                        direction='vertical'
                        sizes={[65, 32]}
                        onDragEnd={this.onSizeChangedMid.bind(this)}
                        minSize={[282, 200]}

                    >
                        <Split
                            className='split'
                            direction='horizontal'
                            sizes={[63, 33]}
                            onDragEnd={this.onSizeChangedTop.bind(this)}
                        >
                            <FilterAndList/>
                            <ShowLocation positions={[positionOfTop,positionOfMid,positionOfBottom]}/>
                        </Split>
                        <Split
                            className='split'
                            direction='horizontal'
                            sizes={[63, 33]}
                            onDragEnd={this.onSizeChangedBottom.bind(this)}
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
