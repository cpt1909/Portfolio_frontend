import clientPromise from "../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const projects = await db.collection("projects")
      .find({}, { projection: { _id: 0, sno: 0 } })
      .sort({ sno: 1 })
      .toArray();

    const skills = await db.collection("skills")
      .find({}, { projection: { _id: 0, sno: 0 } })
      .sort({ sno: 1 })
      .toArray();

    const certifications = await db.collection("certifications")
      .find({}, { projection: { _id: 0, sno: 0 } })
      .sort({ sno: 1 })
      .toArray();

    const education = await db.collection("education")
      .find({}, { projection: { _id: 0, sno: 0 } })
      .sort({ sno: -1 })
      .toArray();

    const experience = await db.collection("experience")
      .find({}, { projection: { _id: 0, sno: 0 } })
      .sort({ sno: -1 })
      .toArray();

    return new Response(JSON.stringify({
      project: projects,
      skill: skills,
      certification: certifications,
      education: education,
      experience: experience,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
