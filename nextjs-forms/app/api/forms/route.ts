// /api/forms

export async function POST(request: Request) {
  const formData = await request.json();

  // mock delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(formData);
  const { cardholder, cardnumber, expdate, cvv } = formData;

  if (!cardholder || !cardnumber || !expdate || !cvv) {
    return Response.json(
      { error: "Please check your information again!" },
      { status: 400 },
    );
  }

  return Response.json(
    { success: "Thank you for your purchase!" },
    {
      status: 201,
    },
  );
}
