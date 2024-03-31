import { getCheckoutHandler, getKey } from "../store/adminrelated/AdminHandle";

const integrateRazorpay = async (dispatch, formData, currentDataType,to) => {
    const amount = 5000;
    const key = await getKey(dispatch,to);
    const order = await getCheckoutHandler(dispatch, amount,to);
    console.log(key, order);

    let data;
    if(to === "Company"){
        data = {
            studentType: currentDataType,
            email: "john.doe@example.com",
        };
    }else{
        // data = formData;
        data = {
            studentId: '61edf0a23c9790a2e7212345', // ObjectId for the student
            feeId: '61edf0a23c9790a2e7212346', // ObjectId for the fee
            amountPaid: 5000,
            datePaid: new Date(),
            installmentNumber: 1,
            paymentMethod: 'online', // or 'cash'
            payment_id: 'PAYMENT123456', // example payment ID
            order_id: 'ORDER789012' // example order ID
        };
    }
    const dataString = JSON.stringify(data);
    console.log(dataString);
    try {
        if (key && order) {
            const options = {
                key,
                amount: order.amount,
                currency: "INR",
                name: "Metainnovix",
                description: "razorpay integration",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0IEl-z7bU5LtNqZb31sKKGxG_YAgkVzphXX7nKcs6g&s",
                order_id: order.id,
                callback_url: `${process.env.REACT_APP_BASE_URL_BACKEND}/auth/platformCharges/paymentverification/${encodeURIComponent(dataString)}/${to}`,
                prefill: {
                    name: "Binod",
                    email: "b@gmail.com",
                    contact: "1234567890", // contact number of
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                },
            };
            const razor = new window.Razorpay(options);
            razor.open();
        } else {
            console.log("error try again.");
        }
    } catch (error) {
        console.log(error);
    }
};

export default integrateRazorpay;
