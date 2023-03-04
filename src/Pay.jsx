import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51MhFfMGuebOPsVmpH9PdfoxpuyIEMBVW3UutTyYFELMY5Vh2EQ3fRC2iVtzKvH5zx1vHEjewqmCTmqZXHnAb4JHY00DS8FoISb";

const Pay = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Nas"
        image="http://avatars.githubusercontent.com/u/1486366?v=4"
        billingAddress
        shippingAddress
        description="your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
