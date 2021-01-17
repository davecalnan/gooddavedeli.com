import classNames from "classnames";

export type MenuProps = {
  className?: string;
};

export const Menu = ({ className }: MenuProps) => (
  <article
    className={classNames(
      className,
      "min-w-64 max-w-3xl border-yellow-200 border-8 rounded-lg bg-yellow-100 px-6 py-10 text-center font-display"
    )}
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fcd34d' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}
  >
    <h2 className="font-display text-yellow-900 text-5xl">
      Opening Night Menu
    </h2>

    <div className="mt-8 space-y-12">
      <section>
        <h3 className="text-4xl font-display text-yellow-700">Entrada</h3>
        <ul className="text-2xl text-gray-800">
          <li>
            <span className="mr-2">🥑</span>
            Fresh Homemade <span className="text-yellow-600">Guac</span> &
            Tortilla Chips
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-4xl font-display text-yellow-700">Starter</h3>
        <ul className="text-2xl text-gray-800">
          <li>
            <span className="mr-2">🌶</span>
            Fried Padron Peppers, drizzled with extra virgin olive oil and sea
            salt
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-4xl font-display text-yellow-700">Main</h3>
        <ul className="text-2xl text-gray-800">
          <li>
            <span className="mr-2">🌮</span>
            <span className="font-display text-yellow-600">Thicc</span> Qalnan
            Quesadillas with the works
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-4xl font-display text-yellow-700">Dessert</h3>
        <ul className="text-2xl text-gray-800">
          <li>
            <span className="mr-2">🍫</span>
            Dave's famously tasteless Churros with decadent chocolate dipping
            sauce
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-4xl font-display text-yellow-700">Drinks</h3>
        <ul className="text-2xl text-gray-800">
          <li>
            <span className="mr-2">🍺</span>
            Classic Corona
          </li>
          <li>
            <span className="mr-2">🍹</span>
            Beautiful Mezcal Sunset
          </li>
        </ul>
      </section>
    </div>
  </article>
);
