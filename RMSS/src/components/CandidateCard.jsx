import { Card, Text, Badge, Group, Box } from '@mantine/core';
import SkillHeatmap from './SkillHeatmap';

export default function CandidateCard({ candidate, evaluation }) {
  // Parse skills if stored as JSON or comma-separated
  const skills = Array.isArray(candidate.skills)
    ? candidate.skills
    : candidate.skills?.split(',').map(s => s.trim()) || [];

  return (
    <Card
      shadow="md"
      padding="lg"
      radius="md"
      style={{
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 12px 20px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
      }}
    >
      {/* Candidate Name */}
      <Text weight={700} size="lg" mb="sm" color="#2b7a0b">
        {candidate.name}
      </Text>

      {/* Experience & Previous Role */}
      <Text size="sm" mb={5}>
        <strong>Experience:</strong> {candidate.experience_years} years
      </Text>
      {candidate.previous_role && (
        <Text size="sm" mb={5}>
          <strong>Previous Role:</strong> {candidate.previous_role}
        </Text>
      )}

      {/* Skills as Badges */}
      <Group spacing="xs" mb="sm" mt="xs">
        {skills.map((skill, idx) => (
          <Badge color="green" variant="light" key={idx}>
            {skill}
          </Badge>
        ))}
      </Group>

      {/* Skill Heatmap */}
      {evaluation && <SkillHeatmap scores={evaluation} />}
    </Card>
  );
}
