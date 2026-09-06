import QualificationForm from "@/components/qualification-form";

export default function Home() {
  return (
    <div className="bg-white text-zinc-900">
      <header className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">
              Product Lab — experimento H1
            </p>
            <p className="text-xs text-zinc-500">
              Reposição simplificada pós-Stocky para Shopify
            </p>
          </div>
          <a
            href="#form"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Quero early access
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Alternativa simples ao Stocky para reposição automática no Shopify.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            O Stocky foi descontinuado em 31 de agosto de 2026. Estamos criando
            uma ferramenta enxuta para quem não quer forecasting complexo nem
            planilha manual.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#form"
              className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Quero early access
            </a>
            <span className="text-xs text-zinc-500 self-center">
              Sem cartão · Early access grátis por 3 meses
            </span>
          </div>
          <p className="mt-6 text-xs text-zinc-500">
            Em avaliação por lojistas Shopify · Sem compromisso · Cancelável quando quiser
          </p>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              O que mudou com o Stocky
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-zinc-700">
              <li>Reorder automático quando estoque baixa</li>
              <li>Geração de pedidos de compra a partir de vendas passadas</li>
              <li>Suporte a fornecedores/vendors</li>
              <li>Simplicidade operacional</li>
            </ul>
            <p className="mt-6 text-sm text-zinc-600">
              O Shopify Admin não oferece auto-PO, reorder automático nem suporte
              a vendors/fornecedores como Stocky fazia. Para muitos lojistas,
              isso não é uma substituição equivalente.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            O que esta ferramenta faz
          </h2>
          <p className="mt-3 text-zinc-600">
            Hipótese de solução em validação: reposição simplificada, sem
            complicação.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-zinc-700">
            <li>Reorder automático quando estoque baixa</li>
            <li>1 fornecedor principal por produto</li>
            <li>Regras simples: ponto de reposição + quantidade mínima</li>
            <li>Pedido de compra gerado em 1 clique</li>
          </ul>
          <p className="mt-6 text-sm text-zinc-600">
            Sem forecasting complexo. Sem ERP. Sem onboarding pesado.
          </p>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Comparação honesta
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="pb-2 pr-4 font-medium">Recurso</th>
                    <th className="pb-2 pr-4 font-medium">Stocky</th>
                    <th className="pb-2 pr-4 font-medium">Shopify Admin</th>
                    <th className="pb-2 pr-4 font-medium">Planilha</th>
                    <th className="pb-2 pr-4 font-medium">Apps alternativos</th>
                    <th className="pb-2 font-medium">Esta ferramenta</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-2 pr-4">Auto-PO</td>
                    <td className="py-2 pr-4">Sim</td>
                    <td className="py-2 pr-4">Não</td>
                    <td className="py-2 pr-4">Não</td>
                    <td className="py-2 pr-4">Sim, com maior custo/complexidade</td>
                    <td className="py-2 pr-4">Sim, simples</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-2 pr-4">Reorder automático</td>
                    <td className="py-2 pr-4">Sim</td>
                    <td className="py-2 pr-4">Não</td>
                    <td className="py-2 pr-4">Não</td>
                    <td className="py-2 pr-4">Sim</td>
                    <td className="py-2 pr-4">Sim</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-2 pr-4">Fornecedores/vendors</td>
                    <td className="py-2 pr-4">Sim</td>
                    <td className="py-2 pr-4">Limitado</td>
                    <td className="py-2 pr-4">Não</td>
                    <td className="py-2 pr-4">Sim</td>
                    <td className="py-2 pr-4">Sim</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-2 pr-4">Preço</td>
                    <td className="py-2 pr-4">Grátis com POS Pro</td>
                    <td className="py-2 pr-4">Grátis</td>
                    <td className="py-2 pr-4">Grátis</td>
                    <td className="py-2 pr-4">US$20–349/mês</td>
                    <td className="py-2 pr-4">R$29/mês, hipótese</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Complexidade</td>
                    <td className="py-2 pr-4">Baixa</td>
                    <td className="py-2 pr-4">Baixa</td>
                    <td className="py-2 pr-4">Alta</td>
                    <td className="py-2 pr-4">Alta</td>
                    <td className="py-2 pr-4">Baixa</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Esta ferramenta ainda não foi lançada. A tabela compara uma
              hipótese de solução com alternativas existentes.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Veja como funciona
          </h2>
          <p className="mt-3 text-zinc-600">
            Material conceitual, não funcional. Serve apenas para validar a
            ideia.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 p-4">
              <p className="text-sm font-medium">1. Estoque baixo</p>
              <p className="mt-2 text-xs text-zinc-600">
                O Shopify indica que o produto está abaixo do ponto de reposição.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4">
              <p className="text-sm font-medium">2. Sugestão de reposição</p>
              <p className="mt-2 text-xs text-zinc-600">
                O app sugere quantidade com base em reorder point e vendas
                recentes.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4">
              <p className="text-sm font-medium">3. PO gerado</p>
              <p className="mt-2 text-xs text-zinc-600">
                O pedido de compra é preenchido e fica pronto para envio ao
                fornecedor.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Por que esta abordagem
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium">Não é mais um ERP</p>
                <p className="mt-2 text-xs text-zinc-600">
                  Focamos apenas em reposição, não em manufacturing, forecasting
                  avançado ou multi-location complexo.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Distribuição pelo ecossistema Shopify</p>
                <p className="mt-2 text-xs text-zinc-600">
                  Descoberta via App Store e busca, não por cold outreach ou
                  venda consultiva.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Validação antes de construir</p>
                <p className="mt-2 text-xs text-zinc-600">
                  Não lançamos sem evidência de demanda. O early access é grátis
                  porque ainda estamos testando se vale a pena.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Preço como hipótese</p>
                <p className="mt-2 text-xs text-zinc-600">
                  R$29/mês é uma referência inicial, não um preço fechado. O
                  preço final pode mudar conforme o aprendizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">Planos</h2>
            <p className="mt-3 text-zinc-600">
              Preço hipotético para validação. Sujeito a alteração.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-zinc-200 p-6">
                <p className="text-sm font-medium">Planilha</p>
                <p className="mt-2 text-xs text-zinc-600">Grátis, mas manual</p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-6">
                <p className="text-sm font-medium">Stockful</p>
                <p className="mt-2 text-xs text-zinc-600">R$79/mês</p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-6">
                <p className="text-sm font-medium">Fabrikatör</p>
                <p className="mt-2 text-xs text-zinc-600">R$99/mês</p>
              </div>
            </div>
            <div className="mt-8 rounded-lg border border-zinc-900 p-6">
              <p className="text-sm font-medium">Esta ferramenta</p>
              <p className="mt-2 text-xs text-zinc-600">
                R$29/mês, simples, específica para reposição.
              </p>
              <p className="mt-2 text-xs text-zinc-500">
                Early access: R$0/mês por 3 meses.
              </p>
            </div>
          </div>
        </section>

        <section id="form" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Quero early access
          </h2>
          <p className="mt-3 text-zinc-600">
            Não construímos ainda. Este é um experimento de validação. Se houver
            demanda suficiente, o produto será desenvolvido.
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            Sem cartão · Sem compromisso · Cancelável quando quiser
          </p>
          <QualificationForm />
        </section>
      </main>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            Não construímos ainda. Este é um experimento de validação. Se houver
            demanda suficiente, o produto será desenvolvido.
          </p>
          <div className="text-xs text-zinc-500">
            <a href="#" className="hover:underline">Política de privacidade</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:underline">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
