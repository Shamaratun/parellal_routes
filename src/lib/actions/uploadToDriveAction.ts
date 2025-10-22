

// const API_URL =
//   process.env.NEXT_PUBLIC_SDMS_API_BASE +
//   "/fileupload/fileuploadapi/";

// // ===== Submit record with file =====
// const submitRecordWithFile = async (formData: FormData) => {
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
// const listRecords = async () => {
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
// const downloadFileById = async (
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

//     return await response.blob();
//   } catch (error) {
//     console.error("Download Error:", error);
//     throw error;
//   }
// };

// // ===== Preview file by ID =====
// const previewFileById = (drive_file_id: string) => {
//   try {
//     const previewLink = `${API_URL}preview?drive_file_id=${drive_file_id}`;
//     window.open(previewLink, "_blank");
//   } catch (error) {
//     console.error("Preview Error:", error);
//     throw error;
//   }
// };

// // ===== Export fileAPI =====
// const uploadToDriveAction = {
//   submitRecordWithFile,
//   listRecords,
//   downloadFileById,
//   previewFileById,
// };

export default uploadToDriveAction;

"use server"; // Next.js server action
const API_URL =
  process.env.NEXT_PUBLIC_SDMS_API_BASE +
  "/fileupload/fileuploadapi/";

export async function uploadToDriveAction(formData: FormData) {
  try {
    // ✅ Validate file types before sending
    const allowedTypes = [
      "application/pdf",
      "video/mp4",
      "video/mov",
      "video/avi",
      "video/mkv",
      "image/jpeg",
      "image/jpg",
      "image/pjpeg",  // extra JPEG type
      "image/png",
      "image/x-png",  // extra PNG type
      "image/gif",
    ];

    const files = formData.getAll("files") as File[];

    for (const file of files) {
      // ✅ allow all image MIME types starting with "image/"
      const isValid =
        allowedTypes.includes(file.type) || file.type.startsWith("image/");

      if (!isValid) {
        console.error("❌ Invalid file type:", file.name, file.type);
        return {
          success: false,
          msg: "Only video, PDF, and image files are allowed",
        };
      }
    }

    // ✅ Upload to remote server
    const response = await fetch(API_URL, {
      method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("❌ Server returned an error:", response.status, text);
      return { success: false, msg: "Server returned an error" };
    }

    const data = await response.json();

    if (!data?.success) {
      console.error("❌ Upload failed (backend):", data);
      return { success: false, msg: data?.msg || "Upload failed" };
    }

    console.log("✅ Upload success:", data);
    return { success: true, data: data.data };
  } catch (error) {
    console.error("🚨 UploadToDriveAction error:", error);
    return { success: false, msg: "Unexpected client-side error" };
  }
}
