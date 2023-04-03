// import { AxiosRequestConfig } from "axios";
import { auth } from "@shared/api/auth/config";
import { IPaymentResponse } from "./models";

interface IOrderData {
  product_ids: number[];
  redirect_url: string;
}

export const paymentApi = () => {
  const order = (orderObject: IOrderData) => {
    const data = new FormData();
    Object.entries(orderObject).forEach(([key, value]) => {
      let resultValue = value;

      if (Array.isArray(value)) resultValue = JSON.stringify(value);

      data.append(key, resultValue);
    });

    const response = auth.post<IPaymentResponse>("payment/", data);

    return response;
  };

  return { order };
};

// import uuid
// import json

// from http import HTTPStatus
// from django.http import JsonResponse
// from django.core.exceptions import PermissionDenied
// from django.contrib.auth.models import User
// from rest_framework import status
// from rest_framework.response import Response
// from rest_framework.views import APIView
// from yookassa import Configuration, Payment
// from django.shortcuts import redirect

// from yookassa import Configuration

// from flowers.models import Flower, Basket

// ACCOUNT_ID = 209884,
// SECRET_KEY = "test_kJbjuoAJaI0iaKJjmz3GoMImbzovNkNdbDS8aTHmoWw",

// Configuration.account_id = ACCOUNT_ID
// Configuration.secret_key = SECRET_KEY

// class PaymentViewSet(APIView):
//     def post(self, request):
//         if request.user.is_authenticated:
//             user_id = User.objects.get(username=request.user).id
//             queryset = Basket.objects.filter(user=user_id)
//             product_ids = request.POST.get("product_ids")

//             if (product_ids is None):
//                 return Response({'detail': "Invalid arguments. Parameter product_list is required."}, status=status.HTTP_400_BAD_REQUEST)

//             product_ids = json.loads(product_ids)
//             redirect_url = request.POST.get("redirect_url")

//             if (redirect_url == None):
//                 redirect_url = settings.CLIENT_URL

//             product_list = queryset.filter(flower__id__in=product_ids)

//             if product_list.exists() == False:
//                 raise Response({'detail': "No products found."},
//                                status=status.HTTP_400_BAD_REQUEST)

//             payment_value = 0

//             for product in product_list:
//                 payment_value = payment_value + product.get_result_price()

//             payment = Payment.create({
//                 "amount": {
//                     "value": payment_value,
//                     "currency": "RUB"
//                 },
//                 "confirmation": {
//                     "type": "redirect",
//                     "return_url": redirect_url
//                 },
//                 "capture": True,
//                 "description": "Заказ №1"
//             }, uuid.uuid4())

//             return Response(json.loads(payment.json()))
//         else:
//             raise PermissionDenied
