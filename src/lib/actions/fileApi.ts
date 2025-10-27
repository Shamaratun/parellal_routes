// "use client";

// const API_URL =
//   process.env.NEXT_PUBLIC_SDMS_API_BASE +
//   "/fileupload/fileuploadapi/";

// // ===== Submit record with file =====
// export const submitRecordWithFile = async (formData: FormData) => {
//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       body: formData,
//       credentials: "include",
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Upload failed: ${errorText}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("API Error:", error);
//     throw error;
//   }
// };

// // ===== List all records =====
// export const listRecords = async () => {
//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ action_mode: "getlist" }),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`List request failed: ${errorText}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("List Error:", error);
//     throw error;
//   }
// };

// // ===== Download file by ID =====
// export const downloadFileById = async (
//   file_id: string,
//   patient_id: string,
//   admission_id: string
// ) => {
//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         action_mode: "download-single",
//         file_id,
//         patient_id,
//         admission_id,
//       }),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Download failed: ${errorText}`);
//     }

//     // Return blob for file saving or inline preview
//     return await response.blob();
//   } catch (error) {
//     console.error("Download Error:", error);
//     throw error;
//   }
// };

// // ===== Preview file by ID =====
// export const previewFileById = (drive_file_id: string) => {
//   try {
//     if (!drive_file_id) throw new Error("Missing drive_file_id");
//     const previewLink = `${API_URL}preview?drive_file_id=${drive_file_id}`;
//     window.open(previewLink, "_blank");
//   } catch (error) {
//     console.error("Preview Error:", error);
//     throw error;
//   }
// };

"use client";

const API_URL =
  process.env.NEXT_PUBLIC_SDMS_API_BASE + "/fileupload/fileuploadapi/";

export const downloadFileById = async (
  file_id: string,
  patient_id: string,
  admission_id: string
) => {
  const payload = {
    action_mode: "download-single",
    file_id,
    patient_id,
    admission_id,
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    credentials: "include", // optional, if cookies/session needed
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Download failed: ${errorText}`);
  }

  // Convert response to blob (file)
  const blob = await response.blob();

  // Try to extract filename if backend sends `Content-Disposition`
  const contentDisposition = response.headers.get("Content-Disposition");
  const filenameMatch = contentDisposition?.match(/filename="?([^"]+)"?/);
  const filename = filenameMatch ? filenameMatch[1] : "downloaded-file";

  return { blob, filename };
};

//  "use client";
// const API_URL =
//   process.env.NEXT_PUBLIC_SDMS_API_BASE + "/fileupload/fileuploadapi/";

// export const downloadFileById = async (
//   file_id: string,
//   patient_id: string,
//   admission_id: string
// ) => {
//   const payload = {
//     action_mode: "download-single",
//     file_id,
//     patient_id,
//     admission_id,
//   };

//   const response = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(`Download failed: ${errorText}`);
//   }

//   return await response.blob();
// };
