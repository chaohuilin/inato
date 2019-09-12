import { Drug } from "./src/drug";
import { Pharmacy } from "./src/pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("shouldn't have negative benefit value ", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });

  it("should decrease the benefit by 2 if expired", () => {
    expect(new Pharmacy([new Drug("test", 0, 4)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 2)]
    );
  });

  it("should decrease the benefit by 2 and stop at 0", () => {
    expect(new Pharmacy([new Drug("test", 0, 1)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 0)]
    );
  });
});

describe("Herbal Tea", () => {
  it("should increase the benefit the older it gets", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });

  it("should increase the benefit until 50 maximum", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 5, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 4, 50)]);
  });
});

describe("Magic Pill", () => {
  it("should never expires nor decreases in benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 2, 3)]);
  });
});

describe("Fervex", () => {
  it("should increase the benefit by 1 when expiresIn is higher than 10", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 12, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 11, 11)]);
  });

  it("should increase the benefit by 2 when expiresIn is less than 11 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 11, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 10, 12)]);
  });

  it("should increase the benefit by 3 when expiresIn is less than 4 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 4, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 13)]);
  });

  it("should never have the benefit higher than 50", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 4, 48)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 50)]);
  });

  it("should have the benefit equal to 50 when expiresIn is 0", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 1, 46)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 0, 50)]);
  });

  it("should have the benefit equal to 0 when is expired", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

describe("Dafalgan", () => {
  it("should decrease by two everyday", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });

  it("should decrease by four if expired", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 8)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 4)]);
  });

  it("should never have negative benefit", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});
