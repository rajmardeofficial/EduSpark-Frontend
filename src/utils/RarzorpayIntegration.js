import { getCheckoutHandler, getKey } from "../store/adminrelated/AdminHandle";

const integrateRazorpay = async (dispatch, formData, currentDataType) => {
    const amount = 5000;
    const key = await getKey(dispatch);
    const order = await getCheckoutHandler(dispatch, amount);
    console.log(key, order);

    const data = {
        studentType: currentDataType,
        email: "john.doe@example.com",
    };
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
                callback_url: `${process.env.REACT_APP_BASE_URL_BACKEND}/auth/platformCharges/paymentverification/${encodeURIComponent(dataString)}`,
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
