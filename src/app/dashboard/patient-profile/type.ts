
export interface Patientt {
  id: number;
  name: string;
  age: number;
  gender: string;
  mobile_number: string;
  marital_status?: string;
  religion?: string;
  address_line_one: string;
}

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

export interface AdmittedPatient {
  id: number;
  name: string;
  age: number;
  gender: string;
  mobile_number: string;
  address: string;
  marital_status: string;
  occupation: string;
  religion: string;
  remarks: string;
}

export interface Visit {
  id: number;
  date: string;
  time: string;
  department: string;
  doctor: string;
  reason: string;
  status: string;
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
}

export interface InvestigationItem {
  investigationId: number;
  testName: string;
  date: string;
  result: string;
  doctor: string;
  notes?: string;
}

export interface PreOpsData {
  id: number;
  patient_id: number;
  admission_id: number;
  diagnosis_id?: string[];
  co_morbidities_id?: string[];
  drug_history?: string[];
  investigations?: Record<string, string>;
  remarks?: string | null;
}


export interface SurgicalData {
  dt: string;
  id: number;
  remarks: string;
  doctor_id: number;
  file_name: string;
  file_type: string;
  insert_by: string;
  is_active: number;
  update_by: string | null;
  patient_id: number;
  hospital_id: number;
  insert_date: string;
  update_date: string | null;
  admission_id: number;
  document_type: string;
  drive_file_id: string;
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



export interface RecordItem {
  id: number;
  patient_id: number;
  hospital_id: number;
  admission_id: number;
  doctor_id?: number;
  file_name: string;
  file_type?: string;
  document_type?: string;
  drive_file_id?: string;
  remarks?: string;
}

export interface PatientFilesListProps {
  patient_id: number;
  admission_id?: number;
}





export interface ProfileData {
  patient_basic?: Partial<Patient> | null;
  admission_data?: Partial<AdmissionData> | null;
  pre_ops_data?: PreOpsData[] | null;
  post_ops_data?: SurgicalData[] | null;
  release_data?: ReleaseData | null;
  [key: string]: any;
}
