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
export function organizeByThreatLevel({ threatLevels }) {
  // TODO: Transform the data structure to organize monsters by threat level
  // Categorize monsters based on their threat levels
  const lowThreat = threatLevels.filter(({ threatLevel }) => threatLevel < 10000)
  lowThreat.sort((a, b) => a.threatLevel - b.threatLevel)

  const mediumThreat = threatLevels.filter(
    ({ threatLevel }) => threatLevel >= 10000 && threatLevel <= 50000,
  )
  mediumThreat.sort((a, b) => a.threatLevel - b.threatLevel)

  const highThreat = threatLevels.filter(({ threatLevel }) => threatLevel > 50000)
  highThreat.sort((a, b) => a.threatLevel - b.threatLevel)

  return {
    lowThreat,
    mediumThreat,
    highThreat,
  }
}

export function sum(a, b) {
  return a + b
}
