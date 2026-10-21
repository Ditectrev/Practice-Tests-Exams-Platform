import { renderHook } from "@testing-library/react";
import useScrollToTop from "../useScrollToTop";

describe("useScrollToTop", () => {
  const scrollTo = jest.fn();

  beforeEach(() => {
    scrollTo.mockClear();
    window.scrollTo = scrollTo;
  });

  it("scrolls to the top when the trigger changes", () => {
    const { rerender } = renderHook(
      ({ questionIndex }) => useScrollToTop(questionIndex),
      { initialProps: { questionIndex: 1 } },
    );

    expect(scrollTo).toHaveBeenCalledWith(0, 0);
    scrollTo.mockClear();

    rerender({ questionIndex: 2 });
    expect(scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it("does not scroll when the trigger is unchanged", () => {
    const { rerender } = renderHook(
      ({ questionIndex }) => useScrollToTop(questionIndex),
      { initialProps: { questionIndex: 1 } },
    );

    scrollTo.mockClear();
    rerender({ questionIndex: 1 });
    expect(scrollTo).not.toHaveBeenCalled();
  });
});
