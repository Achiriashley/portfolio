import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const projects = await db.collection("projects").find({}).toArray();

    return new Response(JSON.stringify(projects), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching projects" }), {
      status: 500,
    });
  }
}
