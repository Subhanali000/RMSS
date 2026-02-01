import React from 'react';
import candidates from './components/candidates.json';
import { generateEvaluations } from './utils/evaluationGenerator';
import Leaderboard from './components/Leaderboard';
import CandidateCard from './components/CandidateCard';
import { Container, Title, SimpleGrid, Divider, Space, Center } from '@mantine/core';

export default function App() {
  const evaluations = generateEvaluations(candidates);

  return (
    <Container size="lg" padding="md">
      <Title
        order={1}
        align="center"
        style={{ marginTop: 40, marginBottom: 40, color: '#2b7a0b' }}
      >
        Recycling Production Line Manager Rankings
      </Title>

      {/* Leaderboard */}
      <Leaderboard candidates={candidates} evaluations={evaluations} />

      {/* Extra space below leaderboard */}
      <Space h="xl" />

      {/* Divider */}
      <Divider
        my="xl"
        label="Top 5 Candidates"
        labelPosition="center"
        style={{ fontWeight: 600, color: '#2b7a0b' }}
      />

      <Space h="md" />

      {/* Candidate Cards in centered grid */}
      <Center>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: 'md' },
            { maxWidth: 640, cols: 1, spacing: 'sm' },
          ]}
          style={{ width: '100%', maxWidth: 1000 }} // limits width
        >
          {candidates.slice(0, 5).map((c) => (
            <CandidateCard
              key={c.id}
              candidate={c}
              evaluation={evaluations.find(e => e.candidate_id === c.id)}
            />
          ))}
        </SimpleGrid>
      </Center>

      <Space h="xl" />
    </Container>
  );
}
