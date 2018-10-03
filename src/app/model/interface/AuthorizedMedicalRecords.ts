/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** An asset named AuthorizedMedicalRecords */
export interface IAuthorizedMedicalRecords {
  /**
   * The class identifier for this type
   * default: org.health.network.AuthorizedMedicalRecords
   */
  $class?: string;
  /** The instance identifier for this type */
  RequestId: string;
  MedicalRecordsId: string;
  AuhorizedByHospital: string;
  RequestByHospital: string;
  /** format: date-time */
  RequestDate: string;
  /** format: date-time */
  CreatedDate: string;
  CreatedBy: string;
}
