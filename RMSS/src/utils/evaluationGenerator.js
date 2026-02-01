// evaluationGenerator.js
export function generateEvaluations(candidates) {
  return candidates.map(c => ({
    candidate_id: c.id,
    crisis_management_score: Math.random() * 10,
    sustainability_score: Math.random() * 10,
    team_motivation_score: Math.random() * 10,
  }));
}
