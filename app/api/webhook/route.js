export const POST = async (req, res) => {
  try {
    const body = await req.json();
    res.status(200).send({ message: "API Hitt Susceess", body: body });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error in User Creattion" },
      { status: 500 }
    );
  }
};
