import QualificationForm from "@/components/qualification-form";

export default function Home() {
  return (
    <div className="bg-white text-zinc-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">
              Reposição simplificada pós-Stocky
            </p>
            <p className="text-xs text-zinc-500">Para lojistas Shopify</p>
          </div>
          <a
            href="#form"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Quero acesso antecipado
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-50 to-white" />
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Stocky descontinuado em 31/08/2026
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                O auto-PO pode continuar sem o Stocky.
              </h1>
              <p className="mt-6 text-lg text-zinc-600">
                Depois do fim do Stocky, muitos lojistas ficaram sem reorder
                automático nem geração simples de pedidos de compra no Shopify.
                Estamos criando uma alternativa enxuta para quem não quer voltar
                para planilha.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#form"
                  className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Quero acesso antecipado
                </a>
                <span className="text-xs text-zinc-500">
                  Sem cartão · Acesso antecipado grátis por 3 meses
                </span>
              </div>
              <p className="mt-4 text-xs text-zinc-500">
                Sem compromisso · Cancelável quando quiser
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              O que desapareceu junto com o Stocky
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Reorder automático",
                  description:
                    "Sugestão de reposição quando o estoque cai abaixo do ponto de reposição.",
                },
                {
                  title: "Auto-PO",
                  description:
                    "Geração de pedido de compra a partir de vendas passadas, sem preenchimento manual.",
                },
                {
                  title: "Fornecedores/vendors",
                  description:
                    "Fluxo direto com fornecedores principais por produto, sem complicação multi-vendor.",
                },
                {
                  title: "Recebimento simples",
                  description:
                    "Registrar entrada de mercadoria sem ter que refazer todo o fluxo manualmente.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-2 text-xs text-zinc-600">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-zinc-600">
              O Shopify Admin não oferece auto-PO, reorder automático nem suporte
              a vendors como o Stocky fazia. Para muitos lojistas, isso não é uma
              substituição equivalente.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            O que esta solução faz
          </h2>
          <p className="mt-3 text-zinc-600">
            Solução focada em reposição, sem complicação.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Reorder automático",
                description:
                  "Quando o estoque baixa, a ferramenta sugere a quantidade de reposição.",
              },
              {
                title: "1 fornecedor principal",
                description:
                  "Por produto, você define um fornecedor principal para simplificar o fluxo.",
              },
              {
                title: "Regras simples",
                description:
                  "Ponto de reposição + quantidade mínima. Sem configuração complexa.",
              },
              {
                title: "PO em 1 clique",
                description:
                  "Pedido de compra gerado e pronto para enviar ao fornecedor.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-200 p-5"
              >
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-2 text-xs text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-zinc-500">
            Sem forecasting complexo. Sem ERP. Sem onboarding pesado.
          </p>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Comparação direta
            </h2>
            <p className="mt-2 text-xs text-zinc-500">
              Esta solução ainda não foi lançada. A tabela compara uma posição
              hipotética com alternativas existentes.
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-zinc-200">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50">
                    <th className="px-4 py-3 font-medium text-zinc-500">
                      Recurso
                    </th>
                    <th className="px-4 py-3 font-medium text-zinc-500">
                      Stocky
                    </th>
                    <th className="px-4 py-3 font-medium text-zinc-500">
                      Shopify Admin
                    </th>
                    <th className="px-4 py-3 font-medium text-zinc-500">
                      Planilha
                    </th>
                    <th className="px-4 py-3 font-medium text-zinc-500">
                      Apps alternativos
                    </th>
                    <th className="px-4 py-3 font-medium text-zinc-900">
                      Esta solução
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-4 py-3 text-zinc-700">Auto-PO</td>
                    <td className="px-4 py-3 text-zinc-700">Sim</td>
                    <td className="px-4 py-3 text-zinc-700">Não</td>
                    <td className="px-4 py-3 text-zinc-700">Não</td>
                    <td className="px-4 py-3 text-zinc-700">
                      Sim, com maior custo/complexidade
                    </td>
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      Sim, simples
                    </td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 text-zinc-700">Reorder automático</td>
                    <td className="px-4 py-3 text-zinc-700">Sim</td>
                    <td className="px-4 py-3 text-zinc-700">Não</td>
                    <td className="px-4 py-3 text-zinc-700">Não</td>
                    <td className="px-4 py-3 text-zinc-700">Sim</td>
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      Sim
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-zinc-700">
                      Fornecedores/vendors
                    </td>
                    <td className="px-4 py-3 text-zinc-700">Sim</td>
                    <td className="px-4 py-3 text-zinc-700">Limitado</td>
                    <td className="px-4 py-3 text-zinc-700">Não</td>
                    <td className="px-4 py-3 text-zinc-700">Sim</td>
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      Sim
                    </td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 text-zinc-700">Preço</td>
                    <td className="px-4 py-3 text-zinc-700">Grátis com POS Pro</td>
                    <td className="px-4 py-3 text-zinc-700">Grátis</td>
                    <td className="px-4 py-3 text-zinc-700">Grátis</td>
                    <td className="px-4 py-3 text-zinc-700">
                      US$20–349/mês
                    </td>
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      R$29/mês, hipótese
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-zinc-700">Complexidade</td>
                    <td className="px-4 py-3 text-zinc-700">Baixa</td>
                    <td className="px-4 py-3 text-zinc-700">Baixa</td>
                    <td className="px-4 py-3 text-zinc-700">Alta</td>
                    <td className="px-4 py-3 text-zinc-700">Alta</td>
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      Baixa
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Veja como funciona
          </h2>
          <p className="mt-3 text-zinc-600">
            Material conceitual para validação da ideia.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Estoque baixo",
                description:
                  "O Shopify indica que o produto está abaixo do ponto de reposição.",
              },
              {
                step: "2",
                title: "Sugestão de reposição",
                description:
                  "O app sugere quantidade com base em reorder point e vendas recentes.",
              },
              {
                step: "3",
                title: "PO gerado",
                description:
                  "O pedido de compra é preenchido e fica pronto para envio ao fornecedor.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-zinc-200 p-5"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Passo {item.step}
                </p>
                <p className="mt-2 text-sm font-medium">{item.title}</p>
                <p className="mt-2 text-xs text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Por que esta abordagem
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Não é mais um ERP",
                  description:
                    "Focamos apenas em reposição, não em forecasting avançado, manufacturing ou multi-location complexo.",
                },
                {
                  title: "Distribuição pelo ecossistema",
                  description:
                    "Descoberta via App Store e busca, não por cold outreach ou venda consultiva.",
                },
                {
                  title: "Validação antes de construir",
                  description:
                    "Não lançamos sem evidência de demanda. O early access é grátis porque ainda estamos testando se vale a pena.",
                },
                {
                  title: "Preço como hipótese",
                  description:
                    "R$29/mês é uma referência inicial, não um preço fechado. O preço final pode mudar conforme o aprendizado.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-2 text-xs text-zinc-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">Planos</h2>
            <p className="mt-3 text-zinc-600">
              Referência de preço para validação. Sujeito a alteração.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium">Planilha</p>
                <p className="mt-2 text-xs text-zinc-600">Grátis, mas manual</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium">Stockful</p>
                <p className="mt-2 text-xs text-zinc-600">R$79/mês</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium">Fabrikatör</p>
                <p className="mt-2 text-xs text-zinc-600">R$99/mês</p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border-2 border-zinc-900 p-6">
              <p className="text-sm font-medium">Solução enxuta</p>
              <p className="mt-2 text-xs text-zinc-600">
                R$29/mês, simples, específica para reposição.
              </p>
              <p className="mt-2 text-xs text-zinc-500">
                Acesso antecipado: R$0/mês por 3 meses.
              </p>
            </div>
          </div>
        </section>

        <section id="form" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-zinc-50" />
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                Quero acesso antecipado
              </h2>
              <p className="mt-3 text-zinc-600">
                Ainda estamos em fase de validação. Deixe seu email para ser
                avisado do lançamento e participar do acesso antecipado gratuito.
              </p>
              <div className="mt-6 flex flex-wrap items-start gap-3">
                <QualificationForm />
                <span className="text-xs text-zinc-500 pt-6">
                  Sem cartão · Sem compromisso
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            Fase de validação. O produto será desenvolvido se houver demanda
            suficiente.
          </p>
          <div className="text-xs text-zinc-500">
            <a href="#" className="hover:underline">
              Política de privacidade
            </a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:underline">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
