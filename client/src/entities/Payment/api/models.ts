export type IExampleNameResponse = string;

export interface IPaymentResponse {
  id: number;
  confirmation: {
    confirmation_url: string;
  };
}
