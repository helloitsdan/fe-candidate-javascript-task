enum EntitySpecies {
  CAT = "CAT",
  DOG = "DOG"
}

interface InsuredEntity {
  uuid: string;
  species: EntitySpecies;
  name: string;
  date_of_birth: string;
  breed: string;
}

const pluralise = (thing: string, count: number) =>
  count === 1 ? thing : `${thing}s`;

const speciesCountToString = (species: EntitySpecies, count: number) => {
  return `${count} ${pluralise(species, count).toLowerCase()}`;
};

const summariseInsuredEntities = (entities: InsuredEntity[]) => {
  const entityCounts = entities.reduce(
    (entityTypes, entity) => ({
      ...entityTypes,
      [entity.species]: (entityTypes[entity.species] || 0) + 1
    }),
    {} as Record<EntitySpecies, number>
  );

  return Object.entries(entityCounts)
    .sort(([speciesA], [speciesB]) => speciesA.localeCompare(speciesB))
    .map(([species, count]) =>
      speciesCountToString(species as EntitySpecies, count)
    )
    .join(", ");
};

export { EntitySpecies, InsuredEntity, pluralise, speciesCountToString };
export default summariseInsuredEntities;
