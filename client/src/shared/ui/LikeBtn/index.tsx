import { IconButton, IconButtonProps } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface IPaginationProps extends IconButtonProps {
  isActive: boolean;
}

export function LikeBtn(props: IPaginationProps) {
  const { isActive } = props;

  return isActive ? (
    <IconButton {...props} sx={{ mr: 1 }} color="secondary">
      <FavoriteIcon />
    </IconButton>
  ) : (
    <IconButton {...props} sx={{ mr: 1 }} color="secondary">
      <FavoriteBorderIcon />
    </IconButton>
  );
}
