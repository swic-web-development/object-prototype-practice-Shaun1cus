const flattenMonsters = ({ demons }) => Object.values(demons).flat()

/**
 * Calculate the threat level (health × damage) for each monster
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of objects with name and threatLevel properties
 */
export function calculateThreatLevels(monsters) {
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
  return flattenMonsters(monsters).map(({ name }) => name)
}

/**
 * Transform the data structure to organize monsters by threat level
 * @param {Object} monsters - The monsters data object
 * @return {Object} - Object with lowThreat, mediumThreat, and highThreat arrays
 */
export function organizeByThreatLevel(monsters) {
  const monstersWithThreatLevels = calculateThreatLevels(monsters)

  const lowThreats = monstersWithThreatLevels
    .filter(({ threatLevel }) => threatLevel < 10000)
    .sort((a, b) => a.threatLevel - b.threatLevel)

  const mediumThreats = monstersWithThreatLevels
    .filter(({ threatLevel }) => threatLevel >= 10000 && threatLevel <= 50000)
    .sort((a, b) => a.threatLevel - b.threatLevel)

  const highThreats = monstersWithThreatLevels
    .filter(({ threatLevel }) => threatLevel > 50000)
    .sort((a, b) => a.threatLevel - b.threatLevel)

  return {
    lowThreat: lowThreats,
    mediumThreat: mediumThreats,
    highThreat: highThreats,
  }
}

export function sum(a, b) {
  return a + b
}
