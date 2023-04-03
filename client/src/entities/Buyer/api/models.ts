export interface IBuyerResponse {
  user: number;
  phone_number: string;
  is_male: boolean;
  personal_discount: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  date_joined: string;
  payment_method: string;
  card: string | null;
}
