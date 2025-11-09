
export interface Patient {
  id: number;
  admission_id: number;
  hospital_id: number;
  patient_name: string;
  name: string;
  age: number;
  gender: string;
  mobile_number: string;
  address_line_one: string;
  dt: string;
  is_active: number;
  marital_status: string;
  occupation: string;
  patient_generated_uid: string;
  religion: string;
  remarks: string;
  insert_by: string;
  insert_date: string;
  update_by: string | null;
  update_date: string | null;
}
export interface AdmissionData {
  id: number;
  adm_status: string;
  date_of_adm: string;
  hospital_id?: number;
  hospital_name: string;
  insert_by: string;
  insert_date: string;
  is_active: number;
  referral_source_name: string;
  remarks: string;
  update_by: string | null;
  update_date: string | null;
  outcome: string;
  created_at: string;
  updated_at: string | null;
  patient_id: number;
  admission_id: number;
  advice_on_discharge: string;
  discharge_date_time: string;
  blood_group: string;
}

export interface SurgicalRecord {
  id: string;
  surgery_name: string;
  surgical?: {
    operation_date?: string;
    procedure_notes?: string;
    remarks?: string;
    complications?: string;
  };
}
export interface PostOpsData {
  id: number;
  patient_id: number;
  admission_id: number;
  fileid: string;
  name: string;
  file_name?: string;
  document_type?: string;
  insert_date?: string;
  dt?: string;
  file_type?: string;
  remarks?: string;
  drive_file_id?: string;// add omar
  mime_type: string;
}
export type PreOpsData = {
  id: number;
  patient_id?: number;
  admission_id?: number;
  co_morbidities_id?: string[];
  diagnosis_id?: string[];
  drug_history?: string[];
  dt?: string;
  insert_date?: string;
  surgical_history?: string;
  remarks?: string | null;
  operation_id?: string[];
  investigations?: {
    investigation_name: string;
    investigation_report_result: string;
  }[]; //  This must be an array!
};
export interface Drug {
  dose: string;
  drug_name: string;
  frequency: string;
}



export interface ReleaseData {
  id: number;
  outcome: string;
  created_at: string;
  updated_at: string | null;
  patient_id: number;
  hospital_id: number;
  admission_id: number;
  advice_on_discharge: string;
  discharge_date_time: string;
}

export interface PatientFilesListProps {
  patient_id: number;
  admission_id?: number;
}


