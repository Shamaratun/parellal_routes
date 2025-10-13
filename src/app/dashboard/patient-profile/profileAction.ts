"use server";

export async function getProfileAction(patient_id: number) {
  const baseUrl =
    'https://sdms-api-o74bb.ondigitalocean.app/api/v1';
console.log("Base URL:", baseUrl);
  const payload = {
    action_mode: "get_profile_by_patient_id",
    patient_id: patient_id
  };

  console.log("➡️ Request URL:", `${baseUrl}/patientProfile/getProfile`);
  console.log("➡️ Payload:", payload);

  if (!patient_id) {
    throw new Error("Invalid patient_id provided");
  }

  try {
    const res = await fetch(`${baseUrl}/patientProfile/getProfile`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const data = await res.json();
    console.log("⬅️ Response JSON:", data);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}, message: ${data?.message || "Bad Request"}`);
    }

    return data;
  } catch (err) {
    console.error("❌ Fetch failed:", err);
    throw err;
  }
}

//  "use server";

// export async function getProfileAction(patient_id: number) {
//   if (!patient_id) throw new Error("Invalid patient_id");

//   const baseUrl = "https://sdms-api.onrender.com/api/v1"; 

//   const payload = {
//     action_mode: "get_profile", 
//     patient_id,
//   };

//   console.log("➡️ Request URL:", `${baseUrl}/patientProfile/getProfile`);
//   console.log("➡️ Payload:", payload);

//   try {
//     const res = await fetch(`${baseUrl}/patientProfile/getProfile`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//       cache: "no-store",
//     });

//     const data = await res.json();
//     console.log("⬅️ Response JSON:", data);

//     if (!res.ok) {
//       throw new Error(
//         `HTTP error! status: ${res.status}, message: ${data?.message || "Bad Request"}`
//       );
//     }

//     return data;
//   } catch (err) {
//     console.error("❌ Fetch failed:", err);
//     throw err;
//   }
// }