import React, { Component } from 'react';

import api from '../services/api';
import check from '../assets/check.svg';
import './Pedidos.css';

class Pedido extends Component {

    state = {
        pedidos: [],
    }

    textoEntregue = "Listar entregues";

    async componentDidMount() {
        const response = await api.get('listPedidos');

        this.setState({ pedidos: response.data });
    }

    // alternative: async handleEntrega = idPedido => {}
    async handleEntrega(idPedido) {
        await api.post(`/listPedidos/${idPedido}/entregar`);
        this.handleListEntregues("Listar não-entregues");
    }

    async handleListEntregues(txtEntregue) {
        var response;
        if (txtEntregue === "Listar entregues") {
            response = await api.get('/listPedidos?ent=T');
            this.textoEntregue = "Listar não-entregues";
        } else {
            response = await api.get('/listPedidos');
            this.textoEntregue = "Listar entregues";
        }
        this.setState({ pedidos: response.data });
    }

    render() {
        return (
            <section id='lista-pedidos'>
                <div id='sort-list'>
                    <button type="button" onClick={() => this.handleListEntregues(this.textoEntregue)}>{this.textoEntregue}</button>
                </div>
                { this.state.pedidos.map(pedido => (
                    <article key={pedido._id}>
                        <header>
                            <div className='user-info'>
                                <span>{pedido.cliente}</span>
                            </div>
                        </header>
                        <div className='pedido'>
                            <span>{pedido.produto}</span>
                            <span className='data-entrega'>Data de entrega: {pedido.entrega}</span>
                        </div>
                        <footer>
                            <img src={check} alt="Entregue" onClick={() => this.handleEntrega(pedido._id)} />
                        </footer>
                    </article>
                    ))
                }
            </section>
        );
    }
}

export default Pedido;


