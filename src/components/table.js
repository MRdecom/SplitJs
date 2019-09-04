import React from "react";

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
    }

    componentDidMount() {
        this.filterData(this.props.rowsData);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {rowsData, filterData, columns} = this.props;
        if (
            (rowsData !== prevProps.rowsData)
            || (filterData !== prevProps.filterData)
            || (columns !== prevProps.columns)
        ) {

            this.filterData();
        }
    }

    filterData() {
        const rowsData = this.props.rowsData;

        let filteredData = rowsData.filter(dt => {
            return dt.year === +this.props.filterData
        });
        this.setState({
            data: filteredData,
        })
    }

    getHeader (){
        return this.props.columns.map((col)=>{
            return col.checked ? <th key={col.key}>{col.val}</th> : null
        })
    }

    getRowsData(){
        return this.state.data.map((dt, index)=>{
            return <tr key={index}>{this.renderRow(dt)}</tr>
        })
    }

    renderRow(dt) {
        return this.props.columns.map((col)=>{
            return col.checked ? <td key={dt[col.key]}>{dt[col.key]}</td> : null
        })
    }

    render() {
        return (
            <div className='table-container'>
                <table>
                    <thead>
                    <tr>{this.props.columns && this.getHeader()}</tr>
                    </thead>
                    <tbody>
                    {this.state.data && this.getRowsData()}
                    </tbody>
                </table>
            </div>
        );
    }
}