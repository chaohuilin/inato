export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateByDrug() {
    switch (this.name) {
      case "Fervex":
        this.updateFervexBenefit();
        break;
      case "Herbal Tea":
        this.updateHerbalTeaBenefit();
        break;
      case "Magic Pill":
        break;
      case "Dafalgan":
        this.updateDafalganBenefit();
        break;
      default:
        this.updateClassDrugBenefit();
        break;
    }
    this.benefit = this.benefit > 50 ? 50 : this.benefit;
    this.benefit = this.benefit < 0 ? 0 : this.benefit;
  }

  updateFervexBenefit() {
    this.expiresIn -= 1;
    this.benefit += 1;
    if (this.expiresIn === 0) this.benefit = 50;
    else if (this.expiresIn < 11) this.benefit += this.expiresIn < 6 ? 2 : 1;
    if (this.expiresIn < 0) this.benefit = 0;
  }

  updateHerbalTeaBenefit() {
    this.expiresIn -= 1;
    this.benefit += this.expiresIn < 0 ? 2 : 1;
  }

  updateDafalganBenefit() {
    this.expiresIn -= 1;
    this.benefit -= 2 * (this.expiresIn < 0 ? 2 : 1);
  }

  updateClassDrugBenefit() {
    this.expiresIn -= 1;
    this.benefit -= 1 * (this.expiresIn < 0 ? 2 : 1);
  }

  getDrugInfos() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit
    };
  }
}
