//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EARTH_SECONDS_IN_A_YEAR = 31557600;

export const age = (planet, seconds) => {
  switch (planet) {
    case "mercury":
      return calculate(0.2408467);
    case "venus":
      return calculate(0.61519726);
    case "mars":
      return calculate(1.8808158);
    case "jupiter":
      return calculate(11.862615);
    case "saturn":
      return calculate(29.447498);
    case "uranus":
      return calculate(84.016846);
    case "neptune":
      return calculate(164.79132);
    case "earth":
      return calculate(1);

      function calculate(yearsToEarth) {
        return +(seconds / (EARTH_SECONDS_IN_A_YEAR * yearsToEarth)).toFixed(2);
      }
  }
};
