const rnaComplementMappingObject = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export const toRna = dna => {
  let rnaComplement = Array.from(dna).reduce(
    (rnaComplementAccumulator, currentDnaNucleotide) =>
      rnaComplementAccumulator +
      rnaComplementMappingObject[currentDnaNucleotide],
    ""
  );

  return rnaComplement;
};
