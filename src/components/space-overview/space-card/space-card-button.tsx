import { Button, Typography, useMediaQuery } from '@mui/material';
import FastForwardIcon from '../../../assets/fastforward.svg';
import { DayPassDiscountType } from '../types';

interface iButtonProps {
  days: number;
  pricePerDay: number;
  discountPercentage: DayPassDiscountType;
}

type PassPriceType = {
  period: string;
  price: number;
};
const SpaceCardButton = ({
  days,
  pricePerDay,
  discountPercentage,
}: iButtonProps) => {
  const matchesWidth = useMediaQuery('(min-width:1532px)');

  const getPassType = (): string => {
    return days > 1 ? 'Bulk' : 'Day';
  };

  const discountedPrice = (perDay: number, discount: number): number => {
    return days * perDay * ((100 - discount) / 100);
  };

  const passPrices: PassPriceType = {
    period: days > 1 ? `${days} Days` : ' Day',
    price:
      getPassType() === 'day'
        ? pricePerDay
        : discountedPrice(pricePerDay, discountPercentage.value),
  };

  return (
    <>
      <Button
        color={days > 1 ? 'primary' : 'secondary'}
        variant="contained"
        className="space-pass-button"
        endIcon={<img src={FastForwardIcon} alt="ff-icon" />}
      >
        <div className="space-button-text">
          <div className="button-label-passtype">
            {/*typography variants to be changed as per theme*/}
            <Typography variant="body1" color="textSecondary">
              {getPassType()}&nbsp;Pass
            </Typography>
          </div>
          {/*typography variants to be changed as per theme*/}
          <div className="space-button-price-label">
            <Typography variant="h3" color="textPrimary" borderColor="text">
              ₹{matchesWidth && ' '}
              {passPrices.price}
            </Typography>
            <Typography variant="body2" color="textPrimary">
              &nbsp;{`/${passPrices.period}`}
            </Typography>
          </div>
        </div>
      </Button>
      {discountPercentage.value !== 0 && (
        <div className="space-button-discount">
          <Typography variant="caption" color="secondary">
            {discountPercentage.value}% Discount
          </Typography>
        </div>
      )}
    </>
  );
};

export default SpaceCardButton;
