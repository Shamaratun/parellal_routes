// export interface FileResponse {
//   base64: string;
//   mimeType: string;
//   fileName: string;
// }

// export async function fetchFile(fileId: string): Promise<FileResponse> {
//   console.log("➡️ fetchFile starting, fileId:", fileId);
//   try {
//     const response = await fetch(
//       "https://sdms-api.onrender.com/api/v1/drive/downloadfile",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           fileid: fileId, // 👈 MUST be `fileid`, not `drive_file_id`
//         }),
//       }
//     );

//     if (!response.ok) {
//       const text = await response.text();
//       throw new Error(`HTTP ${response.status}: ${text}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("fetchFile error:", error);
//     throw error;
//   }
// }

// // lib/actions/listOfDocsAction.ts

export interface FileResponse {
  base64: string;
  mimeType: string;
  fileName: string;
}

export async function fetchFile(fileId: string): Promise<FileResponse> {
  console.log("➡️ fetchFile starting, fileId:", fileId);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SDMS_API_BASE}/drive/downloadfile`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileid: fileId, // 👈 must be `fileid`
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    return await response.json();
  } catch (error) {
    console.error("fetchFile error:", error);
    throw error;
  }
}
