import { STATUS_PEDIDOS } from "../constants/statusPedidos";

export const mockPedidos = [
    {
        id: 1, cliente: 'João Silva', valor: 250.9, status: STATUS_PEDIDOS.PENDENTE},
    {id: 2, cliente: 'Maria Oliveira', valor: 150.5, status: STATUS_PEDIDOS.ENVIADO},
    {id: 3, cliente: 'Carlos Santos', valor: 300.0, status: STATUS_PEDIDOS.PENDENTE},
    {id: 4, cliente: 'Ana Costa', valor: 450.75, status: STATUS_PEDIDOS.PENDENTE},
    {id: 5, cliente: 'Pedro Almeida', valor: 200.0, status: STATUS_PEDIDOS.CANCELADO},
    {id: 6, cliente: 'Luiza Fernandes', valor: 180.9, status: STATUS_PEDIDOS.PENDENTE},
    {id: 7, cliente: 'Ricardo Pereira', valor: 120.0, status: STATUS_PEDIDOS.PENDENTE},
    {id: 8, cliente: 'Fernanda Gomes', valor: 220.5, status: STATUS_PEDIDOS.PENDENTE},
    {id: 9, cliente: 'Bruno Rodrigues', valor: 130.0, status: STATUS_PEDIDOS.PENDENTE},
    {id: 10, cliente: 'Carla Mendes', valor: 350.0, status: STATUS_PEDIDOS.PENDENTE},
];
