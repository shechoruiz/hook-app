import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe("Pruebas sobre el hook useForm", () => {
  const initialForm = {
    name: "Sergio",
    email: "shecho@test.com",
  };

  test("1. Debe regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [value, handleInptutChange, reset] = result.current;

    expect(value).toEqual(initialForm);
    expect(typeof handleInptutChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("2. Debe cambiar el valor del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInptutChange] = result.current;

    act(() => {
      handleInptutChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      });
    });

    const [values] = result.current;
    // console.log(values);

    expect(values).toEqual({ ...initialForm, name: "Melissa" });
    expect(values.name).toBe("Melissa");
  });

  test("3. Debe restablecer el formulario con reset", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInptutChange, reset] = result.current;

    act(() => {
      handleInptutChange({
        target: {
          name: "name",
          value: "Vanessa",
        },
      });
      reset();
    });

    const [values] = result.current;

    expect(values).toEqual(initialForm);
  });
});
