import { useState } from "react";
import {
  Fieldset,
  LabelText,
  Legend,
  Input,
  Current,
  Footer,
  Loading,
  ErrorText,
  ResultWindow,
} from "./styled";
import { Button } from "./Button";
import { Result } from "./Result";
import { Clock } from "../Clock";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("PLN");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [result, setResult] = useState("");
  const ratesData = useRatesData();
  const { date, rates, state } = ratesData;

  const calculateResult = (currencyFrom, currencyTo, amount) => {
    const rateFrom = rates[currencyFrom];
    const rateTo = rates[currencyTo];
    setResult({
      currencyFrom,
      currencyTo,
      targetAmount: (amount * rateTo) / rateFrom,
      sourceAmount: +amount,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currencyFrom, currencyTo, amount);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Przelicznik walut</Legend>
        {state === "loading" ? (
          <Loading>
            Trwa ładowanie danych <br />z Europejskiego Banku Centralnego.{" "}
            <br />
            Prosimy o chwilkę cierpliwości.
          </Loading>
        ) : state === "error" ? (
          <ErrorText>
            Ups...coś poszło nie tak
            <br /> Sprawdź swoje połączenie z internetem. <br />
            Jeśli Twoje połączenie jest stabilne, spróbuj ponownie później.
          </ErrorText>
        ) : (
          <>
            <label>
              <Clock />
              <LabelText> Mam:</LabelText>
              <Input
                type="number"
                min="1"
                step="any"
                value={amount}
                required
                placeholder="Wpisz kwotę"
                autoFocus
                onChange={({ target }) => setAmount(target.value)}
              />
            </label>
            <p>
              <label>
                <LabelText>Wymieniam z:</LabelText>
                <Current
                  name="currentFrom"
                  value={currencyFrom}
                  onChange={({ target }) => setCurrencyFrom(target.value)}
                >
                  {Object.keys(rates).map((currencyFrom) => (
                    <option key={currencyFrom} value={currencyFrom}>
                      {currencyFrom}
                    </option>
                  ))}
                  ;
                </Current>
              </label>
            </p>
            <p>
              <label>
                <LabelText>Wymieniam na:</LabelText>
                <Current
                  name="currentTo"
                  value={currencyTo}
                  onChange={({ target }) => setCurrencyTo(target.value)}
                >
                  {Object.keys(rates).map((currencyTo) => (
                    <option key={currencyTo} value={currencyTo}>
                      {currencyTo}
                    </option>
                  ))}
                  ;
                </Current>
              </label>
            </p>
            <>
              <LabelText>Otrzymam:</LabelText>
              <ResultWindow>
                <Result result={result} />
              </ResultWindow>
            </>
            <Button />
            <Footer>Aktualny kurs z dnia {date}</Footer>
          </>
        )}
      </Fieldset>
    </form>
  );
};

export default Form;
