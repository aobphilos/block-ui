/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** An asset named RequestMedicalRecords */
export interface IRequestMedicalRecords {
  /**
   * The class identifier for this type
   * default: org.health.network.RequestMedicalRecords
   */
  $class?: string;
  /** The instance identifier for this type */
  RequestId: string;
  FromHospital: string;
  ToHospital: string;
  Cid: string;
  /** format: date-time */
  StartDate: Date;
  /** format: date-time */
  EndDate: Date;
  /** format: date-time */
  CreatedDate: string;
  CreatedBy: string;

  // add-on fields
  Id: number;
  Status: string;
}
