import { Progress, Text, Group, Box } from '@mantine/core';

export default function SkillHeatmap({ scores }) {
  if (!scores) return null;

  return (
    <Box>
      <Text weight={500} size="sm" mb={5}>
        Crisis Management
      </Text>
      <Progress
        value={(scores.crisis_management_score || 0) * 10}
        color="red"
        size="lg"
        radius="sm"
        mb="sm"
        label={`${scores.crisis_management_score.toFixed(1)}/10`}
      />

      <Text weight={500} size="sm" mb={5}>
        Sustainability
      </Text>
      <Progress
        value={(scores.sustainability_score || 0) * 10}
        color="green"
        size="lg"
        radius="sm"
        mb="sm"
        label={`${scores.sustainability_score.toFixed(1)}/10`}
      />

      <Text weight={500} size="sm" mb={5}>
        Team Motivation
      </Text>
      <Progress
        value={(scores.team_motivation_score || 0) * 10}
        color="blue"
        size="lg"
        radius="sm"
        label={`${scores.team_motivation_score.toFixed(1)}/10`}
      />
    </Box>
  );
}
