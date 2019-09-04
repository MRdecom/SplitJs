import React from 'react';

const formData = [
    ['aa', 'bb', 'cc'],
    ['aaa', 'bbb', 'ccc']
];


export default class BasicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitLineIsVisible: false,
            formData: formData,
            newFormData: ['', '', '']
        };

        this.createTable = this.createTable.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);

    }

    componentDidMount() {
        this.createTable();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    createTable() {
        return this.state.formData.map(
            (line, i) => {
                return <tr key={i}>{this.addTable(line)}</tr>
            }
        )
    }

    addTable(data) {
        return data.map((el, i) => {
            return <td key={i}>{el}</td>
        })
    }

    onClick() {
        this.setState({
            submitLineIsVisible: true,
        })
    }

    submit(e) {
        const newData = this.state.formData;
        newData.push([...this.state.newFormData]);
        this.setState({
            formData: newData,
        })
    }

    onChange(e) {
        let data = this.state.newFormData;
        data[e.target.id] = e.target.value;
        this.setState({
            newFormData: data
        });
    }

    render() {
        return (
            <div className='basic-form content ' id='cont3'>
                <table>
                    <tbody>
                    {this.createTable()}
                    </tbody>
                </table>

                {
                    this.state.submitLineIsVisible &&
                    <div>
                        <input type="text" key='00' id="0" onChange={this.onChange}/>
                        <input type="text" key='01' id="1" onChange={this.onChange}/>
                        <input type="text" key='02' id="2" onChange={this.onChange}/>
                        <input type="submit" key='03' value="Submit" onClick={this.submit}/>
                    </div>
                }
                <button onClick={this.onClick}>Yeni ekle</button>
            </div>
        );
    }
}