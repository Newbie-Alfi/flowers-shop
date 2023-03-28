import { Pagination as MUIPagionation, PaginationProps } from "@mui/material";

interface IPaginationProps extends PaginationProps {
  pageSize?: number;
}

export function Pagination(props: IPaginationProps) {
  const { page = 1, pageSize = 12, count = 0 } = props;

  return (
    <MUIPagionation
      {...props}
      page={page}
      count={Math.ceil(count / pageSize)}
    />
  );
}
