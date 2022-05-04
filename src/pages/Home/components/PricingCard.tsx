import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import appTheme from 'app/theme';

const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const Text = styled(Typography)({
  marginBottom: 20,
});

type PricingCardProps = {
  title: string;
  description: string;
  pricing: React.ReactElement;
  isHighlighted?: boolean;
  children: React.ReactNode;
};

function PricingCard({ title, description, pricing, children, isHighlighted }: PricingCardProps) {
  return (
    <StyledCard
      sx={{
        backgroundColor: isHighlighted
          ? appTheme.palette.primary.main
          : appTheme.palette.common.white,
        color: isHighlighted ? appTheme.palette.common.white : appTheme.palette.text.primary,
      }}
    >
      <CardContent>
        <Text variant="h4">{title}</Text>
        <Text variant="body1">{description}</Text>
        <Text>{pricing}</Text>
        {children}
      </CardContent>
    </StyledCard>
  );
}

export default PricingCard;
