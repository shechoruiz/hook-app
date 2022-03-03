import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "../../hooks/useCounter";

describe("Pruebas sobre el hook useCounter", () => {
  test("1. Debe retornar el valores por defectos", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("2. Debe retornar el valor del counter en 100", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test("3. Debe incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => increment());

    const { counter } = result.current;

    expect(counter).toBe(101);
  });

  test("4. Debe decrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    /*
      Para que este tipo de prueba con el act funcione, se debe configurar
      un callback en las funciones del hook, para obtener el valor mas reciente
      del state

      Pasando de:

      const decrement = () => {
        setCounter(counter - 1);
      };

      a:

      const decrement = () => {
        setCounter((c) => c - 1);
      };

      Con esta actualización, la siguiente función act realiza la prueba deseada:

      act(() => {
        decrement();
        decrement();
        decrement();
        decrement();
      });
    */

    act(() => {
      decrement();
    });

    const { counter } = result.current;

    expect(counter).toBe(99);
  });

  test("5. Debe reseter el counter con el valor del counter original", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, increment, reset } = result.current;

    act(() => {
      decrement();
      increment();
      reset();
    });

    const { counter } = result.current;

    expect(counter).toBe(100);
  });
});
