import data from './data.js'

/**
 * Calculate the threat level (health × damage) for each monster
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of objects with name and threatLevel properties
 */

export function calculateThreatLevels({ demons }) {
  // TODO: Calculate the threat level (health × damage) for each monster
  const threatLevels = [] // Initialize the array we will use to store the values.
  Object.keys(demons).forEach((difficulty) => {
    demons[difficulty].forEach((demons) => {
      threatLevels.push({
        name: demons.name,
        threatLevel: demons.health * demons.damage,
      })
    })
  })
  // and return an array of monsters with their threat levels
  return threatLevels
}

/**
 * Extract all monster names into an array using Object methods
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of all monster names
 */
export function extractMonsterNames({ demons }) {
  // TODO: Extract all monster names into an array using Object methods
  const monsterNames = []
  Object.keys(demons).forEach((difficulty) => {
    demons[difficulty].forEach((demon) => {
      monsterNames.push(demon.name)
    })
  })

  return monsterNames
}

/**
 * Transform the data structure to organize monsters by threat level
 * @param {Object} monsters - The monsters data object
 * @return {Object} - Object with lowThreat, mediumThreat, and highThreat arrays
 */
export function organizeByThreatLevel({ demons }) {
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
