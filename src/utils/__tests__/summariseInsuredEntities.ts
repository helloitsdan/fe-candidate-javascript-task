import summariseInsuredEntities, {
  speciesCountToString,
  pluralise,
  EntitySpecies,
  InsuredEntity
} from "../summariseInsuredEntities";

describe("pluralise", () => {
  it("pluralises provided string when count is not 1", () => {
    expect(pluralise("cat", 2)).toEqual("cats");
  });

  it("does not pluralise provided string when count is 1", () => {
    expect(pluralise("cat", 1)).toEqual("cat");
  });
});

describe("speciesCountToString", () => {
  it("returns a human-readable version of a species count", () => {
    const speciesCount = { species: EntitySpecies.CAT, count: 2 };
    const expectedString = "2 cats";

    expect(
      speciesCountToString(speciesCount.species, speciesCount.count)
    ).toEqual(expectedString);
  });
});

describe("summariseInsuredEntities", () => {
  it("returns a summarised string representation of a set of policy entities", () => {
    const policyEntities = [
      { species: EntitySpecies.CAT } as InsuredEntity,
      { species: EntitySpecies.DOG } as InsuredEntity,
      { species: EntitySpecies.CAT } as InsuredEntity,
      { species: EntitySpecies.DOG } as InsuredEntity,
      { species: EntitySpecies.DOG } as InsuredEntity,
    ]

    const expectedString = '2 cats, 3 dogs'

    expect(summariseInsuredEntities(policyEntities)).toEqual(expectedString)
  });
});
