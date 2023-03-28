import { IFlowerResponse } from "@entities/Flower/api/models";
import { Typography, CardProps, Box, Badge } from "@mui/material";
import { Carousel } from "@shared/ui/Carousel";
import { getRealPrice } from "../../utils";

export interface IFlowerCardProps extends CardProps {
  flower: IFlowerResponse;
  children?: React.ReactNode;
  width?: number | string;
}

export function FlowerCard(props: IFlowerCardProps) {
  const {
    flower: { name, images, price, sale },
    children,
    width = 300,
  } = props;

  const saleContent = (() => {
    if (sale?.number) return `-${sale.number}р`;
    if (sale?.percent) return `-${sale.percent}%`;

    return undefined;
  })();

  return (
    <Box>
      <Box sx={{ width, height: width }}>
        <Badge
          badgeContent={saleContent && <Typography>{saleContent}</Typography>}
          color="error"
        >
          <Carousel
            sx={{ width, height: width }}
            images={images.map((image) => ({
              img: image.img,
              label: image.id.toString(),
            }))}
          />
        </Badge>
      </Box>

      <Box sx={{ pt: 1 }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h5" sx={{ pr: 2 }}>
            {getRealPrice(price, sale)}р
          </Typography>
          {saleContent && (
            <Typography color="GrayText" variant="subtitle2">
              <del>{price}р</del>
            </Typography>
          )}
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="caption" color="GrayText">
            {name}
          </Typography>
        </Box>

        {children}
      </Box>
    </Box>
  );
}
