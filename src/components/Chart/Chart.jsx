import "./Chart.scss";
import data from "../../assets/data.json";

export default function Chart() {
  const totalAmount = data.reduce((sum, { amount }) => sum + amount, 0);
  let newDay = new Date();
  let today = newDay.getDay() - 1;

  return (
    <>
      <h2>Spending - Last 7 Days</h2>
      <article className="chart">
        {data.map(({ day, amount }, index) => (
          <section key={index}>
            <div
              style={{
                "--bg":
                  today == index ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)",
                "--height": (totalAmount / amount) * 10 + "px",
                "--mt": 150 - (totalAmount / amount) * 10 + "px",
              }}
            >
              <p className="info">{amount}</p>
            </div>
            <p>{day}</p>
          </section>
        ))}
      </article>
    </>
  );
}
