<script setup>
import { usePedidos } from "../composables/usePedidos";
import PedidosTable from "../components/PedidosTable.vue";
import { LISTA_STATUS } from "../constants/statusPedidos";

const {
  filtroNome,
  filtroStatus,
  pedidosFiltrados,
  marcarComoEnviado,
  STATUS_PEDIDOS
} = usePedidos();
</script>

<template>
  <div class="container">
    <h1>Painel de Pedidos 📦</h1>

    <div class="controls">
      <input
        v-model="filtroNome"
        placeholder="Buscar por nome..."
      />

      <select v-model="filtroStatus">
        <option :value="null">Todos</option>
        <option
          v-for="status in LISTA_STATUS"
          :key="status"
          :value="status"
        >
          {{ status }}
        </option>
      </select>
    </div>
    <p>
      Total: {{ pedidosFiltrados.length }} pedidos
    </p>
    <PedidosTable
      :pedidos="pedidosFiltrados"
      @enviarPedido="marcarComoEnviado"
      :statusConst="STATUS_PEDIDOS"
    />
  </div>
</template>

