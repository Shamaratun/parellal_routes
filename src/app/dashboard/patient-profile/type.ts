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

export interface AdmissionData {
  adm_status: string;
  date_of_adm: string;
  hospital_id?: number; 
  hospital_name: string;
  id: number; 
  insert_by: string;
  insert_date: string;
  is_active: number;
  referral_source_name: string;
  remarks: string;
  update_by: string | null;
  update_date: string | null;
  
}

export interface PreSurgicalData {
  id?: number;
  patient_id: number;
  hospital_id: number;
  doctor_id?: number | null;
  admission_id?: number | null;
  diagnosis_id?: string[] | null;
  co_morbidities_id?: string[] | null;
  drug_history?: string[] | null;
  investigations?: InvestigationItem[] | null;
  surgical_history?: string | null;
  remarks?: string | null;
  is_active?: number;
  insert_by?: string | null;
  insert_date?: string;
  update_by?: string | null;
  update_date?: string;
  dt?: string;
}


export interface InvestigationItem {
  investigationId: number;
  testName: string;
  date: string;
  result: string;
  doctor: string;
  notes?: string;
}
export interface SurgicalData{ 
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


export interface AdmissionItem {
  admission_data: AdmissionData | null;
  pre_ops_data: any | null;
  post_ops_data: SurgicalData | null;
  release_data: ReleaseData | null;
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
export interface Patient {
  id: number;
  // patient_id: number;         
  admission_id: number ; 
  hospital_id: number ;
  patient_name: string;
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
  name: string;             
}




export interface CombinedPatient  {
  admission_id: number;
  hospital_name: string;
  hospital_id: number;
  adm_status?: string;
  date_of_adm?: string;
  referral_source_name?: string;
  admission_remarks?: string;
}


export interface PatientProfileData {
  patient_basic: Patient;
  admissions: AdmissionItem[];
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