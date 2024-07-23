import { Component } from '@angular/core';
declare var Razorpay: any;

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {
  payNow() {
    const RazorpayOptions = {
      description: 'sample razorpay demo',
      currency: 'INR',
      amount: 30000,
      name: 'Vision Shakti',
      key: 'rzp_test_0XBKy4GEBBqJas',
      image: 'https://media.istockphoto.com/id/1173058386/vector/butterfly-woman-with-leaf-wings-design-inspiration.jpg?s=2048x2048&w=is&k=20&c=PCqCMsHtBOJF0VZd-ysy9dUIuO6qgsnJ5E1FSF2m6c4=',
      prefill: {
        name: 'Vision Shakti',
        email: 'pratiksh78naik@gmail.com',
        phone: '9112144537',
      },
      theme: {
        color: '#57cfcb'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        }
      }
    };

    
    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    };
    const failureCallback = (e: any) => {
      console.log(e);
    };

    if (typeof Razorpay !== 'undefined') {
      Razorpay.open(RazorpayOptions, successCallback, failureCallback);
    } else {
      console.error('Razorpay library is not loaded.');
    }
  }; // Adjust the delay as needed
}
