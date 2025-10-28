
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
  surgical: {
    id: number;
    operation_date: string;
    nature_of_anesthesia: string;
    complications: string;
    procedure_notes: string;
    post_operative_recovery: string;
    post_operative_recovery_notes: string;
    challenges_during_surgery: string;
    remarks: string;
  };
  surgery_name: string;
}
export interface PostOpsData {
  id: number;
  patient_id: number;
  admission_id: number;
  file_name?: string;
  document_type?: string;
  insert_date?: string;
  dt?: string;
  file_type?: string; 
  remarks?: string;

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
  investigations?: Investigation[] | null;
  operation_id?: string[];
 
}
export interface Drug {
  dose: string;
  drug_name: string;
  frequency: string;
}

export interface Investigation {
  investigation_id: number;
  investigation_name: string;
  investigation_report_result: string;
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


