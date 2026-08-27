type VentaDia = {
  dia: string;
  ventas: number;
  actual?: boolean;
};

const ventasSemana: VentaDia[] = [
  { dia: "Vie", ventas: 7 },
  { dia: "Sáb", ventas: 11 },
  { dia: "Dom", ventas: 8 },
  { dia: "Lun", ventas: 13 },
  { dia: "Mar", ventas: 10 },
  { dia: "Mié", ventas: 15 },
  { dia: "Hoy", ventas: 18, actual: true },
];

const VentasBarChart = () => {
  const maxVentas = Math.max(...ventasSemana.map((item) => item.ventas));

  return (
    <section className="admin-card admin-chart">
      <div className="admin-card__header">
        <div>
          <h2>Ventas de los últimos días</h2>
          <p>Comparación de ventas realizadas</p>
        </div>

        <div className="admin-chart__total">
          <strong>82</strong>
          <span>ventas esta semana</span>
        </div>
      </div>

      <div className="admin-chart__body">
        <div className="admin-chart__y-axis">
          <span>20</span>
          <span>15</span>
          <span>10</span>
          <span>5</span>
          <span>0</span>
        </div>

        <div className="admin-chart__content">
          <div className="admin-chart__grid">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="admin-chart__bars">
            {ventasSemana.map((item) => {
              const height = (item.ventas / maxVentas) * 100;

              return (
                <div className="admin-chart__column" key={item.dia}>
                  <div className="admin-chart__bar-container">
                    <span className="admin-chart__bar-value">
                      {item.ventas}
                    </span>

                    <div
                      className={`admin-chart__bar ${
                        item.actual ? "admin-chart__bar--current" : ""
                      }`}
                      style={{ height: `${height}%` }}
                      title={`${item.ventas} ventas`}
                    />
                  </div>

                  <span
                    className={`admin-chart__day ${
                      item.actual ? "admin-chart__day--current" : ""
                    }`}
                  >
                    {item.dia}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentasBarChart;