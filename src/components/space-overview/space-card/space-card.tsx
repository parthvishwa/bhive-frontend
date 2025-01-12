import './space-card.css';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import distanceLogo from '../../../assets/distancelogo.svg';
import SpaceCardButton from './space-card-button';
import { DayPassDiscountType } from '../types';

interface iSpaceCardProps {
  id: string;
  imageSrc: string;
  spaceName: string;
  spaceAddress: string;
  dayPassPrice: number;
  passDiscounts: { [days: string]: DayPassDiscountType };
}
const SpaceCard = ({
  imageSrc,
  spaceName,
  spaceAddress,
  dayPassPrice,
  passDiscounts,
}: iSpaceCardProps) => {
  return (
    <>
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="distance">
              <img src={distanceLogo} alt="distance" />
            </IconButton>
          }
          //typography variants to be changed as per theme
          title={<Typography variant="h3">{spaceAddress}</Typography>}
        />
        <CardMedia
          image={imageSrc}
          sx={{ height: 200, mx: 2, mb: 2, borderRadius: 2 }}
          className="space-card-media"
        >
          <div className="space-card-title">
            <Typography
              variant='body1'
              component="div"
              sx={{
                color: '#ffbb00',
                textShadow: '0px 1px 3px rgba(255, 208, 79, 0.6)',
              }}
              className="space-name"
            >
              {spaceName}
            </Typography>
          </div>
        </CardMedia>
        <CardActions sx={{ mx: 1, gap: '10px', position: 'relative' }}>
          {passDiscounts &&
            Object.keys(passDiscounts).map((days: string) => {
              let daystobook = Number(days);
              return (
                <SpaceCardButton
                  key={`key-${days}`}
                  days={daystobook}
                  pricePerDay={dayPassPrice}
                  discountPercentage={passDiscounts[days]}
                />
              );
            })}
        </CardActions>
      </Card>
    </>
  );
};

export default SpaceCard;
