/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** An asset named SummaryDischarge */
export interface ISummaryDischarge {
  /**
   * The class identifier for this type
   * default: org.health.network.SummaryDischarge
   */
  $class?: string;
  /** The instance identifier for this type */
  SummaryDischargeId: string;
  MedicalRecordId: string;
  WithHospitalCode: string;
  Cid: string;
  PassportNo: string;
  HospitalCode: string;
  Chronic: string;
  Insid: string;
  Allergy: string;
  DrugGroup: string;
  DrugAllergy: string;
  DrugName: string;
  /** format: double */
  DrugAmount: number;
  DiagnoseType: string;
  DiagnoseCode: string;
  AllergicLevel: string;
  Symptom: string;
  Service: string;
  /** format: date-time */
  ServiceDate: string;
  ProcedCode: string;
  /** format: date-time */
  AdmidDate: string;
  DischargeStatus: string;
  LabResult: string;
  /** format: double */
  RW: number;
  /** format: date-time */
  CreatedDate: string;
  CreatedBy: string;
}
