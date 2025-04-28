const flattenMonsters = ({ demons }) => Object.values(demons).flat()

/**
 * Calculate the threat level (health × damage) for each monster
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of objects with name and threatLevel properties
 */

export function calculateThreatLevels(monsters) {
  // TODO: Calculate the threat level (health × damage) for each monster
  return flattenMonsters(monsters).map(({ name, health, damage }) => ({
    name,
    threatLevel: health * damage,
  }))
}

/**
 * Extract all monster names into an array using Object methods
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of all monster names
 */
export function extractMonsterNames(monsters) {
  // TODO: Extract all monster names into an array using Object methods
  return flattenMonsters(monsters).map(({ name }) => name)
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
