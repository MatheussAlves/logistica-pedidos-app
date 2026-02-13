<script setup>
//Usei props para deixar o componente mais genérico e reutilizável, 
// sem depender diretamente do usePedidos.
defineProps({
  pedidos: Array,
  statusConst: Object
});
//Evento enviado pro componente pai (PainelPedidosView)
const emit = defineEmits(['enviarPedido']);
</script>

<template>
  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>ID</th>
        <th>Cliente</th>
        <th>Valor</th>
        <th>Status</th>
        <th>Ação</th>
      </tr>
    </thead>
    <!--Utilizei :key pois evita bugs de re-renderização e é uma identidade estável-->
    <!--Utilizei o NumberFormat pra deixar o valor de acordo com a moeda local, poderia ter usado uma função utilitária mas por velocidade deixei no codigo mesmo, mas em um projeto maior a função é mais recomendada-->
    <!--Utilizei um badge dinamico pra evitar logica dentro do CSS e manter o código mais limpo e reutilizável-->
    <tbody>
      <tr v-for="pedido in pedidos" :key="pedido.id">
        <td>{{ pedido.id }}</td>
        <td>{{ pedido.cliente }}</td>
        <td>{{ new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
}).format(pedido.valor) }}</td>
        <td>
            <span
                class="status"
                :class="{
                'status-pendente': pedido.status === statusConst.PENDENTE,
                'status-enviado': pedido.status === statusConst.ENVIADO,
                'status-cancelado': pedido.status === statusConst.CANCELADO
                }"
            >
                {{ pedido.status }}
            </span>
        </td>


        <td>
            <button
            v-if="pedido.status === statusConst.PENDENTE"
            class="success"
            @click="emit('enviarPedido', pedido.id)"
            >
            Marcar como Enviado
            </button>


          <span v-else>-</span>
        </td>
      </tr>
      <tr v-if="pedidos.length === 0">
        <td colspan="5">Nenhum pedido encontrado.</td>
      </tr>
    </tbody>
  </table>
</template>
