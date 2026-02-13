<script setup>
defineProps({
  pedidos: Array,
  onEnviar: Function,
  statusConst: Object
});
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

    <tbody>
      <tr v-for="pedido in pedidos" :key="pedido.id">
        <td>{{ pedido.id }}</td>
        <td>{{ pedido.cliente }}</td>
        <td>R$ {{ pedido.valor.toFixed(2) }}</td>
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
            @click="onEnviar(pedido.id)"
            >
            Marcar como Enviado
            </button>


          <span v-else>-</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
