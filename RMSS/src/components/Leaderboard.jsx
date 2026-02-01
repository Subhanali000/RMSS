import { Table, Badge, Text, ScrollArea, Box, Center, Space } from '@mantine/core';

export default function Leaderboard({ candidates, evaluations }) {
  const ranked = candidates
    .map(c => {
      const ev = evaluations?.find(e => e.candidate_id === c.id);
      const overall_score = ev
        ? ((ev.crisis_management_score +
            ev.sustainability_score +
            ev.team_motivation_score) / 3)
        : 0;
      return { ...c, overall_score };
    })
    .sort((a, b) => b.overall_score - a.overall_score)
    .slice(0, 10);

  return (
    <div class="container">
    <Center style={{ width: '100%' }}>
      <Box
        sx={{
          backgroundColor: '#ffffff',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
          width: '100%',
          maxWidth: 800, // keeps it centered and not too wide
        }}
      >
        <ScrollArea style={{ maxHeight: 400 }}>
          <Table highlightOnHover striped>
            <thead style={{ backgroundColor: '#e6f5e6' }}>
              <tr>
                <th style={{ borderTopLeftRadius: '12px' }}>Rank</th>
                <th>Name</th>
                <th>Experience (Years)</th>
                <th style={{ borderTopRightRadius: '12px' }}>Overall Score</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map((c, i) => (
                <tr key={c.id} style={{ transition: 'all 0.2s', cursor: 'pointer' }}>
                  <td><Text weight={700}>{i + 1}</Text></td>
                  <td>{c.name}</td>
                  <td>{c.experience_years}</td>
                  <td>
                    <Badge
                      color={
                        c.overall_score >= 8
                          ? 'green'
                          : c.overall_score >= 5
                          ? 'yellow'
                          : 'red'
                      }
                      variant="light"
                    >
                      {c.overall_score.toFixed(2)}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ScrollArea>

        {/* Space below leaderboard */}
        <Space h="xl" />
      </Box>
    </Center>
    </div>
  );
}
