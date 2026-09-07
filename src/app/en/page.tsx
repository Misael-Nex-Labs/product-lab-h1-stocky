import QualificationForm from "@/components/qualification-form";

export default function HomeEN() {
  return (
    <div className="bg-white text-zinc-900 antialiased">
      <header className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">
              Simple replenishment after Stocky
            </p>
            <p className="text-xs text-zinc-500">For Shopify merchants</p>
          </div>
          <a
            href="#form"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Get early access
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-50 to-white" />
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Stocky discontinued on Aug 31, 2026
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Auto-PO can continue without Stocky.
              </h1>
              <p className="mt-6 text-lg text-zinc-600">
                Shopify Admin doesn’t offer automatic reorder or simple purchase
                order generation. We’re building a lightweight alternative for
                merchants who want to keep the workflow without going back to
                spreadsheets.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#form"
                  className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Get early access
                </a>
                <span className="text-xs text-zinc-500">
                  No card · Free early access for 3 months
                </span>
              </div>
              <p className="mt-4 text-xs text-zinc-500">
                No commitment · Cancel anytime
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              What Stocky did and Shopify doesn’t cover
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Automatic reorder",
                  description:
                    "Replenishment suggestions when stock drops below the reorder point.",
                },
                {
                  title: "Auto-PO",
                  description:
                    "Purchase orders generated from past sales, without manual entry.",
                },
                {
                  title: "Suppliers/vendors",
                  description:
                    "Direct workflow with a main supplier per product, no multi-vendor complexity.",
                },
                {
                  title: "Simple receiving",
                  description:
                    "Record incoming stock without rebuilding the whole manual workflow.",
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
              Shopify Admin doesn’t offer auto-PO, automatic reorder, or vendor
              support the way Stocky did. For many merchants, that’s not an
              equivalent replacement.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            What this solution does
          </h2>
          <p className="mt-3 text-zinc-600">Focused on replenishment, no bloat.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Automatic reorder",
                description:
                  "When stock is low, the tool suggests how much to reorder.",
              },
              {
                title: "1 main supplier",
                description:
                  "Per product, you set a main supplier to keep the flow simple.",
              },
              {
                title: "Simple rules",
                description:
                  "Reorder point + minimum quantity. No complex setup.",
              },
              {
                title: "1-click PO",
                description:
                  "Purchase order generated and ready to send to the supplier.",
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
            No complex forecasting. No ERP. No heavy onboarding.
          </p>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Direct comparison
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="pb-2 pr-4 font-medium">Feature</th>
                    <th className="pb-2 pr-4 font-medium">Stocky</th>
                    <th className="pb-2 pr-4 font-medium">Shopify Admin</th>
                    <th className="pb-2 pr-4 font-medium">Spreadsheet</th>
                    <th className="pb-2 pr-4 font-medium">Alt apps</th>
                    <th className="pb-2 font-medium">This solution</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-2 pr-4">Auto-PO</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2 pr-4">Yes, higher cost/complexity</td>
                    <td className="py-2 pr-4">Yes, simple</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-2 pr-4">Automatic reorder</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2 pr-4">Yes</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-2 pr-4">Suppliers/vendors</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2 pr-4">Limited</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2 pr-4">Yes</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-2 pr-4">Price</td>
                    <td className="py-2 pr-4">Free with POS Pro</td>
                    <td className="py-2 pr-4">Free</td>
                    <td className="py-2 pr-4">Free</td>
                    <td className="py-2 pr-4">$20–349/month</td>
                    <td className="py-2 pr-4">$9/month, hypothesis</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Complexity</td>
                    <td className="py-2 pr-4">Low</td>
                    <td className="py-2 pr-4">Low</td>
                    <td className="py-2 pr-4">High</td>
                    <td className="py-2 pr-4">High</td>
                    <td className="py-2 pr-4">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Comparing a hypothetical solution with existing alternatives. The
              goal is to validate whether this positioning makes sense before
              building.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            How it works
          </h2>
          <p className="mt-3 text-zinc-600">
            Conceptual material for idea validation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Low stock",
                description:
                  "Shopify signals that the product is below the reorder point.",
              },
              {
                step: "2",
                title: "Reorder suggestion",
                description:
                  "The app suggests quantity based on reorder point and recent sales.",
              },
              {
                step: "3",
                title: "PO generated",
                description:
                  "The purchase order is filled and ready to send to the supplier.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-zinc-200 p-5"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Step {item.step}
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
              Why this approach
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Not another ERP",
                  description:
                    "We focus only on replenishment, not advanced forecasting, manufacturing, or complex multi-location.",
                },
                {
                  title: "Ecosystem distribution",
                  description:
                    "Discovery via App Store and search, not cold outreach or consultative sales.",
                },
                {
                  title: "Validate before building",
                  description:
                    "We don’t launch without demand evidence. Early access is free because we’re still testing if it’s worth it.",
                },
                {
                  title: "Price as hypothesis",
                  description:
                    "$9/month is an initial reference, not a final price. The final price may change as we learn.",
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
            <h2 className="text-2xl font-semibold tracking-tight">Pricing</h2>
            <p className="mt-3 text-zinc-600">
              Reference pricing for validation. Subject to change.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium">Spreadsheet</p>
                <p className="mt-2 text-xs text-zinc-600">Free, but manual</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium">Stockful</p>
                <p className="mt-2 text-xs text-zinc-600">$49/month</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium">Fabrikatör</p>
                <p className="mt-2 text-xs text-zinc-600">$79/month</p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border-2 border-zinc-900 p-6">
              <p className="text-sm font-medium">Lightweight solution</p>
              <p className="mt-2 text-xs text-zinc-600">
                $9/month, simple, built specifically for replenishment.
              </p>
              <p className="mt-2 text-xs text-zinc-500">
                Early access: $0/month for 3 months.
              </p>
            </div>
          </div>
        </section>

        <section id="form" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-zinc-50" />
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                Get early access
              </h2>
              <p className="mt-3 text-zinc-600">
                We’re still in validation. Leave your email to be notified at
                launch and join the free early access.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <QualificationForm />
                <span className="text-xs text-zinc-500">
                  No card · No commitment
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            Validation phase. The product will be built only if there’s enough
            demand.
          </p>
          <div className="text-xs text-zinc-500">
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
