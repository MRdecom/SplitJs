import React from 'react';
import Table from "./table";

const filterDataObj = [
    {
        id: 1,
        contract: '2019 DFDF',
        offer: '2323',
        data: 'Alış',
        year: 2019
    },
    {
        id: 1,
        contract: '2019 DFDF',
        offer: '2323',
        data: 'Satış',
        year: 2019
    },
    {
        id: 1,
        contract: '2019 DFDF',
        offer: '2323',
        data: 'Alış',
        year: 2019
    },
    {
        id: 1,
        contract: '2018 AAA',
        offer: '2323',
        data: 'Satış',
        year: 2018
    },
    {
        id: 1,
        contract: '2018 BBB',
        offer: '2323',
        data: 'Alış',
        year: 2018
    },
    {
        id: 1,
        contract: '2018 CCC',
        offer: '2323',
        data: 'Satış',
        year: 2018
    },

];

const columnsData = [
    {
        key: 'id',
        val: 'ID',
        checked: true,
    }, {
        key: 'contract',
        val: 'Kontrat',
        checked: true,
    }, {
        key: 'offer',
        val: 'Teklif',
        checked: true,
    }, {
        key: 'data',
        val: 'Data',
        checked: true,
    }];

const selectData = [2019, 2018];

export default class FilterAndList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: filterDataObj,
            columns: columnsData,
            valueYear: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.prepareCheckBox = this.prepareCheckBox.bind(this);
    }

    handleChange(e) {
        this.setState({
            valueYear: e.target.value,
        });
    }

    handleChecked(e) {
        let newColumns = this.state.columns;
        newColumns.forEach((col,i) => {
           if(col.key === e.target.id) {
               newColumns[i].checked = e.target.checked;
           }
        });

        this.setState({columns: newColumns});
    }

    prepareCheckBox(){
        return this.state.columns.map((col, index)=>{
            return <label key={index}><input
                key={index}
                type="checkbox"
                onChange={ this.handleChecked }
                id={col.key}
                value={col.val}
                checked={col.checked}
            />{col.val}</label>
        })
    }

    render() {

        return (
            <div className='filter-list content' id='cont1'>
                <div className='filters'>
                    <div className='select'>
                        <select value={this.props.value} onChange={this.handleChange}>
                            <option value={undefined}>Yıl Seçiniz...</option>
                            {
                                selectData.map(el => {
                                    return <option key={el} value={el}>{el}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='option-container'>
                        <span className='option-icon'>*</span>
                        <div className='option-box'>
                            {this.prepareCheckBox()}
                        </div>
                    </div>
                </div>
                <Table
                    rowsData={this.state.data}
                    columns={this.state.columns}
                    filterData={this.state.valueYear || 2019}
                />
            </div>
        );
    }
}