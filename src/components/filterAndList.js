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
        val: 'ID'
    }, {
        key: 'contract',
        val: 'Kontrat'
    }, {
        key: 'offer',
        val: 'Teklif'
    }, {
        key: 'data',
        val: 'Data'
    }]

;


export default class FilterAndList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: filterDataObj,
            columns: columnsData
        }
    }


    render() {
        return (
            <div className='filter-list content' id='cont1'>

                <Table
                    rowsData={this.state.data}
                    columns={this.state.columns}
                    filterData={'2019'}
                />
            </div>
        );
    }
}