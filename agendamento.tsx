import React, { useState } from "react";

function Agendamento() {
  const [tipoCliente, setTipoCliente] = useState("fisica");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [servico, setServico] = useState("intercambio");
  const [dataHora, setDataHora] = useState("");
  const [preco, setPreco] = useState(0);

  // Simulação de preço — você pode trocar depois por valores reais ou API
  const precosServicos = {
    intercambio: 7500,
    viagemCorporativa: 10500,
  };

  const handleCalcularPreco = () => {
    setPreco(precosServicos[servico] || 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Agendamento realizado!\nTipo: ${
        tipoCliente === "fisica" ? "Pessoa Física" : "Pessoa Jurídica"
      }\nServiço: ${servico}\nData: ${dataHora}\nValor: R$ ${preco.toLocaleString()}`
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-purple-700 text-center">
          Agendamentos
        </h1>

        {/* Tipo de cliente */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={() => setTipoCliente("fisica")}
            className={`px-4 py-2 rounded-lg ${
              tipoCliente === "fisica"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Pessoa Física
          </button>
          <button
            onClick={() => setTipoCliente("juridica")}
            className={`px-4 py-2 rounded-lg ${
              tipoCliente === "juridica"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Pessoa Jurídica
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Login / Cadastro */}
          <label className="flex flex-col">
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded"
              placeholder="seu@email.com"
              required
            />
          </label>

          <label className="flex flex-col">
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="border p-2 rounded"
              placeholder="********"
              required
            />
          </label>

          {/* Serviço */}
          <label className="flex flex-col">
            Serviço:
            <select
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="intercambio">Intercâmbio</option>
              <option value="viagemCorporativa">Viagem Corporativa</option>
            </select>
          </label>

          {/* Data / Hora */}
          <label className="flex flex-col">
            Data e Hora:
            <input
              type="datetime-local"
              value={dataHora}
              onChange={(e) => setDataHora(e.target.value)}
              className="border p-2 rounded"
              required
            />
          </label>

          {/* Botão de calcular */}
          <button
            type="button"
            onClick={handleCalcularPreco}
            className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition"
          >
            Calcular preço
          </button>

          {/* Mostrar preço final */}
          {preco > 0 && (
            <div className="text-center text-lg font-semibold text-purple-700 mt-2">
              💰 Preço total: R$ {preco.toLocaleString()}
            </div>
          )}

          {/* Confirmar agendamento */}
          <button
            type="submit"
            className="bg-purple-700 text-white p-2 rounded hover:bg-purple-800 transition mt-4"
          >
            Confirmar Agendamento
          </button>
        </form>
      </div>
    </div>
  );
}

export default Agendamento;
