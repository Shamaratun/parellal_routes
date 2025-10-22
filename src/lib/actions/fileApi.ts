// import axios, { AxiosError } from "axios";

// const API_URL = "https://sdms-api-o74bb.ondigitalocean.app/api/v1/fileupload/fileuploadapi/";

// // ===== Submit record with file =====
// const submitRecordWithFile = async (formData: FormData) => {
//   try {
//     const response = await axios.post(API_URL, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (err: unknown) {
//     const error = err as AxiosError;
//     console.error("API Error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // ===== List all records =====
// const listRecords = async () => {
//   try {
//     const response = await axios.post(API_URL, { action_mode: "getlist" });
//     return response.data;
//   } catch (err: unknown) {
//     const error = err as AxiosError;
//     console.error("List Error:", error.response?.data || error.message);
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
//     const response = await axios.post<Blob>(
//       API_URL,
//       { action_mode: "download-single", file_id, patient_id, admission_id },
//       { responseType: "blob" }
//     );
//     return response.data;
//   } catch (err: unknown) {
//     const error = err as AxiosError;
//     console.error("Download Error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // ===== Preview file by ID =====
// const previewFileById = (drive_file_id: string) => {
//   try {
//     const previewLink = `${API_URL}preview?drive_file_id=${drive_file_id}`;
//     window.open(previewLink, "_blank");
//   } catch (err: unknown) {
//     const error = err as AxiosError;
//     console.error("Preview Error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // ===== Export fileAPI =====
// const fileAPI = {
//   submitRecordWithFile,
//   listRecords,
//   downloadFileById,
//   previewFileById,
// };

// export default fileAPI;

const API_URL =
  process.env.NEXT_PUBLIC_SDMS_API_BASE +
  "/fileupload/fileuploadapi/";

// ===== Submit record with file =====
const submitRecordWithFile = async (formData: FormData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Upload failed: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// ===== List all records =====
const listRecords = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action_mode: "getlist" }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`List request failed: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("List Error:", error);
    throw error;
  }
};

// ===== Download file by ID =====
const downloadFileById = async (
  file_id: string,
  patient_id: string,
  admission_id: string
) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action_mode: "download-single",
        file_id,
        patient_id,
        admission_id,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Download failed: ${errorText}`);
    }

    return await response.blob();
  } catch (error) {
    console.error("Download Error:", error);
    throw error;
  }
};

// ===== Preview file by ID =====
const previewFileById = (drive_file_id: string) => {
  try {
    const previewLink = `${API_URL}preview?drive_file_id=${drive_file_id}`;
    window.open(previewLink, "_blank");
  } catch (error) {
    console.error("Preview Error:", error);
    throw error;
  }
};

// ===== Export fileAPI =====
const fileAPI = {
  submitRecordWithFile,
  listRecords,
  downloadFileById,
  previewFileById,
};

export default fileAPI;