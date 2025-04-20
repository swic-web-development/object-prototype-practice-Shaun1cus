import data from './data.js'

/**
 * Calculate the threat level (health × damage) for each monster
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of objects with name and threatLevel properties
 */
export function calculateThreatLevels(monsters) {
  // TODO: Calculate the threat level (health × damage) for each monster
  return monsters.map((monster) => {
    return {
      name: monster.name,
      threatLevel: monster.health * monster.damage,
    }
  })
}
// and return an array of monsters with their threat levels

/**
 * Extract all monster names into an array using Object methods
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of all monster names
 */
export function extractMonsterNames(monsters) {
  // TODO: Extract all monster names into an array using Object methods
  const monsterNames = []
  // biome-ignore lint/complexity/noForEach: <explanation>
  Object.keys(monsters).forEach((key) => {
    // biome-ignore lint/complexity/noForEach: <explanation>
    monsters[key].forEach((monster) => {
      monsterNames.push(monster.name)
    })
  })
}

/**
 * Transform the data structure to organize monsters by threat level
 * @param {Object} monsters - The monsters data object
 * @return {Object} - Object with lowThreat, mediumThreat, and highThreat arrays
 */
export function organizeByThreatLevel(monsters) {
  // TODO: Transform the data structure to organize monsters by threat level
  // instead of difficulty
  // lowThreat: < 10,000
  // mediumThreat: between 10,000 and 50,000
  // highThreat: > 50,000
  const organizedMonsters = {
    lowThreat: [],
    mediumThreat: [],
    highThreat: [],
  }
  const threatLevels = calculateThreatLevels(monsters)
  // biome-ignore lint/complexity/noForEach: <explanation>
  threatLevels.forEach((monster) => {
    if (monster.threatLevel < 10000) {
      organizedMonsters.lowThreat.push(monster)
    } else if (monster.threatLevel >= 10000 && monster.threatLevel <= 50000) {
      organizedMonsters.mediumThreat.push(monster)
    } else {
      organizedMonsters.highThreat.push(monster)
    }
  })
}

export function sum(a, b) {
  return a + b
}
