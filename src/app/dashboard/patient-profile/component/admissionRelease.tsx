import { useState, useEffect } from "react";
import { AdmissionData, ReleaseData } from "../type";

interface Props {
    admissionData: AdmissionData | null;
    releaseData?: ReleaseData[] | null;
}

export default function AdmissionRelease({ admissionData, releaseData }: Props) {
    const [admissions, setAdmissions] = useState<AdmissionData[]>([]);
    const [releases, setReleases] = useState<ReleaseData[]>([]);

    useEffect(() => {
        if (admissionData) setAdmissions([admissionData]);
        if (releaseData && releaseData.length > 0) setReleases(releaseData);
    }, [admissionData, releaseData]);

    const fmtDate = (iso?: string) =>
        iso ? new Date(iso).toLocaleDateString() : "N/A";
    const fmtDateTime = (iso?: string) =>
        iso ? new Date(iso).toLocaleString() : "N/A";

    return (
        <div className="space-y-8">
            {/* ====== Admission Table ====== */}
            <div className="bg-white shadow-md rounded-xl p-4 overflow-x-auto">
                <h2 className="text-lg font-bold text-blue-700 mb-4">
                    🏥 Admission Data
                </h2>
                <table className="min-w-full table-auto border border-gray-200">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="p-2 border-b">Admission ID</th>
                            <th className="p-2 border-b">Hospital</th>
                            <th className="p-2 border-b">Admission Date</th>
                            <th className="p-2 border-b">Status</th>
                            <th className="p-2 border-b">Remarks</th>
                            <th className="p-2 border-b">Referral Source</th>
                            <th className="p-2 border-b">Inserted By</th>
                            <th className="p-2 border-b">Insert Date</th>
                            <th className="p-2 border-b">Updated By</th>
                            <th className="p-2 border-b">Update Date</th>
                            <th className="p-2 border-b">Is Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admissions.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={11}
                                    className="text-center p-4 text-gray-500 italic"
                                >
                                    No admission records.
                                </td>
                            </tr>
                        ) : (
                            admissions.map((adm) => (
                                <tr
                                    key={adm.id}
                                    className="border-t hover:bg-blue-50 transition-colors"
                                >
                                    <td className="p-2">{adm.id}</td>
                                    <td className="p-2">{adm.hospital_name}</td>
                                    <td className="p-2">{fmtDate(adm.date_of_adm)}</td>
                                    <td className="p-2">{adm.adm_status || "N/A"}</td>
                                    <td className="p-2">{adm.remarks || "N/A"}</td>
                                    <td className="p-2">
                                        {adm.referral_source_name || "N/A"}
                                    </td>
                                    <td className="p-2">{adm.insert_by || "N/A"}</td>
                                    <td className="p-2">
                                        {adm.insert_date ? fmtDate(adm.insert_date) : "N/A"}
                                    </td>
                                    <td className="p-2">{adm.update_by || "N/A"}</td>
                                    <td className="p-2">
                                        {adm.update_date ? fmtDate(adm.update_date) : "N/A"}
                                    </td>
                                    <td className="p-2">
                                        {adm.is_active !== undefined
                                            ? adm.is_active
                                                ? "Yes"
                                                : "No"
                                            : "N/A"}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* ====== Release Table ====== */}
            <div className="bg-white shadow-md rounded-xl p-4 overflow-x-auto">
                <h2 className="text-lg font-bold text-green-700 mb-4">📤 Release Data</h2>
                <table className="min-w-full table-auto border border-gray-200">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="p-2 border-b">Release ID</th>
                            <th className="p-2 border-b">Admission ID</th>
                            <th className="p-2 border-b">Discharge Date</th>
                            <th className="p-2 border-b">Outcome</th>
                            <th className="p-2 border-b">Advice on Discharge</th>
                            <th className="p-2 border-b">Created At</th>
                            <th className="p-2 border-b">Hospital ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {releases.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={8}
                                    className="text-center p-4 text-gray-500 italic"
                                >
                                    No release records.
                                </td>
                            </tr>
                        ) : (
                            releases.map((rel) => (
                                <tr
                                    key={rel.id}
                                    className="border-t hover:bg-green-50 transition-colors"
                                >
                                    <td className="p-2">{rel.id}</td>
                                    <td className="p-2">{rel.admission_id}</td>
                                    <td className="p-2">{fmtDateTime(rel.discharge_date_time)}</td>
                                    <td className="p-2">{rel.outcome}</td>
                                    <td className="p-2">{rel.advice_on_discharge}</td>
                                    <td className="p-2">{fmtDateTime(rel.created_at)}</td>
                                    <td className="p-2">{rel.hospital_id}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
