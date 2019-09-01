import React from 'react';

export default class ShowLocation extends React.Component {
    render() {
        return (
            <div className='show-location content' id='cont2'>
                <div className='positions-container'>
                    <b>Ayarlar:</b><br/>
                    <span>Üst Dikey Pencere Değerleri: {this.props.positions[0]}</span><br/>
                    <span>Yatay Pencere Değerleri: {this.props.positions[1]}</span><br/>
                    <span>Alt Dikey Pencere Değerleri: {this.props.positions[2]}</span><br/>

                </div>
            </div>
        );
    }
}