import React from "react";

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yearFilter: this.props.filterData || '2019'
        };

        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
    }

    componentDidMount() {
        this.setState({
            columns: this.props.columns,
            yearFilter: this.props.filterData
        });
        this.filterData(this.props.rowsData);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {rowsData, filterData, columns} = this.props;
        if (
            (rowsData !== prevProps.rowsData)
            && (filterData !== prevProps.filterData)
            && (columns !== prevProps.columns)
        ) {
            this.filterData(rowsData);
        }
    }

    filterData(rowsData) {

        let filteredData = rowsData.filter(dt => {
            return dt.year === +this.state.yearFilter
        });
        this.setState({
            data: filteredData,
        })
    }

    getHeader (){
        return this.state.columns.map((col)=>{
            return <th key={col.key}>{col.val}</th>
        })
    }

    getRowsData(){
        return this.state.data.map((dt, index)=>{
            return <tr key={index}>{this.renderRow(dt)}</tr>
        })
    }

    renderRow(dt) {
        return this.props.columns.map((col)=>{
            return <td key={dt[col.key]}>{dt[col.key]}</td>
        })
    }

    render() {
        return (
            <div className='table-container'>
                <table>
                    <thead>
                    <tr>{this.state.columns && this.getHeader()}</tr>
                    </thead>
                    <tbody>
                    {this.state.data && this.getRowsData()}
                    </tbody>
                </table>
            </div>
        );
    }
}