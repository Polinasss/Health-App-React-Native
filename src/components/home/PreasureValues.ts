export function getPreasure(age: number, preasureS: number) {
  let value = 1;
  if (age <= 10) {
    preasureS <= 80 ? value-- : preasureS >= 100 ? value++ : value;
  } else if (age <= 20) {
    preasureS <= 105 ? value-- : preasureS >= 120 ? value++ : value;
  } else if (age <= 30) {
    preasureS <= 109 ? value-- : preasureS >= 133 ? value++ : value;
  } else if (age <= 40) {
    preasureS <= 112 ? value-- : preasureS >= 137 ? value++ : value;
  } else if (age <= 50) {
    preasureS <= 115 ? value-- : preasureS >= 139 ? value++ : value;
  } else if (age <= 60) {
    preasureS <= 118 ? value-- : preasureS >= 144 ? value++ : value;
  } else {
    preasureS <= 121 ? value-- : preasureS >= 147 ? value++ : value;
  }
  return value;
}

export function getStatusMeasurements(age: number, pressureS: number) {
  let statusMeasurements =
    getPreasure(age, pressureS) === 1 ? "Норма" : "Не норма";
  return statusMeasurements;
}
