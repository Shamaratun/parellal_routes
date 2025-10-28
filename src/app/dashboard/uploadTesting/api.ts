
// "use server"; // Next.js server action

// export async function uploadToDriveAction(formData: FormData) {
//   try {
//     // ✅ Allowed MIME types
//     const allowedTypes = [
//       "application/pdf",
//       "video/mp4",
//       "video/mov",
//       "video/avi",
//       "video/mkv",
//       "image/jpeg",
//       "image/jpg",
//       "image/pjpeg", // extra JPEG type
//       "image/png",
//       "image/x-png", // extra PNG type
//       "image/gif",
//     ];

//     const files = formData.getAll("files") as File[];

//     // ✅ Validate each file
//     for (const file of files) {
//       const isValid =
//         allowedTypes.includes(file.type) || file.type.startsWith("image/");
//       if (!isValid) {
//         console.error("❌ Invalid file type:", file.name, file.type);
//         return {
//           success: false,
//           msg: "Only video, PDF, and image files are allowed",
//         };
//       }
//     }

//     // ✅ Use environment variable for API base
//     const API_URL =
//       process.env.NEXT_PUBLIC_SDMS_API_BASE +
//       "/fileupload/fileuploadapi/upload";

//     // ✅ Upload to remote server
//     const response = await fetch(API_URL, {
//       method: "POST",
//       body: formData,
//     });

//     if (!response.ok) {
//       const text = await response.text();
//       console.error("❌ Server returned an error:", response.status, text);
//       return { success: false, msg: "Server returned an error" };
//     }

//     const data = await response.json();

//     if (!data?.success) {
//       console.error("❌ Upload failed (backend):", data);
//       return { success: false, msg: data?.msg || "Upload failed" };
//     }

//     console.log("✅ Upload success:", data);
//     return { success: true, data: data.data };
//   } catch (error) {
//     console.error("🚨 UploadToDriveAction error:", error);
//     return { success: false, msg: "Unexpected client-side error" };
//   }
// }
"use server"; // Next.js Server Action (runs on the server)

export async function uploadToDriveAction(formData: FormData) {
  try {
    // ✅ Allowed MIME types
    const allowedTypes = [
      "application/pdf",
      "video/mp4",
      "video/quicktime", // for MOV
      "video/x-msvideo", // for AVI
      "video/x-matroska", // for MKV
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
    ];

    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return { success: false, msg: "No files provided for upload" };
    }

    // ✅ Validate file types
    for (const file of files) {
      const isValid =
        allowedTypes.includes(file.type) || file.type.startsWith("image/");
      if (!isValid) {
        console.error("❌ Invalid file type:", file.name, file.type);
        return {
          success: false,
          msg: `Invalid file type: ${file.name}. Only video, PDF, and image files are allowed.`,
        };
      }
    }

    // ✅ Get base URL
    const API_URL = `${process.env.NEXT_PUBLIC_SDMS_API_BASE}/fileupload/fileuploadapi/upload`;

    if (!API_URL) {
      throw new Error("Missing environment variable: NEXT_PUBLIC_SDMS_API_BASE");
    }

    // ✅ Perform actual upload
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    // ✅ Validate server response
    if (!response.ok) {
      const text = await response.text();
      console.error("❌ Server responded with error:", response.status, text);
      return { success: false, msg: `Server error: ${response.statusText}` };
    }

    let data;
    try {
      data = await response.json();
    } catch {
      const text = await response.text();
      console.error("❌ Failed to parse JSON:", text);
      return { success: false, msg: "Invalid server response format" };
    }

    // ✅ Handle backend structure
    if (!data?.success) {
      console.error("❌ Upload failed (backend):", data);
      return { success: false, msg: data?.msg || "Upload failed" };
    }

    console.log("✅ Upload successful:", data);
    return { success: true, data: data.data || [] };
  } catch (error) {
    console.error("🚨 uploadToDriveAction error:", error);
    return { success: false, msg: "Unexpected error during upload" };
  }
}