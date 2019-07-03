import React, { Component } from 'react';

import api from '../services/api';

import './New.css';

const today = new Date(); 
const data = today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear();

class New extends Component {

    state = {
        cliente: '',
        produto: '',
        entrega: '',
        isEntregue: false,
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        const data = new URLSearchParams();
        
        data.append('cliente', this.state.cliente);
        data.append('produto', this.state.produto);
        data.append('entrega', this.state.entrega);

        await api.post('addPedido', data);
        // .then((result) => {
        //     // Do somthing
        //     console.log(data);
        //     this.props.history.push('/');
        // })
        // .catch((err) => {
        //     // Do somthing
        //     console.log("ERRO");
        // });
        
        this.props.history.push('/');
    }

    render() {
        return (
            <form id="novo-pedido" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="cliente" 
                    placeholder="Nome do cliente" 
                    onChange={this.handleChange} 
                    value={this.state.cliente} />
                <input 
                    type="text" 
                    name="produto" 
                    placeholder="Nome do produto" 
                    onChange={this.handleChange} 
                    value={this.state.produto} />
                <input 
                    type="text" 
                    name="entrega" 
                    placeholder={`Data de entrega ex.(${data})`} 
                    onChange={this.handleChange} 
                    value={this.state.entrega} />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default New;

