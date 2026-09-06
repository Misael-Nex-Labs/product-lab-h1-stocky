"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function QualificationForm() {
  const [state, handleSubmit] = useForm("xqpkdrqo");

  if (state.succeeded) {
    return (
      <p className="text-sm text-green-700">
        Inscrição enviada. Entraremos em contato.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium">Nome</span>
          <input
            name="name"
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">E-mail</span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <ValidationError field="email" errors={state.errors} />
        </label>
      </div>
      <label className="space-y-1">
        <span className="text-sm font-medium">URL da loja Shopify</span>
        <input
          name="shop"
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <ValidationError field="shop" errors={state.errors} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium">Número de SKUs</span>
          <select
            name="skus"
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          >
            <option value="">Selecione</option>
            <option>Até 50</option>
            <option>51–200</option>
            <option>201–500</option>
            <option>500+</option>
          </select>
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">Faturamento médio mensal</span>
          <select
            name="revenue"
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
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
        <legend className="text-sm font-medium">Apps de inventário atuais</legend>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            "Nenhum",
            "Shopify nativo",
            "Stocky",
            "Planilha",
            "Stockful",
            "Fabrikatör",
            "Prediko",
            "Outro"
          ].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input type="checkbox" name="apps" value={option} />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">Já usou Stocky?</legend>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            "Sim, ainda uso",
            "Sim, mas já migrei",
            "Não, mas usei alternativa",
            "Não, nunca usei"
          ].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input type="radio" name="stocky" value={option} required />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="space-y-1">
        <span className="text-sm font-medium">Como resolve reposição hoje?</span>
        <textarea
          name="workflow"
          required
          minLength={20}
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <ValidationError field="workflow" errors={state.errors} />
      </label>
      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-70"
      >
        {state.submitting ? "Enviando..." : "Quero early access"}
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
