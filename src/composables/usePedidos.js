import { ref, computed } from "vue";
import { mockPedidos } from "../data/mockPedidos";
import { STATUS_PEDIDOS } from "../constants/statusPedidos";

export function usePedidos() {
  const pedidos = ref([...mockPedidos]); //cria copia do array 

  const filtroNome = ref("");
  const filtroStatus = ref(null);

  const pedidosFiltrados = computed(() => {
    return pedidos.value.filter(pedido => {
      return (
        filtraPorNome(pedido) &&
        filtraPorStatus(pedido)
      );
    });
  });

  function filtraPorNome(pedido) {
    return pedido.cliente
      .toLowerCase()
      .includes(filtroNome.value.toLowerCase());
  }

  function filtraPorStatus(pedido) {
    if (!filtroStatus.value) return true;
    return pedido.status === filtroStatus.value;
  }

  function marcarComoEnviado(id) {
    const pedido = pedidos.value.find(p => p.id === id);

    if (pedido && pedido.status === STATUS_PEDIDOS.PENDENTE) {
      pedido.status = STATUS_PEDIDOS.ENVIADO;
    }
  }

  return {
    pedidos,
    filtroNome,
    filtroStatus,
    pedidosFiltrados,
    marcarComoEnviado,
    STATUS_PEDIDOS
  };
}
