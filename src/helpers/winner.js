const playerWinConditions = [
  "rockscissors",
  "rocklizard",
  "paperrock",
  "paperspock",
  "scissorslizard",
  "scissorspaper",
  "lizardpaper",
  "lizardspock",
  "spockrock",
  "spockscissors",
];

export default function (combo) {
  if (playerWinConditions.includes(combo)) return true;
  return false;
}
