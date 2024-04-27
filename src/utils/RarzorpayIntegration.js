import { getCheckoutHandler, getKey } from "../store/adminrelated/AdminHandle";

const integrateRazorpay = async (dispatch, data,to) => {
    console.log(data,to);
    const amount = data?.amountPaid || 5000;
    const key = await getKey(dispatch,to);
    const order = await getCheckoutHandler(dispatch, amount,to);
    console.log(key, order);

    if(to === "Company"){
        data = {
            studentType: "College",
            email: "alice.smith@example.com",
        };
    } else if(to === "CollegeDocumentFee"){

    }
    else{
        // data = formData;
        data = {
            studentId: '661432f93bd0b5d35800b14a', 
            feeId: '61edf0a23c9790a2e7212346', 
            amountPaid: 5000,
            datePaid: new Date(),
            installmentNumber: 1,
            paymentMethod: 'online',
            payment_id: 'PAYMENT123456', 
            order_id: 'ORDER789012' 
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
                    contact: "1234567890", // contact number of user
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
