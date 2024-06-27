import { lemonSqueezyApiInstance } from "@/lib/axios";

export const dynamic = "force-dynamic";

export async function POST(req :Request) {
  try {
    const reqData = await req.json();

    if (!reqData.product_id)
      return Response.json(
        { message: "product_id is required" },
        { status: 400 }
      );

    const response = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            custom: {
              user_id: "123",
            },
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID!.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.product_id.toString(),
            },
          },
        },
      },
    });

    const checkoutUrl = response.data.data.attributes.url;

    console.log(response.data);

    return Response.json({ checkoutUrl });
  } catch (error) {
    console.error(error);
    Response.json({ message: "An error occured" }, { status: 500 });
  }
}