"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function QualificationForm() {
  const [state, handleSubmit] = useForm("xqpkdrqo");

  if (state.succeeded) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="text-sm font-medium text-green-800">
          Inscrição enviada. Entraremos em contato.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium text-zinc-700">Nome</span>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20"
          />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium text-zinc-700">E-mail</span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20"
          />
          <ValidationError field="email" errors={state.errors} />
        </label>
      </div>

      <label className="space-y-1">
        <span className="text-sm font-medium text-zinc-700">
          URL da loja Shopify
        </span>
        <input
          name="shop"
          required
          className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20"
        />
        <ValidationError field="shop" errors={state.errors} />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium text-zinc-700">
            Número de SKUs
          </span>
          <select
            name="skus"
            required
            className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20"
          >
            <option value="">Selecione</option>
            <option>Até 50</option>
            <option>51–200</option>
            <option>201–500</option>
            <option>500+</option>
          </select>
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium text-zinc-700">
            Faturamento médio mensal
          </span>
          <select
            name="revenue"
            required
            className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20"
          >
            <option value="">Selecione</option>
            <option>Até R$ 10k</option>
            <option>R$ 10k–30k</option>
            <option>R$ 30k–100k</option>
            <option>R$ 100k+</option>
          </select>
        </label>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-zinc-700">
          Apps de inventário atuais
        </legend>
        <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
          {[
            "Nenhum",
            "Shopify nativo",
            "Stocky",
            "Planilha",
            "Stockful",
            "Fabrikatör",
            "Prediko",
            "Outro",
          ].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2.5"
            >
              <input
                type="checkbox"
                name="apps"
                value={option}
                className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
              />
              <span className="text-zinc-700">{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-zinc-700">
          Já usou Stocky?
        </legend>
        <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
          {[
            "Sim, ainda uso",
            "Sim, mas já migrei",
            "Não, mas usei alternativa",
            "Não, nunca usei",
          ].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2.5"
            >
              <input
                type="radio"
                name="stocky"
                value={option}
                required
                className="h-4 w-4 border-zinc-300 text-zinc-900 focus:ring-zinc-900"
              />
              <span className="text-zinc-700">{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="space-y-1">
        <span className="text-sm font-medium text-zinc-700">
          Como resolve reposição hoje?
        </span>
        <textarea
          name="workflow"
          required
          minLength={20}
          rows={4}
          className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20"
        />
        <ValidationError field="workflow" errors={state.errors} />
      </label>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-6 w-full rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:opacity-70"
      >
        {state.submitting ? "Enviando..." : "Quero acesso antecipado"}
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
